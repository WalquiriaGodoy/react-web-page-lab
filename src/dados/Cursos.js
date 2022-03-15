export default class ArrayDeCards {
    constructor(){
        this._inscritos = [];
        this.cursos = ["Forró", "Samba"];
        this.turmas=[
            {
                curso: "Forró",
                turma: "Turma Galileu",
                dia: "Terça, 20h",
                preco: "R$70,00"
            }, 
            {
                curso: "Forró",
                turma: "Turma Newton",
                dia: "Sábado, 18h",
                preco: "R$70,00"
            },
            {
                curso: "Forró",
                turma: "Turma Einstein",
                dia: "Quinta, 21h",
                preco: "R$70,00"
            },
            {
                curso: "Samba",
                turma: "Turma Einstein",
                dia: "Quinta, 21h",
                preco: "R$70,00"
            },
    
    ]
    }

    // adicionarCard(curso){
    //     const cursoEscolhido = curso;
    //     if (cursoEscolhido == "Forró Universitário"){
    //         const novoCard = new Card(this.forro1.curso, this.forro1.turma, this.forro1.dia, this.forro1.preco);
    //         this.cards.push(novoCard);
    //         this.notificar();
    //     };
    // }
}

// class Card{
//     constructor(curso,turma, dia, preco){
//         this.curso = curso;
//         this.turma = turma;
//         this.dia = dia;
//         this.preco = preco;
//     }
// }
        