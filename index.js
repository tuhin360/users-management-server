const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const users = [
    {id: 1, name: 'Sabana', email: 'sabana@gmail.com'},
    {id: 2, name: 'Sabnur', email: 'sabnur@gmail.com'},
    {id: 3, name: 'Sabila', email: 'sabila@gmail.com'},
]



app.get('/', (req, res) => {
    res.send('Users Management Server is running')
  })


app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    console.log(req.body);
    console.log('post api hitting');
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser)
})

  app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`)
  })