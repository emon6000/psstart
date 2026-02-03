const express = require('express');
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));

const users = [
    { username: 'alice', password: 'password123' },
    { username: 'bob', password: 'securepass' },
    { username: 'charlie', password: '123456' }
];

const htmlForm =`<form method="POST" action="/users">
<input type="text" name="username" placeholder="Enter username">
<input type="password" name="password" placeholder="Enter password">
<button type="submit">Login</button>
</form>`;

app.get('/users', (req, res) => {
  res.send(htmlForm);
});
app.post('/users', (req, res) => {
  const name = req.body.username;
  const pass = req.body.password;
  const user ={
    username:name,
    password:pass
  }
  users.push(user);
  res.status(201).json({
    success: true,
    users
  })
});


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
}
);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});