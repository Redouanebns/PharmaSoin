import axios from "axios";
import { useEffect, useState } from "react";
import EquipeCard from "./EquipeCard";
import History from "./History";
import Services from "./Serveces";
import Baner from "./Baner";
import "./about.css";
import Equipe from "./Equipe";

export default function About() {
  return (
    <>
      <section className="about-section mb-5">
        <Baner />

        <History />

        <Services />

        <Equipe />
      </section>
    </>
  );
}
