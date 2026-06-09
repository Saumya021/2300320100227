const Log = require("./logger");

async function testLog() {
  await Log(
    "backend",
    "info",
    "handler",
    "Testing logging middleware"
  );
}

testLog();