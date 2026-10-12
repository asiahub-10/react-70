import axios from "axios";
import React, { useEffect } from "react";

export default function Test() {
  const user: any = {
    email: "asia@mail",
    password: "123",
  };
  useEffect(() => {
    axios
      .post("http://lara-project-api.test/api/test", user, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Bearer 84651656485465",
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));
  }, []);
  return <div>Test</div>;
}
