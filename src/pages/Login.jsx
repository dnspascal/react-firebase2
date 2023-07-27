import { signInWithEmailAndPassword } from "firebase/auth";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { theContextOfTheUser } from "../context/UserContext";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = theContextOfTheUser();
  return (
    <div className="h-screen w-screen flex justify-center items-center ">
      <div className="bg-gray-300 flex justify-center w-96 items-center h-60 flex-col rounded-md p-12">
        <p>Login to Kalen Technologies Company</p>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            login(emailRef.current.value, passwordRef.current.value);
          }}
          className=" flex justify-center w-full items-center h-60 flex-col "
        >
          <input
            type="email"
            ref={emailRef}
            required
            name="email"
            className="my-3 rounded-[6px] p-2 text-sm"
            placeholder="Enter your email "
          />
          <input
            type="password"
            ref={passwordRef}
            required
            name="email"
            className="my-3 rounded-[6px] p-2 text-sm"
            placeholder="Enter your password"
          />
          <button
            type="submit"
            className="bg-green-900 rounded py-1 px-8 text-white"
          >
            login
          </button>
        </form>
        <p className="text-xs text-blue-600 p-2">forgot password?</p>
        <p className="text-xs flex">
          if not registered click register to{" "}
          <p className="px-1 text-blue-800">
            {" "}
            <Link to="/register">Register</Link>
          </p>
        </p>
      </div>
    </div>
  );
}
