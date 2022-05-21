import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate  } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { setAdUser } from "../../Redux/action";
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';


const User = ({ user, notify }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  // let history = useHistory();
  const EditUser = () => {
    dispatch(setAdUser(user));
    navigate("/admin/editUser", { replace: true });
    notify()
  };

  const onDel = async () => {
    const { email } = user;
    const isNotThere = await fetch(
      "/deleteuser",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }
    );
    let resp = await isNotThere.json();
    notify()
  };

  return (
    <div className="px-2 py-3 bg-accent border rounded-md text-white shadow-xl mb-2 border-white mr-2 flex-1 flex justify-between">
      <h6 className="text-base font-semibold">
        <div>{`Name: ${user.name}`}</div>
        <div>{`Email: ${user.email}`}</div>
      </h6>
      <div className="mt-3 text-gray-600 flex justify-between ml-6">
        <FiEdit className="text-blue-300" size={34} onClick={EditUser}/>
        <RiDeleteBinLine  className="text-red-400 ml-8 mr-4" size={34} onClick={onDel}/>
      </div>
    </div>
  );
};

export default User;
