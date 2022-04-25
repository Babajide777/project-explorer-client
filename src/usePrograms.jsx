import { useEffect, useState } from "react";
import { url } from "./auth";

export const usePrograms = () => {
  const [programs, setPrograms] = useState([]);
  const [graduationYears, setGraduationYears] = useState([]);

  useEffect(() => {
    fetch(`${url}home/programs`)
      .then((res) => res.json())
      .then((res) => setPrograms(res.data))
      .catch((err) => console.log(err));

    fetch(`${url}home/graduationyears`)
      .then((res) => res.json())
      .then((res) => setGraduationYears(res.data))
      .catch((err) => console.log(err));
  }, []);

  return { programs, graduationYears };
};
