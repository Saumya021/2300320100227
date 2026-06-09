// require("dotenv").config();
// const axios = require("axios");

// const LOG_API = "https://4.224.186.213/evaluation-service/logs";

// async function Log(stack, level, packageName, message) {
//   try {
//     const response = await axios.post(
//       LOG_API,
//       {
//         stack,
//         level,
//         package: packageName,
//         message,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.TOKEN}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     console.log("Log Created:", response.data);
//   } catch (error) {
//     console.error(
//       "Logging failed:",
//       error.response?.data || error.message
//     );
//   }
// }

// module.exports = Log;


require("dotenv").config();

const axios = require("axios");
const https = require("https");

const LOG_API = "https://4.224.186.213/evaluation-service/logs";

async function Log(stack, level, packageName, message) {
  try {
    const response = await axios.post(
      LOG_API,
      {
        stack,
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
          "Content-Type": "application/json",
        },
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      }
    );

    console.log("Log Created Successfully");
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error(
      "Logging failed:",
      error.response?.data || error.message
    );
  }
}

module.exports = Log;