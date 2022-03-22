// Primer tarea acerca de clases 
 
class Usuario {
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = [] //Según la tarea libros debe ser un arreglo de objetos
        this.mascotas = [] //La iniciamos como un array
    }
    getFullName (){
        console.log(`${this.nombre} ${this.apellido}`) //Primer método usando templates strings
    }
    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota) //Agrego al arreglo la mascota recibida
    }
    countMascotas(){
        return console.log(this.mascotas.length) //Entrego la cantidad de elementos del array
    }
    addBook(nombre, autor){
        const infoLibro = { //objeto para introducir en arreglo
            nombre,
            autor
        }
        this.libros.push(infoLibro)
    }
    getBookNames(){
        const nombreLibro = [] //Preparo el array que contendra los strings de los nombres de libros
        this.libros.forEach(e => {
            const nombre = e.nombre
            nombreLibro.push(nombre)
        });
        console.log(nombreLibro)
    }
}

const usuario = new Usuario('Jonathan','Alvarado') //Instancio un objeto
//Acceso a sus métodos
usuario.getFullName()
usuario.addMascota('perro')
usuario.addMascota('gato')
usuario.addMascota('pájaro')
usuario.addMascota('lora')
usuario.addMascota('serpiente')
usuario.addMascota('conejo')
usuario.addMascota('ratón')
usuario.addBook('El señor de las moscas','William Golding')
usuario.addBook('Fundación','Isaac Asimov')
usuario.addBook('El principito','Antoine de Saint-Exupéry')
usuario.getBookNames()
usuario.countMascotas()