
import {Navio} from "Estela-UC4/mar-dos-ladroes/src/Navio"
import {Bergantim} from "Estela-UC4/mar-dos-ladroes/src/Bergantim"
import {Chalupa} from "Estela-UC4/mar-dos-ladroes/src/Chalupa"
import {Galeao} from "Estela-UC4/mar-dos-ladroes/src/Galeao"




const nav1:Galeao = new Galeao ("Estrela", 40)

const nav2:Chalupa = new Chalupa ("Dourado", 5)

const nav3:Bergantim = new Bergantim ("Terror do Mar", 20)


nav1.atacar()

nav2.exibirInformacao()

nav3.navegar()

nav1.navegar()

nav2.atacar()