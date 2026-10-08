import { useParams } from "react-router";
import { api } from "../../api";
import { useEffect, useState } from "react";
import { defaultUser, type User } from "../../interfaces/User";

export default function ShowUser() {
  const {id} = useParams();
  const [u, setUser] = useState(defaultUser);  
  const getItem = () => {
    api
      .get(`users/${id}`)
      .then(function (res) {
        // console.log(res.data.user);
        setUser(res.data.user);
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  useEffect(() => {
    getItem();
  }, []);
  return (
    <div className="w-1/2 mx-auto mt-4">
      <h1 className="text-center font-bold text-2xl text-green-800 mb-4">
        User Details
      </h1>
      <div className="mb-3 pb-3 border-b border-b-blue-200"><b className="me-2">ID: </b>{id}</div>
      <div className="mb-3 pb-3 border-b border-b-blue-200"><b className="me-2">Name: </b>{u.name}</div>
      <div className="mb-3 pb-3 border-b border-b-blue-200"><b className="me-2">Email: </b>{u.email}</div>
      <div><b className="me-2">Role: </b>{u.role}</div>
    </div>
  );
}
