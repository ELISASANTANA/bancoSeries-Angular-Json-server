import { Serie } from 'src/app/Serie';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SerieService } from 'src/app/servicos/serie.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-serie-form',
  templateUrl: './serie-form.component.html',
  styleUrls: ['./serie-form.component.css']
})
export class SerieFormComponent implements OnInit {

  form!: FormGroup

  isModal: boolean = false

  serie!: any

  verificarStatus: boolean = true
  // true => cadastrar
  // false => editar

  constructor(private fb: FormBuilder, private service: SerieService, private router: Router, private rotaAtiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [null],
      nome: [null],
      emissora: [null],
      foto: [null]
    })

    const id_entrada = <any>this.rotaAtiva.snapshot.params['id']
    console.log('id de entrada:' + id_entrada)
    this.service.getUmaSerie(id_entrada).subscribe({
      next: (resultado) => {console.log(resultado)
                            this.serie = resultado
                            this.updateForm(this.serie)
                            this.verificarStatus = false},
      error: (erro) => console.error(erro),
      complete: () => console.info('Complete')
    })
  }

  salvarSerie() {
    console.log(this.form.value)
    // this.form.value.id != null equivalentes
    // condição para editar os campos possuem o id no db
    if(this.form.value.id){
      // editar
      this.service.editSerie(this.form.value.id, this.form.value).subscribe({
        next: (resultado) => console.log('Serie editada!'),
        error: (erro) => console.error(erro),
        complete: () => {console.info('Finalizado')
                         this.router.navigate(['/cards'])}
      })

    }else {
      // cadastrar se o id = null
      // this.service.addSerie(this.form.value).subscribe({
      //   next: (resultado) => console.log('Serie adicionada!'),
      //   error: (erro) => console.error(erro),
      //   complete: () => {console.info('Finalizado')
      //                    this.router.navigate(['/lista'])}
      // })
      this.isModal = true
    }
  }

  updateForm(serie: any) {
    this.form.patchValue({
      id:serie.id,
      nome:serie.nome,
      emissora:serie.emissora,
      foto: serie.foto
    })
  }

  cancelarAcao() {
    this.isModal = false
  }

  confirmarAcao() {
    this.service.addSerie(this.form.value).subscribe({
      next: (resultado) => console.log('Serie adicionada!'),
      error: (erro) => console.error(erro),
      complete: () => {console.info('Finalizado')
                       this.router.navigate(['/lista'])
                       this.isModal = false}
    })
  }

}
