import Axios from "axios";
import { useEffect, useState } from "react";
import Cat from "/Cat.png";

export default function CatsApi() {
  //fetch("https://catfact.ninja/fact")
  //  .then((res) => res.json())
  //  .then((data) => {
  //   console.log(data);
  // });

  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    fetchCatFact();
  }, []);

  const fetchCatFact = () => {
    const apiUrl =
      process.env.NODE_ENV === "production"
        ? "/api/fetchCatFact"
        : "https://catfact.ninja/fact";

    Axios.get(apiUrl)
      .then((res) => {
        setCatFact(res.data.fact);
      })
      .catch((err) => {
        console.error("Error fetching cat fact:", err);
      });
  };

  return (
    <div className="text-center mx-5 hero-content w-full bg-gradient-to-r from-teal-400 to-yellow-200 min-h-screen flex flex-col justify-center px-3 mx-auto">
      <img className="w-[70px] mx-auto" src={Cat} alt="" />
      <p className="text-md text-yellow-700 p-3">
        Cat Facts data fetched from API
      </p>
      <button
        className="w-56 mx-auto bg-transparent hover:bg-yellow-800 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-700  rounded"
        onClick={fetchCatFact}
      >
        Generate Some Cat Facts
      </button>
      <p className="text-white font-bold mt-3">{catFact}</p>
    </div>
  );
}
