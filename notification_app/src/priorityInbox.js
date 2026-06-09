function getWeight(priority) {
  if (priority === "HIGH") return 5;
  if (priority === "MEDIUM") return 3;
  return 1;
}

function getTopNotifications(notifications) {
  return notifications
    .map((n) => ({
      ...n,
      score: getWeight(n.priority) * 10,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);
}

module.exports = getTopNotifications;