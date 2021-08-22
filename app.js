import express from "express";

let app = express();

app.get('/hello', (req,res) => {
    res.send('Bienvenidos!');
});

app.post('/test', (req,res) => {
    res.send('Bienvenidos!');
});



var productos = [
    {
        id: 1,
        name:"Yerba",
        price:99,
        fotos: "foto1"
    },
    {
        id:2,
        name:"Cafe",
        price:299,
        fotos: "foto2"
    }
];

app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000')
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/api/productos/listar', (req,res) => {    
    if (productos.length > 0)
        res.send(productos);
    else 
    res.send("No hay productos cargados"); 

});

app.get('/api/productos/listar/:id', (req,res) => {
    let idd = parseInt(req.params.id);
    if (idd >0 && idd <= productos.length)
        res.send(productos[req.params.id-1]);
    else 
    res.send("Producto Inexistente");   
});

app.post('/api/productos/guardar', (req,res) => {
    productos.push({id: productos.length + 1,name: 'Harina', price: 100, foto:"foto3"});
    res.send(productos);
});


