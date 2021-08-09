const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const path = require('path')




app.use(bodyParser.urlencoded({ extended: false }));





app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.get('/submit', (req, res) => {
    res.sendFile(__dirname + '/answer.html')
});

// app.post('/', (req, res) => {
//     var user = {
//         username: `${req.body.username}`,
//         name: `${req.body.name}`,
//         phone: `${req.body.phone}`,
//         password: `${req.body.password}`,
//         email: `${req.body.email}`
//     }

//     const fun = async () => {
//         const result = await data.insertMany(user)
//         console.log(result)
//         res.send('Signup Successfully')
//     }
//     fun()
// })

// app.get('/login', (req, res) => {
//     res.sendFile(__dirname + '/login.html')
// })

// app.post('/login', (req, res) => {
//     const fun = async () => {
//         const result = await data.find({ username: `${req.body.username}` })
//         console.log(result)
//         if (result.length > 0) {
//             for (let x in result) {
//                 if (req.body.username === result[x].username && req.body.password === result[x].password) {
//                     res.send('SuccessFully Login')
//                 }
//                 else {
//                     res.send('not login')
//                 }
//             }
//         }
//         else {
//             res.send('Not Login')
//         }
//     }
//     fun()
// });

app.listen(8080, () => { console.log('server is runnig') })