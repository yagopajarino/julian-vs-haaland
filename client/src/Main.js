import React, { useEffect, useState } from "react";
import Player from "./components/Player";
import Loading from "./components/Loading";

export default function Main() {
  const [golesJuli, setGolesJuli] = useState("");
  const [golesHaaland, setgolesHaaland] = useState("");

  useEffect(() => {
    const url = "https://julian-vs-halland.onrender.com/goles";
    fetch(url)
      .then((r) => r.json())
      .then((r) => {
        setGolesJuli(r.julianGoles);
        setgolesHaaland(r.erlingGoles);
      });
  }, []);

  return (
    <main
      className="flex-col md:flex-row w-full flex justify-around items-center"
      style={{ height: "88vh" }}
    >
      {golesJuli == "" ? (
        <Loading />
      ) : (
        <>
          <Player name="JULIAN" goals={golesJuli} />
          <Player name="HAALAND" goals={golesHaaland} />
        </>
      )}
    </main>
  );
}
