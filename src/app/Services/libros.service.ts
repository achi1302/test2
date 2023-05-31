import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Libro} from '../Models/libro'

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  API_URL="http://localhost:3000/api/libros";
  libros: Libro[] | undefined
  constructor(private http:HttpClient) { }

  getLibros(){
    return this.http.get<Libro[]>(this.API_URL);
  }
}
