const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello my smarty node pant");
});
const users = [
  { id: 1, name: "sabana", email: "sabana@gmail.com", phone: "0178187888787" },
  { id: 2, name: "sabnur", email: "sabnur@gmail.com", phone: "0178187888786" },
  {
    id: 3,
    name: "purnima",
    email: "purnima@gmail.com",
    phone: "0178187888785",
  },
  {
    id: 4,
    name: "porimoni",
    email: "porimoni@gmail.com",
    phone: "0178187888788",
  },
  { id: 5, name: "sarika", email: "sarika@gmail.com", phone: "0178187888781" },
  {
    id: 6,
    name: "sayontika",
    email: "sayontika@gmail.com",
    phone: "0178187888782",
  },
];
app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
    console.log(matched);
  } else {
    res.send(users);
  }
});
app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const selectedUser = users.find((u) => u.id === id);
  console.log("selected items", selectedUser);
  res.send(selectedUser);
});
//post users
app.post("/user", (req, res) => {
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);

  console.log("request", req.body);
  res.send(user);
});
app.get("/fruits/mangoes/fazli", (req, res) => {
  res.send("sour sour fazli ");
});
app.get("/fruits", (req, res) => {
  res.send(["Mangoes", "Apples", "Oranges", "Bananas"]);
});
app.listen(port, () => {
  console.log("smarty node on running on:", port);
});
