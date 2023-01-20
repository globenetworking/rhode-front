import { Link } from "react-router-dom";
import { TbTrademark } from "react-icons/tb";
const WhiteIcon = () => {
  return (
    <>
      <Link
        to="/"
        className="rounded-xl shadow-md w-32 boerder-red-600 border-2 bg-black pointer py-2 relative px- flex justify-center text-whidte updpercase m-3 font-bold text-white items-center text-[18px]"
      >
        Octa
        <span className="text-sm ml- rounded bg-red-600 px-1 font-extrabold font-mono text-black">
          trade
        </span>
        <span
          className=" text-whitd bdg-white absolute right-1.5 pt-1 top-0.5"
          style={{ fodntSize: "3px" }}
        >
          <TbTrademark />
        </span>
      </Link>
    </>
  );
};

export default WhiteIcon;
