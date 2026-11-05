
import {Navio} from "./Navio"

export class Chalupa extends Navio 

{constructor (nome: string, capacidadeTripulacao: number, vida: number = 25,
     velocidade: string = "Muito alta", canhoes: number = 10){
    super (nome, capacidadeTripulacao, vida, velocidade, canhoes)
this.verificaTripulacao()}


navegar(): string {
    return `A chalupa ${this.nome}  utiliza sua agilidade para realizar manobras rápidas.`}


atacar():string {
    return `A chalupa ${this.nome} dispara seus canhoes ${this.canhoes} e tenta escapar rapidamente.`}


private explorarIlha():string {
     return `A tripulação do ${this.nome} está explorando uma ilha em busca de tesouros.`}


private verificaTripulacao():void {
     if (this.capacidadeTripulacao > 10) this.capacidadeTripulacao = 10
     if (this.capacidadeTripulacao < 0) this.capacidadeTripulacao = 0}


}