import axios from "axios";

const getGolesFromHTML = (html) => {
  const pattern = /(\d+\s+Goles)/;
  const result = html.match(pattern);
  let goles = 0;
  if (result.length > 0) {
    goles = result[0].split(" ")[0];
  }
  return goles;
};

const controller = {
  sayHello: (req, res, next) => {
    res.send("Hello");
  },

  getGoles: async (req, res, next) => {
    const url_julian =
      "https://www.fichajes.com/jugador/julian-alvarez/estadistica-de-goles?partial=1&club=manchester-city-fc";
    const julian = axios.get(url_julian);
    const url_haland =
      "https://www.fichajes.com/jugador/erling-haland/estadistica-de-goles?partial=1&club=manchester-city-fc";
    const haland = axios.get(url_haland);
    const data = await Promise.all([julian, haland]).then((results) =>
      results.map((i) => getGolesFromHTML(i.data))
    );
    res.send(data);
  },
};

export default controller;
