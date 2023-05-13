const express = require("express");
const router = express.Router();

const got = require("got");

router.get("/:symbol/:interval", async (req, res) => {
 console.log("đâsjdaj234234")
  try {
    const { symbol, interval } = req.params;
    const resp = await got(
      `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}`
    );
    const data = JSON.parse(resp.body);

    let klinedata = data.map((d) => ({
      time: d[0] / 1000,
      open: d[1] * 1,
      high: d[2] * 1,
      low: d[3] * 1,
      close: d[4] * 1,
      volume: d[5] * 1,
    }));
     console.log(klinedata);
    res.status(200).json(klinedata);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
