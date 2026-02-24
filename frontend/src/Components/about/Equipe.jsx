import axios from "axios";
import { useState, useEffect } from "react";
import EquipeCard from "./EquipeCard";

export default function Equipe() {
  const [equipes, setEquipes] = useState();
  useEffect(() => {
    const ft = async () => {
      const req = await axios.get("http://localhost:8000/api/equipes");
      setEquipes(req.data);
    };
    ft();
  }, []);
  return (
    <>
      {" "}
      <h1 className="text-center m-5">Notre Equipe</h1>
      <div className="row justify-content-center m-5">
        {!equipes
          ? "...loading"
          : equipes.map((member, index) => (
              <EquipeCard key={index} member={member} />
            ))}
      </div>
    </>
  );
}
