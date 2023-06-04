import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Grupos} from '../Models/grupos'

@Injectable({
  providedIn: 'root'
})
export class GruposService {
  API_URL="http://localhost:3000/api/grupos";
  grupos: Grupos[] | undefined
  constructor(private http:HttpClient) { }


  getGrupos(){
    return this.http.get<Grupos[]>(this.API_URL);
  }
}
