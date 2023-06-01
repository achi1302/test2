import { Component, OnInit } from '@angular/core';
import{LibrosService} from '../../Services/libros.service'

@Component({
  selector: 'app-pjtlo',
  templateUrl: './pjtlo.component.html',
  styleUrls: ['./pjtlo.component.css']
})
export class PjtloComponent implements OnInit {
  constructor(public libroService: LibrosService) {}

  ngOnInit(): void{
    // console.log(this.libroService.getLibros());
    this.getLibros();
  }


  getLibros(){
    this.libroService.getLibros().subscribe(
      res => {
        this.libroService.libros = res;
        console.log(this.libroService.libros );
      },
      err => {
        console.log(err);
      }
    )
  }
}
