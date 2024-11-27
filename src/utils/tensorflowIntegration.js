const { spawn } = require("child_process");

const executePythonScript = (features) => {
  return new Promise((resolve, reject) => {
    const python = spawn("python3", [
      "./src/models/presensiModel.py",
      JSON.stringify(features),
    ]);

    python.stdout.on("data", (data) => resolve(data.toString()));
    python.stderr.on("data", (data) => reject(data.toString()));
    python.on("close", (code) => {
      if (code !== 0) {
        reject("Python script failed");
      }
    });
  });
};

module.exports = { executePythonScript };
