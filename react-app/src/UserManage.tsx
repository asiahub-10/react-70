import { useState } from "react"
import type { User } from "./User.types.tsx";
import defaultUser from "./User.types.tsx";

function UserManage(){
    // const [id, setId] = useState(10);
    // const [name, setName] = useState("John Doe");
    // const [email, setEmail] = useState("jhon@mail.com");
    // const [phone, setPhone] = useState("1234567890");
    // const [roleId, setRoleId] = useState(4);
    // const [isActive, setIsActive] = useState(false);
    const [user, setUser] = useState<User>(defaultUser);

    return(
        <>
            <h1>User</h1>
            <p><b>ID:</b> {user.id}</p>
            <p><b>Name:</b> {user.name}</p>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Phone:</b> {user.phone}</p>
            <p><b>Status:</b> {user.isActive ? "Active" : "Inactive"}</p>
        </>
    )
}

export default UserManage