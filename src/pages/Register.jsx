import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { auth, firestore } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function () {
  const firstnameRef = useRef();
  const passwordRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const phone_numberRef = useRef();
  const bioRef = useRef();
  const roleRef = useRef();
  const genderRef = useRef();
  const confirmPasswordRef = useRef();
  const [passwordMatch, setPasswordMatch] = useState(true);

  const registerUser = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value == confirmPasswordRef.current.value) {
        setPasswordMatch(true);

      await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      ).then((i) => {
        const ref = collection(firestore, "user_data");

        const userData = {
          firstname: firstnameRef.current.value,
          surname: surnameRef.current.value,
          email: emailRef.current.value,
          phone_number: phone_numberRef.current.value,
          address: addressRef.current.value,
          role: roleRef.current.value,
          bio: bioRef.current.value,
          gender: genderRef.current.value,
          password: passwordRef.current.value,
          user_id: i.user.uid,
          created_at:serverTimestamp(),
        };
        try {
          addDoc(ref, userData);
        } catch (err) {
          console.log(err);
        }
      });
    } else {
      setPasswordMatch(false);
    }
  };
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="bg-gray-400 rounded p-12 flex-col flex justify-center items-center ">
        <p className="text-2xl">Register to Kalen Technologies Solutions </p>
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={registerUser}
        >
          <div className="flex">
            <input
              type="text"
              ref={firstnameRef}
              required
              name="firstname"
              className="my-3 rounded-[6px] p-2 mx-3 text-sm"
              placeholder="Enter your first name"
            />
            <input
              type="text"
              ref={surnameRef}
              required
              name="surname"
              className="my-3 rounded-[6px] p-2  text-sm"
              placeholder="Enter your surname "
            />
          </div>
          <div className="flex">
            <input
              type="email"
              ref={emailRef}
              required
              name="email"
              className="my-3 rounded-[6px] p-2 mx-3 text-sm"
              placeholder="Enter your email "
            />
            <input
              type="number"
              ref={phone_numberRef}
              required
              name="phone_number"
              className="my-3 rounded-[6px] p-2 text-sm"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="flex  ">
            <input
              type="text"
              ref={addressRef}
              required
              name="address"
              className="my-3 rounded-[6px] p-2 mx-3 text-sm"
              placeholder="Enter your address "
            />
            <input
              type="text"
              required
              ref={roleRef}
              name="role"
              className="my-3 rounded-[6px] p-2 text-sm"
              placeholder="Enter your role "
            />
          </div>
          <textarea
            type="textarea"
            ref={bioRef}
            required
            name="bio"
            className="my-3 ml-3 w-[28rem] rounded-[6px] p-2 text-sm"
            placeholder="Enter your Bio "
          ></textarea>
          <div>
            <p className="pr-24 text-lg">Gender</p>
            <div className="flex item- center justify-center">
              <input
                type="radio"
                required
                name="gender"
                ref={genderRef}
                value="female"
              />{" "}
              <p className="flex justify-center items-center ml-1">female</p>
            </div>
            <div className="flex justify-center items-center ">
              <input
                type="radio"
                required
                name="gender"
                ref={genderRef}
                value="male"
              />{" "}
              <p className="flex justify-center items-center mx-[0.53rem]">
                male
              </p>
            </div>
          </div>
          <div>
            <div className="flex">
              <input
                type="password"
                ref={passwordRef}
                required
                name="password"
                className="my-3 rounded-[6px] p-2 mx-3 text-sm"
                placeholder="Enter your password "
              />
              <input
                type="password"
                ref={confirmPasswordRef}
                required
                name="password_confirm"
                className="my-3 rounded-[6px] p-2 text-sm"
                placeholder="Confirm your password"
              />
            </div>
            {passwordMatch ? (
              <p></p>
            ) : (
              <p className="text-xs text-red-600 flex justify-end p-1 mr-[4.5rem] mt-[-1rem]">
                passwords do not match
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-green-800 rounded px-12 py-1  text-white w-60"
          >
            Register
          </button>
        </form>

        <p className="flex my-2 text-xs">
          if already registered{" "}
          <p className="pl-2 text-blue-800">
            <Link to="/">Login</Link>
          </p>
        </p>
      </div>
    </div>
  );
}
