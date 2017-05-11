const mongoose = require('mongoose')
const app = require('./app') 	
const config = require('./config')

//conexion a la bd
mongoose.connect(config.db, (err , resp) => {
	if (err) {
		return console.log(`Error al conectar a la base de datos: ${err}`)
	}
	console.log('Conexion a la base de datos establecida...')
//arranca el server
	app.listen(config.port, () => {
	console.log(`API REST corriendo en http://localhost:${config.port}`)
   })
})

