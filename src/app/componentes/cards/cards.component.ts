import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/Serie';
import { SerieService } from 'src/app/servicos/serie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  series!: Serie[]

  isModal: boolean = false

  idSerieExcluir!: any

  constructor(private service:SerieService, private router:Router) { }

  ngOnInit(): void {
    this.listarSeries()
  }

  listarSeries() {
    this.service.listar().subscribe(resultado => {
      console.log(resultado)
      this.series = resultado
    })
  }

  edit(id:any) {
    this.router.navigate(['/editar/' + id])
  }

  cancelarAcao() {
    this.isModal = false
  }

  confirmarAcao() {
    this.service.deleteSerie(this.idSerieExcluir).subscribe({
      next: (resultado)=> {console.log('Tarefa excluida com sucesso!')
                          this.listarSeries()},
      error: (erro)=> console.error(erro),
      complete: ()=> {console.info('Processo de exclusão completo!')
                      this.isModal = false}
    })
  }

  mostrarModal(id:any) {
    this.isModal = true
    this.idSerieExcluir = id
  }
}
