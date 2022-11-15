class Usuario {
  constructor (nombre, apellido, libros = [], mascotas = []) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName() {
    return `${this.nombre} ${this.apellido}`
  }

  addMascotas(mascota) {
    this.mascotas = [...this.mascotas, mascota]
  }

  countMascotas() {
    return this.mascotas.length
  }

  addBook(nombre, autor) {
    this.libros = [...this.libros, {nombre, autor}]
  }

  getBookNames() {
    return this.libros.map(libro => libro.nombre)
  }
}

// Main 

const kevin = new Usuario('Kevin', 'Castillo');
console.log(kevin.getFullName());

kevin.addMascotas('Perro')
kevin.addMascotas('Gato')
console.log(kevin.countMascotas());

kevin.addBook('Javacript Eloquent', 'Marijn Haverbeke')
kevin.addBook('Functional JavaScript', 'Michael Fogus')
console.log(kevin.getBookNames())