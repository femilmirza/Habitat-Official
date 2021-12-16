import Image from "next/image";

const NavBar: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex w-full justify-between items-center px-8 py-4">
        <h1 className="font-orbitron text-4xl text-white">Habitat</h1>
        <Image
          src="/LucidMach.jpg"
          alt="a person"
          className="rounded-full w-9 h-9"
          width={48}
          height={48}
        />
      </div>
      <div className="mx-8 h-[1px] bg-gradient-to-r from-pri to-sec ..."></div>
      <h4 className="text-white text-right px-8 py-2 font-poppins">
        your favourite habit tracker!
      </h4>
    </div>
  );
};

export default NavBar;
