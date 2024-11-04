import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ArrowBtn = ({ position = "left", classNameleft, classNameright }) => {
  return (
    <>
      {" "}
      {position === "left" ? (
        <FaArrowLeft className={classNameleft}></FaArrowLeft>
      ) : (
        <FaArrowRight className={classNameright}></FaArrowRight>
      )}
    </>
  );
};

export default ArrowBtn;
