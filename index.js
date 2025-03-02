// Desafio de projeto - 3
class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    strike() {
        let attack;
        switch (this.type) {

            case "guerreiro":
                attack = "espada de fogo"
                break

            case "mago":
                attack = "magia poderosa"
                break

            case "monge":
                attack = "arte marcial proibida"
                break

            case "samurai":
                attack = "kunai afiada"
                break

            default:
                attack = "ataque não localizado"
        }
        console.log(`O ${this.type} usou a ${attack} para se defender!`)
    }
    infoHero() {
        console.log(`Nome: ${this.name} Age: ${this.age} Type: ${this.type}`)
    }
}

const hero1 = new Hero("Bilbo", 25, "guerreiro")
const hero2 = new Hero("Sauron", 500, "mago")
const hero3 = new Hero("Wu Shang", 40, "monge")
const hero4 = new Hero("Takezo", 28, "samurai")

hero1.strike()
hero2.strike()
hero3.strike()
hero4.strike()

hero1.infoHero()
hero2.infoHero()
hero3.infoHero()
hero4.infoHero()