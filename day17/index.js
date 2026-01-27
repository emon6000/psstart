const express = require('express');
const app = express();
const port = 3000;

// app.get("/products/:id", (req, res) => {
//   const productId = req.params.id;

//   const isNumber = /^\d+$/.test(productId);

//   if (isNumber) {
//     res.send(`<h2> ID = ${productId}</h2>`);
//   } else {
//     res.status(400).send(`<h2>Error: ID "${productId}" must be a number</h2>`);
//   }
// });
// app.get("/products/:id([0-9]{3})", (req, res) => {
//   const productId = req.params.id;
//   res.send(`<h2> ID = ${productId}</h2>`);
// });
app.get("/products/:title([a-zA-Z0-9]+)", (req, res) => {
  const productTitle = req.params.title;
  res.send(`<h2> Title = ${productTitle}</h2>`);
});

app.use("*", (req,res)=>{
  res.status(404).send({
    message : "Page not found",
    status : 404
  });
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});