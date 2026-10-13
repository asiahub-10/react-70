import React, { useContext } from "react";
import { nameConstext } from "./NameContext";

export default function C() {
  const { name, setName } = useContext(nameConstext);
  return (
    <div className="text-center p-10 border border-gray-900">
      <h1 className="text-2xl">C</h1>
      <p>Hello {name}</p>
      <input
        type="text"
        className="border-red-100"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
