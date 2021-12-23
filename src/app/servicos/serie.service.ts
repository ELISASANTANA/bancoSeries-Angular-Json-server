import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Serie } from 'src/app/Serie';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  private readonly API = 'http://localhost:3000/Series'

  constructor(private http:HttpClient) { }

  listar():Observable<any> {
    return this.http.get<any>(this.API)
  }

  getUmaSerie(id:any){
    return this.http.get(this.API + '/' + id)
  }

  deleteSerie(id:any) {
    return this.http.delete<any>(this.API + '/' + id)
  }

  editSerie(id:any, serie:Serie) {
    return this.http.put(this.API + '/' + id, serie)
  }

  addSerie(serie:Serie){
    return this.http.post(this.API, serie)
  }
}
