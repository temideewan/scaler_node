const express = require("express");

const app = express();

// get, post, put, delete

const courses = [
  {id: 1, name: 'Javascript', },
  {id: 2, name: 'Java', },
  {id: 3, name: 'Python', },
]
app.get("/", (req, res) => {
  res.send("Hello world!");
});
 
app.get("/about", (req, res) => {
  res.send("Hello from about page here");
});


// using route params
app.get("/courses/:courseName", (req, res) => {
  const { courseName } = req.params;
  let course = courses.find(c => c.name === courseName);
  console.log(course);
  if(!course) res.status(404).send('Course not found')
 res.send(course); 
})

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log("listening on port", port);
});
