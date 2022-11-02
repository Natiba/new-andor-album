import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


import Title from "./components/Title";
import Card1 from "./components/Card1";
import Footer from "./components/Footer"

import cassianAndor from "./img/andor-cassian.jpeg";
import bixCaleen from "./img/andor-bixCaleen.jpeg";
import marvaAndor from "./img/andor-maarva.jpeg";
import luthenRael from "./img/andor-luthen-rael.jpeg";
import monMothma from "./img/andor-mon-mothma.jpeg";
import dedraMeero from "./img/andor-dedra-meero.jpeg";
import syrilKarn from "./img/andor-syril-karn.webp";
import velSartha from "./img/andor-vel-sartha.jpeg";
import cintaKaz from "./img/andor-cinta-kaz.jpeg";
import kleyaMarki from "./img/andor-kleya-marki.jpeg";
import empty from "./img/andor-empty.jpeg";
import sawGerrera from "./img/andor-saw-gerrera_.jpeg";
import kinoLoy from "./img/andor-kino-loy.jpeg";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   
    <>
    <Title title="ANDOR AMAZING ALBUM"></Title>
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
          <Card1 name="Luthen Rael" number={4} cromo={true}></Card1>
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
          src={empty}
          alt="Vel Sartha"
        />
        <>
          <Card1 name="xxxxxx" number={8} cromo={false}></Card1>
        </>
      </div>

      <div className="AlbumCard1">
        <img
          className="cassian-img-container"
          src={velSartha}
          alt="Vel Sartha"
        />
        <>
          <Card1 name="Vel Sartha" number={9} cromo={false}></Card1>
        </>
      </div>

      <div className="AlbumCard1">
        <img
          className="cassian-img-container"
          src={cintaKaz}
          alt="Cinta Kaz"
        />
        <>
          <Card1 name="Cinta Kaz" number={10} cromo={false}></Card1>
        </>
      </div>

      <div className="AlbumCard1">
        <img
          className="cassian-img-container"
          src={empty}
          alt="Syril Karn"
        />
        <>
          <Card1 name="" number={11} cromo={false}></Card1>
        </>
      </div>

      <div className="AlbumCard1">
        <img
          className="cassian-img-container"
          src={empty}
          alt="Vel Sartha"
        />
        <>
          <Card1 name="xxxxxx" number={12} cromo={false}></Card1>
        </>
      </div>

      <div className="AlbumCard1">
        <img
          className="cassian-img-container"
          src={kleyaMarki}
          alt="Kleya Marki"
        />
        <>
          <Card1 name="Kleya Marki" number={13} cromo={false}></Card1>
        </>
      </div>

      <div className="AlbumCard1">
        <img
          className="cassian-img-container"
          src={empty}
          alt="Vel Sartha"
        />
        <>
          <Card1 name="xxxxxx" number={14} cromo={false}></Card1>
        </>
      </div>

      <div className="AlbumCard1">
        <img
          className="cassian-img-container"
          src={sawGerrera}
          alt="Saw Gerrera"
        />
        <>
          <Card1 name="Saw Gerrera" number={15} cromo={true}></Card1>
        </>
      </div>

      <div className="AlbumCard1">
        <img
          className="cassian-img-container"
          src={kinoLoy}
          alt="Kino Loy"
        />
        <>
          <Card1 name="Kino Loy" number={16} cromo={false}></Card1>
        </>
      </div>

    </div>

    
    <Footer creator="©2022 -  Created by NZB with love ❤️"></Footer>
   

    {/* <>
      <Button number={1} title={"Hello"} />
      <Button number={2} title={"you"} />
      <Button number={3} title={"mother"} />
      <Button number={4} title={"fucker"} />
      <Button number={5} />
</> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
