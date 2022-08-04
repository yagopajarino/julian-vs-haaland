import puppeteer from "puppeteer";

const controller = {
  sayHello: (req, res, next) => {
    res.send("Hello");
  },

  getGoles: (req, res, next) => {
    (async () => {
      const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
      const page = await browser.newPage();
      await page.goto(
        "https://www.transfermarkt.es/manchester-city/leistungsdaten/verein/281"
      );

      // Get the "viewport" of the page, as reported by the page.
      const data = await page.evaluate(() => {
        const rows = new Array(
          ...document
            .querySelector("#yw1 > table > tbody")
            .querySelectorAll("tr")
        );
        const julianRow = rows.filter((i) => {
          const h = i.querySelector(".hauptlink");
          if (h != null) {
            return h.querySelector("a").textContent == "Julián Álvarez";
          } else return false;
        })[0];

        const erlingRow = rows.filter((i) => {
          const h = i.querySelector(".hauptlink");
          if (h != null) {
            return h.querySelector("a").textContent == "Erling Haaland";
          } else return false;
        })[0];

        const julianGoles =
          julianRow.querySelector("td:nth-child(7)").textContent;
        const erlingGoles = erlingRow
          .querySelector("td:nth-child(7)")
          .textContent.replace("-", "0");

        return {
          julianGoles,
          erlingGoles,
        };
      });

      res.send(data);

      await browser.close();
    })();
  },
};

export default controller;
