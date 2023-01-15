import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Withdrawal = () => {

   const notify = () => {
     toast("Deleted");
     setReload((reload) => !reload);
   };
   const [reload, setReload] = useState(false);
   const [users, setUsers] = useState([]);
   const [search, setSearch] = useState("");

   useEffect(() => {
     fetch("https://tame-pear-chinchilla-kit.cyclic.app/withdrawals", {
       method: "get",
       headers: { "Content-Type": "application/json" },
     })
       .then((res) => res.json())
       .then((res) => {
         console.log("usersssssssssss", res.users);
         setUsers(res.users);
       })
       .catch((err) => console.log("errrrrrrr", err));
   }, [reload]);

  return (
    <div className="px-0 lg:px-0 w-full">
      <div>
        <AdminNav />
        <div className="px-4 md:px-10 mx-auto w-full m-24">
          <div className="">
            <div>
              <div class="text-2xl font-semibold mb-4 text-center default_cursor_cs">
                All Users on the site
              </div>
              <input
                type="text"
                placeholder="search here..."
                class="mx-auto block py-2 rounded px-2 my-2"
              ></input>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Withdrawal;