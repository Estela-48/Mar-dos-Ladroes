
import {Navio} from "./Navio"

export class Galeao extends Navio 

{constructor (nome: string, capacidadeTripulacao: number, vida: number = 200,
     velocidade: string = "Baixa", canhoes: number = 50){
    super (nome, capacidadeTripulacao, vida, velocidade, canhoes)
this.verificaTripulacao()}


navegar(): string {
    return `O galeao ${this.nome} avança lentamente pelo mar.`}


atacar():string {
    return `O galeao ${this.nome} dispara uma poderosa salva ${this.canhoes} de canhões.`}


repararNavio(reparar:number):void {
    this.vida += reparar
    if (this.vida > 200 ) {this.vida = 200}  }


private verificaTripulacao():void {
     if (this.capacidadeTripulacao > 50) this.capacidadeTripulacao = 50
     if (this.capacidadeTripulacao < 0) this.capacidadeTripulacao = 0}


}