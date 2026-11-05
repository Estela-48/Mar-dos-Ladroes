
import {Navio} from "./Navio"

export class Bergantim extends Navio 

{
     
constructor (nome: string, capacidadeTripulacao: number, vida: number = 50,
     velocidade: string = "Alta", canhoes: number = 20){
super (nome, capacidadeTripulacao, vida, velocidade, canhoes)
this.verificaTripulacao()}


navegar(): string {
    return `O Bergantim ${this.nome} aproveita seus ventos favoráveis para navegar rapidamente`}


atacar():string {
    return `O Bergantim ${this.nome} realiza uma sequência rápida de disparos com seus ${this.canhoes} canhoes.`}


private verificaTripulacao():void {
     if (this.capacidadeTripulacao > 20) this.capacidadeTripulacao = 20
     if (this.capacidadeTripulacao < 0) this.capacidadeTripulacao = 0}



}