export default class Escola {
  constructor() {
    this._inscritos = [];
    this.cursos = ['Forró', 'Samba'];
    this.cursos_novo = [
      {
        nome: 'Forró',
        turmas: [
          {
            curso: 'Forró',
            turma: 'Turma Galileu',
            dia: 'Terça, 21h',
            preco: 'R$70,00',
            id: 1,
          },
          {
            curso: 'Forró',
            turma: 'Turma Newton',
            dia: 'Sábado, 18h',
            preco: 'R$70,00',
            id: 2,
          },
          {
            curso: 'Forró',
            turma: 'Turma Einstein',
            dia: 'Quinta, 21h',
            preco: 'R$70,00',
            id: 3,
          },
        ],
      },
      {
        nome: 'Samba',
        turmas: [
          {
            curso: 'Samba',
            turma: 'Turma Galileu',
            dia: 'Terça, 20h',
            preco: 'R$70,00',
            id: 4,
          },
          {
            curso: 'Samba',
            turma: 'Turma Newton',
            dia: 'Sábado, 17h',
            preco: 'R$70,00',
            id: 5,
          },
          {
            curso: 'Samba',
            turma: 'Turma Einstein',
            dia: 'Quinta, 20h',
            preco: 'R$70,00',
            id: 6,
          },
        ],
      },
    ];
    this.turmas = [
      {
        curso: 'Forró',
        turma: 'Turma Galileu',
        dia: 'Terça, 21h',
        preco: 'R$70,00',
        id: 1,
      },
      {
        curso: 'Forró',
        turma: 'Turma Newton',
        dia: 'Sábado, 18h',
        preco: 'R$70,00',
        id: 2,
      },
      {
        curso: 'Forró',
        turma: 'Turma Einstein',
        dia: 'Quinta, 21h',
        preco: 'R$70,00',
        id: 3,
      },
      {
        curso: 'Samba',
        turma: 'Turma Galileu',
        dia: 'Terça, 20h',
        preco: 'R$70,00',
        id: 4,
      },
      {
        curso: 'Samba',
        turma: 'Turma Newton',
        dia: 'Sábado, 17h',
        preco: 'R$70,00',
        id: 5,
      },
      {
        curso: 'Samba',
        turma: 'Turma Einstein',
        dia: 'Quinta, 20h',
        preco: 'R$70,00',
        id: 6,
      },
    ];
  }
}
