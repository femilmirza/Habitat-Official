import { useState, useEffect } from "react";

const Streak: React.FC = () => {
  const [status, setStatus] = useState<boolean[]>(new Array(56).fill(false));

  useEffect(() => {
    const history = window.localStorage.getItem("status");

    if (history) {
      const prevStatus = JSON.parse(history);
      setStatus(prevStatus);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("status", JSON.stringify(status));
  }, [status]);

  return (
    <div className="flex flex-col items-stretch px-8 gap-2">
      <div className="grid grid-cols-4 sm:grid-cols-7 gap-1">
        {status.map((dayStatus, day) => {
          return (
            <div
              className={`${
                dayStatus ? "bg-pri" : "none"
              } border-2 border-sec rounded-lg h-10 hover:bg-pri ... hover:cursor-pointer`}
              key={day}
              onClick={() => {
                const newStatus = [...status];
                newStatus[day] = !newStatus[day];
                setStatus(newStatus);
              }}
            ></div>
          );
        })}
      </div>
      <button
        className="border-2 border-sec rounded-lg flex justify-center hover:bg-sec"
        onClick={() => {
          setStatus(new Array(56).fill(false));
        }}
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
