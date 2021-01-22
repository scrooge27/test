//nella cartella routes, file products.js:
// const router = new express.Router()
// module.exports = router

const express = require("express");
const app = new express;

const fetch = require('node-fetch');

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const products = require("./routers/products")

const port=4000;

app.get("/", (req,res)=>{
	fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then(response => response.json())
  .then(data =>{data.forEach(i =>res.write(`pagina html con roba`))
  				res.end();
  				})	
  .catch(err => console.error(err));
});



app.use("/products", products);


app.listen(port, () => console.log(`App listening to port ${port}`));

//res.render per visualizzare un file html somewhere else