require("dotenv").config();

const { getDepots, getVehicles } = require("./api");
const optimizeTasks = require("./scheduler");

async function main() {
  try {
    const depots = await getDepots();
    const vehicles = await getVehicles();

    console.log("Vehicle Maintenance Scheduler");
    console.log("============================");

    for (const depot of depots) {
      const result = optimizeTasks(
        vehicles,
        depot.MechanicHours
      );

      console.log("\n--------------------------------");
      console.log(`Depot ID: ${depot.ID}`);
      console.log(`Mechanic Hours: ${depot.MechanicHours}`);
      console.log(`Maximum Impact: ${result.totalImpact}`);
      console.log(
        `Selected Tasks: ${result.selectedTasks.length}`
      );

      console.log("\nTasks:");

      result.selectedTasks.forEach((task) => {
        console.log(
          `TaskID: ${task.TaskID} | Duration: ${task.Duration} | Impact: ${task.Impact}`
        );
      });
    }
  } catch (error) {
    console.error(
      "Error:",
      error.response?.data || error.message
    );
  }
}

main();