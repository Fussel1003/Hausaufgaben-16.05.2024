const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;


app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    const userData = `Name: ${name}, Email: ${email}, Password: ${password}\n`;

    
    fs.appendFile('registrations.txt', userData, (err) => {
        if (err) throw err;
        console.log('Data has been saved!');
    });

    res.send('Registration successful!');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
