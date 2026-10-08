import { useState } from "react";
import { defaultContact } from "../../interfaces/Contact";
import { Link } from "react-router";

export default function Login() {
  const [contact, setContact] = useState(defaultContact);

  const handleSubmit = () => {
    console.log(contact);
  };
  return (
    <div className="w-1/3 mx-auto my-6">
      <h1 className="text-center font-bold text-2xl text-green-800 mb-4">
        LOGIN NOW
      </h1>
      <form>
        <input
          type="text"
          className="w-full p-2 border border-1 focus:border-2 rounded-md border-gray-200 focus:border-green-400 focus:outline-none"
          placeholder="Email"
        />
        <br />
        <br />
        <input
          type="password"
          className="w-full p-2 border border-1 focus:border-2 rounded-md border-gray-200 focus:border-green-400 focus:outline-none"
          placeholder="*********"          
        />
        <br />
        <br />
        {/* <button className="bg-[#790D16] border-3 rounded-md border-emerald-700 text-gray-50 py-2 px-4 hover:bg-emerald-900 hover:border-5 duration-300" onClick={handleSubmit} type="button">Submit</button> */}
        <div className="text-center">
          <button
            className="bg-emerald-600 rounded-lg text-gray-50 py-2 px-4 hover:bg-emerald-800 focus:bg-emerald-600 duration-300"
            onClick={handleSubmit}
            type="button"
          >
            Login
          </button>
        </div>
      </form>
      <div className="my-4 text-center">
        Don't have an account? &nbsp;
        <Link to="/register" className="text-green-600">Create new account</Link>
      </div>
    </div>
  );
}
