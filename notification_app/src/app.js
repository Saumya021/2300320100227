const express = require("express");
const getTopNotifications = require("./priorityInbox");

const app = express();

app.get("/notifications", (req, res) => {
  res.json({
    notifications: [
      {
        id: 1,
        title: "Exam Update",
        priority: "HIGH",
      },
      {
        id: 2,
        title: "Library Reminder",
        priority: "LOW",
      },
    ],
  });
});

app.patch("/notifications/:id/read", (req, res) => {
  res.json({ success: true });
});

app.get("/priority-inbox", (req, res) => {
  const notifications = [
    { id: 1, title: "Exam Update", priority: "HIGH" },
    { id: 2, title: "Library Reminder", priority: "LOW" },
    { id: 3, title: "Fee Notice", priority: "MEDIUM" },
  ];

  res.json(getTopNotifications(notifications));
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});