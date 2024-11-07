const ParallaxBg = ({ children, className }) => {
  return (
    <div
      className={`bg-parallax bg-fixed bg-center bg-cover 
  min-h-[400px] ${className}`}
    >
      {children}
    </div>
  );
};

export default ParallaxBg;
