import { useState, useEffect } from "react";
import { collection, setDoc, getDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const getUserStatus = async (userEmailID: string) => {
  const docRef = doc(db, "status", userEmailID);
  const snapshot = await getDoc(docRef);
  if (snapshot.exists()) return snapshot.data();
  return null;
};

const setUserStatus = async (userEmailId: string, data: boolean[]) => {
  await setDoc(doc(db, "status", userEmailId), { data });
};

const Streak: React.FC = () => {
  const [status, setStatus] = useState<boolean[]>(new Array(56).fill(false));
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!loading) {
      if (!user) {
        const snapshot = window.localStorage.getItem("status");
        if (snapshot) {
          const prevStatus = JSON.parse(snapshot);
          setStatus(prevStatus);
        }
      } else {
        getUserStatus(user.email).then((data) => setStatus(data.data));
      }
    }
  }, [user, loading]);

  useEffect(() => {
    if (!loading) {
      if (!user) {
        window.localStorage.setItem("status", JSON.stringify(status));
      } else {
        if (user) setUserStatus(user.email, status);
      }
    }
  }, [status]);

  const handleClick = (day: number) => {
    const newStatus = [...status];
    newStatus[day] = !newStatus[day];
    setStatus(newStatus);
  };

  const handleBtn = () => {
    setStatus(new Array(56).fill(false));
  };

  return (
    <div className="flex flex-col items-stretch px-8 gap-2">
      <div className="grid grid-cols-4 sm:grid-cols-7 gap-1">
        {status.map((dayStatus, day) => {
          return (
            <div
              className={`${
                dayStatus ? "bg-pri" : "none"
              } border-2 border-sec rounded-lg h-10 sm:hover:bg-sec ... hover:cursor-pointer`}
              key={day}
              onClick={() => handleClick(day)}
            ></div>
          );
        })}
      </div>
      <button
        className="hover:border-2 w-10 h-10 items-center self-end hover:border-sec rounded-lg flex justify-center"
        onClick={handleBtn}
      >
        <svg
          className="m-1"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#B05883"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.64 6.35C16.19 4.9 14.2 4 11.99 4C7.57 4 4 7.58 4 12C4 16.42 7.57 20 11.99 20C15.72 20 18.83 17.45 19.72 14H17.64C16.82 16.33 14.6 18 11.99 18C8.68 18 5.99 15.31 5.99 12C5.99 8.69 8.68 6 11.99 6C13.65 6 15.13 6.69 16.21 7.78L12.99 11H19.99V4L17.64 6.35Z" />
        </svg>
      </button>
    </div>
  );
};

export default Streak;
