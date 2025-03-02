// Desafio de projeto - 3
class Hero {
    constructor(name, age, tipo) {
        this.name = name;
        this.age = age;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {

            case "guerreiro":
                ataque = "espada de fogo"
                break

            case "mago":
                ataque = "magia poderosa"
                break

            case "monge":
                ataque = "arte marcial proibida"
                break

            case "samurai":
                ataque = "kunai afiada"
                break

            default:
                ataque = "ataque não localizado"
        }
        console.log(`O ${this.tipo} usou a ${ataque} para se defender!`)
    }
}

const hero1 = new Hero("Bilbo", 25, "guerreiro")
const hero2 = new Hero("Sauron", 500, "mago")
const hero3 = new Hero("Wu Shang", 40, "monge")
const hero4 = new Hero("Takezo", 28, "samurai")

hero1.atacar()
hero2.atacar()
hero3.atacar()
hero4.atacar()