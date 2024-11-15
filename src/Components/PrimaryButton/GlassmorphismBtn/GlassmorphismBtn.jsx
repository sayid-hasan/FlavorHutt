import "./glassmorphism.css";
const GlassmorphismButton = ({
  text = "Read Me",
  color = "white",
  className = "w-[200px]",
  containerClassName,
  textClass,
}) => {
  return (
    <div className={`glassBtn-container ${containerClassName} `}>
      <div
        className={`btn   h-[40px] md:h-[60px]  rounded-full bg-[#ff7f50] ${className}`}
      >
        <span
          className={`${textClass} rounded-full text-lg md:text-xl w-full text-${color} hover:text-white`}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default GlassmorphismButton;
