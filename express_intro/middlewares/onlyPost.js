function postOnly(req, res, next){
  console.log(req.method);
  if(req.method == 'POST'){
    const {body} = req;
    console.log(body);
    if(!Object.keys(body).length){
      console.log("you cannot post without a body");
      return;
    }
  }
  next();
}

module.exports =  {
  postOnly
}
