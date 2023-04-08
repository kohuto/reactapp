import CloseOpen from "../CloseOpenWindow/closeOpenWindow";
import InputBox from "./inputBox";
import "./style.css";

function CountPaths({ setOpenDialog }) {
  return (
    <>
      <CloseOpen content={<InputBox setOpenDialog={setOpenDialog} />} />
    </>
  );
}

export default CountPaths;
