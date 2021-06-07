
var app = require('./app');  
var port = 3800;

mongoose.connect('mongodb://localhost:27017/calenda_app', { useMongoClient: true})
      .then(() =>{
      	 console.log ("la conexion a la base de datos cusrso_mean_social se ha realizado con correctamente")
         
        // Crear servidor
        app.listen(port, () => {
        	console.log(" Servidor corriendo en http://localhost:3800");
        })
    })