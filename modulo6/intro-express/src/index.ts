import express from "express";  
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors);

// =============== EXERCICIO 01 ================
app.get('/', (req, res) => {
    res.send('Hello Word!')
})

// =============== EXERCICIO 02 ================
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));


app.listen(3003, () => {
    console.log('Server running in http://localhost:3003')
}) 