import React , {useRef} from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { userAPI } from "./constant";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/Store/UserSlice";



const Profile = () => {
  let user = useSelector((store) => store.user.user);
  let numberRef = useRef("");
  let dispatch = useDispatch();

  let { userName, email } = user;

  // console.log(user);

  let handleUpdate =async  () => {
    let phoneNumber = numberRef.current.value;  

    let response = await axios.patch(`${userAPI}/update`, {phoneNumber}  , {
      headers: { "Content-type": "application/json" },
      withCredentials: true,
    })

    if( response.data.result == true ){
      dispatch(addUser(response.data.data));  
    }
  }

  return (
    <div>
      <p> UserName : {userName}</p>
      <p> Email : {email}</p>
      <p> phone Number : {user?.phoneNumber} </p>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        {" "}
        update Number{" "}
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            ref={numberRef}
          />
          <button className="btn btn-outline btn-secondary" onClick={handleUpdate}>update</button>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Profile;
