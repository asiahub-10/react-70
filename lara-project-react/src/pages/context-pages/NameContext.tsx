import { createContext } from "react";

export const nameConstext = createContext({
    name: "",
    setName: (name: string) => {},
});