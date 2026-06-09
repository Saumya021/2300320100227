require("dotenv").config();
const axios = require("axios");
const https = require("https");

const API_BASE = "https://4.224.186.213/evaluation-service";

const api = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
  headers: {
    Authorization: `Bearer ${process.env.TOKEN}`,
  },
});

async function getDepots() {
  const response = await api.get(`${API_BASE}/depots`);
  return response.data.depots;
}

async function getVehicles() {
  const response = await api.get(`${API_BASE}/vehicles`);
  return response.data.vehicles;
}

module.exports = {
  getDepots,
  getVehicles,
};