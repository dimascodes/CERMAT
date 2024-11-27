const handlers = require("./handler");

const routes = [
  { method: "GET", path: "/presensi", handler: handlers.getAllPresensi },
  { method: "POST", path: "/presensi", handler: handlers.addPresensi },
  { method: "PUT", path: "/presensi/{id}", handler: handlers.updatePresensi },
  {
    method: "DELETE",
    path: "/presensi/{id}",
    handler: handlers.deletePresensi,
  },
  { method: "POST", path: "/predict", handler: handlers.predictCheating },
];

module.exports = routes;
