const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const calculator = require('./calculator');

const app = express();

app.use(express.json()); 
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs')

app.get('/', async (req, res) => {
    res.render('index');
})

app.post('/result', (req, res) => {
    // console.log(req.body);
    const operation = (req.body.operation);
    const num1 = (req.body.number1);
    const num2 = (req.body.number2);
 try {
    if(operation === 'add'){
        const simpleCalculator = new calculator(+num1, +num2);
        const answer = simpleCalculator.add();

        return res.status(200).render('answer', {solution: {result: answer}});
    }else if(operation === 'product'){
        const simpleCalculator = new calculator(+num1, +num2);
        const answer = simpleCalculator.multiply();

        return res.status(200).render('answer', {solution: {result: answer}});
    }

    res.send('Invalid Input');
 } catch (error) {
     console.log(error);
 }
    
   

});

app.listen(8000, () => {
    console.log('Server running...');
})