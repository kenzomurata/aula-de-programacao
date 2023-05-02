class Animal {
  constructor(nome, especie, idade) {
    this.nome = nome;
    this.especie = especie;
    this.idade = idade;
    this.alimentado = false;
  }

  alimentar() {
    this.alimentado = true;
    console.log(this.nome + " foi alimentado");
  }
}

class Zelador {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.animaisDesignados = [];
  }

  designarAnimal(animal) {
    this.animaisDesignados.push(animal);
  }

  alimentarAnimais() {
    for (var indice = 0; indice < this.animaisDesignados.length; indice += 1) {
      this.animaisDesignados[indice].alimentar();
    }
  }
}

class Zoologico {
  constructor(nome) {
    this.nome = nome;
    this.animais = [];
    this.zeladores = [];
  }

  adicionarAnimal(animal) {
    this.animais.push(animal);
  }

  adicionarZelador(zelador) {
    this.zeladores.push(zelador);
  }
}

const zoo = new Zoologico("Zoo Lógico");

const animal1 = new Animal("Leila", "Bovino", "10");

const animal2 = new Animal("Luna", "Felino", "7");

const animal3 = new Animal("Punk", "Canino", "14");

const animal4 = new Animal("Fioti", "Primata", "25");

const animal5 = new Animal("Frank", "Ave", "12");

const animal6 = new Animal("Godofredo", "Peixe", "3");

const zelador1 = new Zelador("Roberto", "40");

const zelador2 = new Zelador("Fábio", "37");

const zelador3 = new Zelador("Beto", "29");

console.log(zoo);

zoo.adicionarAnimal(animal1);
zoo.adicionarAnimal(animal2);
zoo.adicionarAnimal(animal3);
zoo.adicionarAnimal(animal4);
zoo.adicionarAnimal(animal5);
zoo.adicionarAnimal(animal6);
zoo.adicionarZelador(zelador1);
zoo.adicionarZelador(zelador2);
zoo.adicionarZelador(zelador3);

console.log(zoo);

zelador1.designarAnimal(animal1);
zelador1.designarAnimal(animal2);
zelador2.designarAnimal(animal3);
zelador2.designarAnimal(animal4);
zelador3.designarAnimal(animal5);
zelador3.designarAnimal(animal6);

console.log(zoo);

zelador1.alimentarAnimais();
zelador2.alimentarAnimais();
zelador3.alimentarAnimais();

console.log(zoo);
console.log(zelador1);
console.log(zelador2);
console.log(zelador3);
