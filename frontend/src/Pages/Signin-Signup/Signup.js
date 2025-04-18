import { useState } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useDispatch } from "react-redux";
import { CreateAcount } from "../../Redux/APICalls/authCall";
import { toast, ToastContainer } from "react-toastify";

const Signup = () => {
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const [pass, setPass] = useState("")
  const [newuserInfo, setNewUserInfo] = useState({
    full_name: "",
    rule: "",
    phone: "",
    email: "",
    code_postal: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const updatedUser = { ...newuserInfo, phone }; 
  
    if (updatedUser.rule === "") return toast.error("The Rule is required");
    if (updatedUser.full_name === "") return toast.error("The name is required");
    if (updatedUser.email === "") return toast.error("The email is required");
    if (updatedUser.code_postal === "") return toast.error("The postal code is required");
    if (updatedUser.password === "") return toast.error("The password is required");
    if (updatedUser.password !== pass) return toast.error("Passwords do not match");
    console.log(updatedUser)
  
    dispatch(CreateAcount(updatedUser));
  };
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="w-full flex flex-col gap-5 justify-center items-center"
    >
      <ToastContainer theme="colored" position="top-center" />
      <h1 className="text-2xl font-bold text-center">
        Sign up to{" "}
        <Link
          to="/"
          className="bg-clip-text text-transparent bg-gradient-to-r from-primaryLight to-secondary"
        >
          ANaroz
        </Link>
      </h1>
      <div className="w-full flex items-center border border-zinc-400 rounded-md px-3 py-2 focus-within:border-primary bg-white">
        <select
          className="w-full bg-transparent outline-none text-sm text-gray-700 cursor-pointer"
          defaultValue=""
          value={newuserInfo.rule}
          onChange={(e)=>{setNewUserInfo({...newuserInfo, rule : e.target.value})}}
        >
          <option value="" disabled className="text-gray-500">
            How would you like to contribute?
          </option>
          <option className="text-black" value="supporter">
            Supporter
          </option>
          <option className="text-black" value="affected person">
            Affected Person
          </option>
        </select>
      </div>

      <div className="w-full border border-zinc-400 rounded-md h-10 flex items-center">
        <input
          type="text"
          placeholder="Full name"
          className="w-full outline-none pl-2"
          value={newuserInfo.full_name}
          onChange={(e) => {
            setNewUserInfo({ ...newuserInfo, full_name: e.target.value });
          }}
        />
      </div>
      <div className="w-full border border-zinc-400 rounded-md flex items-center">
        <PhoneInput
          country={"ma"}
          value={phone}
          onChange={setPhone}
          inputClass="pl-2 !w-full !bg-transparent !outline-none !border-none"
          containerClass="w-full"
          buttonClass="border-r border"
        />
      </div>
      <div className="w-full border border-zinc-400 rounded-md h-10 flex items-center">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full outline-none pl-2"
          value={newuserInfo.email}
          onChange={(e) => {
            setNewUserInfo({ ...newuserInfo, email: e.target.value });
          }}
        />
      </div>
      <div className="w-full border border-zinc-400 rounded-md h-10 flex items-center">
        <input
          type="text"
          placeholder="Code Postale"
          className="w-full outline-none pl-2"
          value={newuserInfo.code_postal}
          onChange={(e) => {
            setNewUserInfo({ ...newuserInfo, code_postal: e.target.value });
          }}
        />
      </div>
      <div className="flex gap-2">
        <div className="w-full border border-zinc-400 rounded-md h-10 flex items-center">
          <input
            type="password"
            placeholder="Password"
            className="w-full outline-none pl-2"
            value={newuserInfo.password}
            onChange={(e) => {
              setNewUserInfo({ ...newuserInfo, password: e.target.value });
            }}
          />
        </div>
        <div className="w-full border border-zinc-400 rounded-md h-10 flex items-center">
          <input
            type="password"
            placeholder="Confirm Pass"
            className="w-full outline-none pl-2"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="w-full h-10 flex justify-center items-center bg-secondary rounded-md">
        <button className="text-white font-bold w-full h-full">Sign up</button>
      </div>
    </form>
  );
};

export default Signup;
