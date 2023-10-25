const express = require("express");
const morgan = require("morgan");
// const {randomLog}  = require("./middlewares/middle")
// const {postOnly} = require("./middlewares/onlyPost")

const app = express();

// get, post, put, delete


// middleware
app.use(express.json())
app.use(morgan("tiny",{}));

// app.use(randomLog)
// app.use(postOnly);
let courses = [
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

app.get("/courses", (req, res) => {
  res.send(courses);
})

app.post("/courses/", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name
  }
  courses.push(course);
  res.send(courses);
})
app.put("/courses/:courseName", (req, res) => {
  const { courseName } = req.params;
  const {name} = req.body;
  let course = courses.find(c => c.name === courseName);
  if(!course) res.status(404).send('Course does not exists')
  course.name = name;
 res.send(course); 
})

// app.delete("/courses/:courseName", (req, res) => {
//   courses = courses.filter(course => course.name !== req.params.courseName)
//  res.send(courses); 
// })
app.delete("/courses/:id", (req, res) => {
  let course = courses.find(course => course.id == req.params.id)
  if(!course) res.status(404).send('Course does not exists')
  const index = courses.indexOf(course)
  courses.splice(index, 1)
 res.send(courses); 
})

// using route params
app.get("/courses/:courseName", (req, res) => {
  const { courseName } = req.params;
  let course = courses.find(c => c.name === courseName);
  if(!course) res.status(404).send('Course does not exists')
 res.send(course); 
})

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log("listening on port", port);
});
