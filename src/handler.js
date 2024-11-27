const presensi = require("./presensi");
const { executePythonScript } = require("./utils/tensorflowIntegration");

const getAllPresensi = async (req, h) => h.response(presensi);

const addPresensi = async (req, h) => {
  const { id, name, timestamp } = req.payload;
  presensi.push({ id, name, timestamp });
  return h.response({ message: "Presensi added!" }).code(201);
};

const updatePresensi = async (req, h) => {
  const { id } = req.params;
  const { name, timestamp } = req.payload;
  const index = presensi.findIndex((p) => p.id === id);
  if (index !== -1) {
    presensi[index] = { id, name, timestamp };
    return h.response({ message: "Presensi updated!" });
  }
  return h.response({ message: "Presensi not found!" }).code(404);
};

const deletePresensi = async (req, h) => {
  const { id } = req.params;
  const index = presensi.findIndex((p) => p.id === id);
  if (index !== -1) {
    presensi.splice(index, 1);
    return h.response({ message: "Presensi deleted!" });
  }
  return h.response({ message: "Presensi not found!" }).code(404);
};

const predictCheating = async (req, h) => {
  const { features } = req.payload;
  const result = await executePythonScript(features);
  return h.response({ prediction: result });
};

module.exports = {
  getAllPresensi,
  addPresensi,
  updatePresensi,
  deletePresensi,
  predictCheating,
};
