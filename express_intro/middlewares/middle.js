function randomLog(req,res,next) {
  req.addedFromMiddle = "Yes added from the middleware";
  console.log("Just randomly logging something....");
  next();
}

module.exports = {
  randomLog
}
