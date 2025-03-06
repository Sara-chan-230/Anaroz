import { Link } from "react-router-dom";
const Login = () => {
  return (
    <form className="w-full flex flex-col gap-5 justify-center items-center">
      <h1 className="text-2xl font-bold text-center">
        Sign in to{" "}
        <Link to="/" className="bg-clip-text text-transparent bg-gradient-to-r from-primaryLight to-secondary">
          ANaroz
        </Link>
      </h1>
      <div className="w-full border border-zinc-400 rounded-md h-10 flex items-center">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full outline-none pl-2"
        />
      </div>
      <div className="w-full border border-zinc-400 rounded-md h-10 flex items-center">
        <input
          type="password"
          placeholder="Password"
          className="w-full outline-none pl-2"
        />
      </div>
      <a href="#" className="text-blue-600 font-bold">
        Forgot the password?
      </a>
      <div className="w-full h-10 flex justify-center items-center bg-secondary rounded-md">
        <button className="text-white font-bold w-full h-full">Login</button>
      </div>
      <div className="flex gap-3"><hr className="w-full" /> <p>OR</p> <hr /></div>
      <div className="w-full border border-zinc-400 font-bold rounded-md h-10 flex justify-center items-center cursor-pointer">
        Sign in with Google
      </div>
    </form>
  );
};

export default Login;
