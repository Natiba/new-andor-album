import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Top from "./components/Top";
import Button from "./Button";
import Card1 from "./components/Card1";
import cassianAndor from "./img/andor-cassian.jpeg";
import bixCaleen from "./img/andor-bixCaleen.jpeg";
import marvaAndor from "./img/andor-maarva.jpeg";
import luthenRael from "./img/andor-luthen-rael.jpeg";
import monMothma from "./img/andor-mon-mothma.jpeg";
import dedraMeero from "./img/andor-dedra-meero.jpeg";
import syrilKarn from "./img/andor-syril-karn.webp";
import velSartha from "./img/andor-vel-sartha.jpeg";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      <Top />
    </>

    <div className="card-container">
      <div className="AlbumCard1">
        <img
          className="cassian-img-container"
          src={cassianAndor}
          alt="Cassian Andor"
        />
        <>
          <Card1 name="Cassian Andor" number={1} cromo={true}></Card1>
        </>
      </div>
      <div className="AlbumCard1">
        <img
          className="cassian-img-container"
          src={bixCaleen}
          alt="Bix Caleen"
        />
        <>
          <Card1 name="Bix Caleen" number={2} cromo={false}></Card1>
        </>
      </div>

      <div className="AlbumCard1">
        <img
          className="cassian-img-container"
          src={marvaAndor}
          alt="Maarva Andor"
        />
        <>
          <Card1 name="Maarva Andor" number={3} cromo={false}></Card1>
        </>
      </div>

      <div className="AlbumCard1">
        <img
          className="cassian-img-container"
          src={luthenRael}
          alt="Luthen Rael"
        />
        <>
          <Card1 name="Luthen Rael" number={4} cromo={false}></Card1>
        </>
      </div>

      <div className="AlbumCard1">
        <img
          className="cassian-img-container"
          src={monMothma}
          alt="Mon Mothma"
        />
        <>
          <Card1 name="Mon Mothma" number={5} cromo={false}></Card1>
        </>
      </div>

      <div className="AlbumCard1">
        <img
          className="cassian-img-container"
          src={dedraMeero}
          alt="Dedra Meero"
        />
        <>
          <Card1 name="Dedra Meero" number={6} cromo={false}></Card1>
        </>
      </div>

      <div className="AlbumCard1">
        <img
          className="cassian-img-container"
          src={syrilKarn}
          alt="Syril Karn"
        />
        <>
          <Card1 name="Syril Karn" number={7} cromo={false}></Card1>
        </>
      </div>

      <div className="AlbumCard1">
        <img
          className="cassian-img-container"
          src={velSartha}
          alt="Vel Sartha"
        />
        <>
          <Card1 name="Vel Sartha" number={8} cromo={false}></Card1>
        </>
      </div>
    </div>
    <>
      <Button number={1} title={"Hello"} />
      <Button number={2} title={"you"} />
      <Button number={3} title={"mother"} />
      <Button number={4} title={"fucker"} />
      <Button number={5} />
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
