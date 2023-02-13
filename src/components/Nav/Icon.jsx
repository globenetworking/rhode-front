import { Link } from "react-router-dom";
import { TbTrademark } from "react-icons/tb";
const Icon = () => {
  return (
    <>
      <Link
        to="/"
        className="rounded-md w-32 pointer py-2 relative px- flex justify-center text-white updpercase m-3 font-bold items-center text-[18px]"
      >
        Rhode
        <span className="text-sm ml- rounded bg-blue-600 px-1 font-extrabold font-mono text-black">
          Analytics
        </span>
        <span
          className=" text-white bdg-white absolute left-[126px] righdt-0.5 pt-1 top-0.5"
          style={{ fodntSize: "3px" }}
        >
          <TbTrademark />
        </span>
      </Link>
    </>
  );
};

export default Icon;
