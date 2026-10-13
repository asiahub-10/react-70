import { useState } from "react";
import B from "./B";
import { nameConstext } from "./NameContext";

export default function A() {
  const [name, setName] = useState("Rani");
  return (
    <div className="text-center p-10 border border-gray-900">
      <h1 className="text-2xl">A</h1>
      <p>{name}</p>
      <nameConstext.Provider value={{name, setName}}>
        <B />
      </nameConstext.Provider>
    </div>
  );
}
