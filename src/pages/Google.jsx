import React, { useEffect } from "react";

const Google = () => {
  useEffect(() => {
    fetch("http://localhost:4000/auth/google")
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);
  return <div>Google</div>;
};

export default Google;
