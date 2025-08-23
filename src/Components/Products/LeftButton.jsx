import next from "../../assets/images/next.png";

const LeftButton = ({ onClick, disabled }) => {
  return (
    <div
      className="btn-left"
      onClick={!disabled ? onClick : undefined} // منع الضغط إذا disabled
      style={{
        opacity: disabled ? 0.3 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
        zIndex: 10,
      }}
    >
      <img src={next} alt="next" />
    </div>
  );
};

export default LeftButton;
