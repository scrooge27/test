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

//const products = require("./routers/products")

const port=4000;

app.get("/", (req,res)=>{
	fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then(response => response.json())
  .then(data =>{data.forEach(i =>res.write(`pagina html con roba`))
  				res.end();
  				})	
  .catch(err => console.error(err));
});

const prova=["cane","gatto","matita","bella","mare","ciao"];
let counter=0;
var list=[""];
app.get("/accreditamento", (req,res)=>{
	res.send(giasone);
	console.log(count(prova));
	console.log(words(prova));
});

app.post("/somma-pari", (req,res)=>{
	num=req.body.chiavearray
	res.send(sumEvens(num))
});

app.put("/lista-parole-a",(req,res)=>{
	counter=0;
	words=req.body.chiavearray
	parole = {
	count : count(words),
	words : words(words)
	}
	res.send(parole)

})

app.post("/comments",(req,res)=>{
	//id=req.body.sth
	fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  .then(response => response.json())
  .then(data =>{
  	value=data[0].body.split(" ").length;
  	res.send(commenti={
  	count : value
  })
  				})	
  .catch(err => console.error(err));
})

giasone = {
	nome : "Simone",
	cognome : "Pucci"
}

const sumEvens = arr => arr.filter(e => !(e % 2)).reduce((a, b) => a + b);
const count = arr =>{
	for (i = 0; i < arr.length; i++) {
		if(arr[i].length===4){
			counter++
		}
	}
	return counter;
}
const words = arr =>{
	counter=0;
	for (i = 0; i < arr.length; i++) {
		if(arr[i].length===4){
			list[counter]=arr[i];
			counter++
		}
	}
	return list.join(" ");
}

function WordCount(str) { 
  return str.split(" ").length;
}

//app.use("/products", products);


app.listen(port, () => console.log(`App listening to port ${port}`));

//res.render per visualizzare un file html somewhere else