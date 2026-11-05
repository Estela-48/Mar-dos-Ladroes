
export class Navio {
    protected nome: string
    protected capacidadeTripulacao: number
    protected vida: number
    protected velocidade: string
    protected canhoes: number

constructor (nome:string, capacidadeTripulacao: number, vida:number, 
    velocidade:string, canhoes:number){
    this.nome = nome
    this.capacidadeTripulacao = capacidadeTripulacao
    this.vida = vida
    this.velocidade = velocidade
    this.canhoes = canhoes}



navegar(): string {
    return `O navio ${this.nome} esta navengando`}

atacar():string {
    return `O navio ${this.nome} esta atacando com os seus ${this.canhoes} canhoes.`}

receberDano(dano:number):void {
    this.vida -= dano
    if (this.vida < 0) this.vida = 0}
    
exibirInformacao():string {
    return `Nome: ${this.nome}
    Tripulacao: ${this.capacidadeTripulacao}
    Vida: ${this.vida}
    Velocidade: ${this.vida}
    canhoes: ${this.canhoes}`}

}