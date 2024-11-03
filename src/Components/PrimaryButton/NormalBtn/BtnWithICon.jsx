const BtnWithICon = ({ icon, position = "right", text, classname }) => {
  return (
    <button
      className={`btn h-auto mt-4 border-transparent hover:bg-[#B22222] hover:border-[#ff7f50]  bg-[#ff7f50] text-white font-bold px-4  md:py-4 py-2 text-sm max-w-[180px]   group transition duration-300 ${classname}`}
    >
      <span className="flex flex-row items-center justify-center group-hover:translate-x-2 transition duration-300  gap-2  ">
        {position === "left" && icon}
        {text}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default BtnWithICon;
