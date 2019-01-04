const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers.js');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



/*app.get('/', (req, res) => {
    let salida = {
            nombre: 'alex',
            edad: 35,
            url: req.url
        }
        //res.send('Hola mundo');
    res.send(salida);
});*/

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'alex garcía'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});