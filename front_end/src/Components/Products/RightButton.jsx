import prev from "../../assets/images/prev.png";

const RightButton = ({ onClick, disabled }) => {
  return (
    <div
      className="btn-right"
      onClick={!disabled ? onClick : undefined} // منع الضغط إذا disabled
      style={{
        opacity: disabled ? 0.3 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
        zIndex: 10,
      }}
    >
      <img src={prev} alt="prev" />
    </div>
  );
};

export default RightButton;
