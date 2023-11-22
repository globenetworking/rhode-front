import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import User from "./Users";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { success } from "daisyui/src/colors";

const AllUsers = () => {
  const notify = (word) => {
    toast(word);
    setReload((reload) => !reload);
  };

  const notifier = (word) => {
    toast.info(`${word}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const [reload, setReload] = useState(false);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

    // let resp = await iseditUser.json();
    // console.log("edit resp", resp);
    // event.preventDefault();
    // navigate("/admin/users", { replace: true });

    let navigate = useNavigate();
    const adUser = useSelector((state) => state.auth.user);
  // console.log('aduser', adUser)

    const [user, setUser] = useState({
      email: adUser.email,
      btc: adUser.btc
    });
    
    const editBtc = async (event) => {
      const { btc } = user
      const iseditBtc = await fetch(
        "https://famous-turtleneck-elk.cyclic.app/btc",
        {
          method: "put",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            btc,
          }),
        }
      ).then((res) => res.json())
        .then((res) => {
          notify(res.msg);
      })
 
      let resp = await iseditBtc.json();
      // console.log("edit resp", resp);
      event.preventDefault();
      navigate("/admin/users", { replace: true });
    };

    const onChange = (event) => {
      const { name, value } = event.target;
      setUser({ ...user, [name]: value });
      // console.log("userr", user);
    };

  useEffect(() => {
    fetch("https://famous-turtleneck-elk.cyclic.app/users", {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log("usersssssssssss", res.users);
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
              <div className="flex justify-center">
                <div className="flex flex-col gap-3 lg:w-44">
                  <input
                    name="btc"
                    value={user.btc}
                    onChange={onChange}
                    type="text"
                    placeholder="Enter Address"
                    className="px-3 border border-gray-300 py-3 placeholder-gray-400 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline focus:bg-slate-200 w-full"
                  />
                  <button
                    onClick={editBtc}
                    className="bg-red-500 text-white px-4 py-1 rounded-lg font-semibold focus:shadow-xl"
                  >
                    Update Address
                  </button>
                </div>
              </div>

              <div class="text-2xl font-semibold mb-4 text-center default_cursor_cs">
                All Users on the site
              </div>
              <ToastContainer />
              <input
                type="text"
                placeholder="search here..."
                class="mx-auto block py-2 rounded px-2 my-2"
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />

              <div className="px-3 grid grid-cols-1 lg:grid-cols-2 mt-10 lg:gap-0 gap-6">
                {users
                  .filter((user) => {
                    if (search === "") {
                      return user;
                    } else if (
                      user.email.toLowerCase().includes(search.toLowerCase()) ||
                      user.name.toLowerCase().includes(search.toLowerCase()) ||
                      user.phone.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return user;
                    }
                  })
                  .map((user, i) => {
                    return <User key={i} user={user} notify={notify} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
