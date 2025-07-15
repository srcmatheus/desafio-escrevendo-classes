class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";

    if (this.tipo === "mago") {
      ataque = "usou magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "usou espada";
    } else if (this.tipo === "monge") {
      ataque = "usou artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "usou shuriken";
    } else {
      ataque = "usou um ataque indefinido";
    }

    // Exibe a mensagem do ataque
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

let heroi1 = new Heroi("Arthas", 30, "guerreiro");
let heroi2 = new Heroi("Merlin", 150, "mago");
let heroi3 = new Heroi("Lee", 40, "monge");
let heroi4 = new Heroi("Hanzo", 25, "ninja");

heroi1.atacar();
heroi2.atacar();  
heroi3.atacar(); 
heroi4.atacar();  