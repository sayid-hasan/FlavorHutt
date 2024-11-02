import "./glassmorphism.css";
const GlassmorphismButton = ({
  text = "Read Me",
  color = "white",
  mdWidth = "200px",
  width = "150px",
}) => {
  return (
    <div className={`glassBtn-container  `}>
      <div
        className={`btn h-[40px] md:h-[60px] w-[${width}] md:!w-[${mdWidth}] rounded-full bg-[#ff7f50]`}
      >
        <span
          className={`rounded-full text-lg md:text-xl text-${color} hover:text-white`}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default GlassmorphismButton;
