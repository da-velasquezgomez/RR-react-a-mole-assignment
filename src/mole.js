import { useEffect } from "react";
import moleImg from "./mole.png";

const Mole = (props) => {
  useEffect(() => {
    let randSeconds = Math.ceil(Math.random() * 50000);
    let timer = setTimeout(() => {
      props.toggle(false);
    }, randSeconds);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <img
        style={{ width: "10vw" }}
        src={moleImg}
        onClick={props.handleClick}
        alt="Mole"
      />
    </div>
  );
};

export default Mole;
