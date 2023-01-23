require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const PORT = 8000;
const app = express();

const url =
  "https://5aeeefb6-91a8-4722-a82f-b6e3b91ed41f-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks";
const token =
  "AstraCS:kJQzAEjTEZnJNlYoHoggNfNE:6d093c645d51c3e7ed8dc52a974efaefc97ecd7718bd6378f7eb512ae4a9b25f";

app.post("/tickets", async (res, res) => {
  const fomrData = req.body.fomrData;

  const options = {
    method: "POST",
    headers: {
      Accepts: "application/json",
      "X-Cassandra-Token": token,
      "Content-Type": "application/json",
    },
    data: fomrData,
  };

  try {
    const response = axios(url, options);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

app.listen(PORT, () => console.log(`server running on PORT: ${PORT}`));
