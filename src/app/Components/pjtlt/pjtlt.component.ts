import { Component, OnInit } from '@angular/core';
import{LibrosService} from '../../Services/libros.service'

@Component({
  selector: 'app-pjtlt',
  templateUrl: './pjtlt.component.html',
  styleUrls: ['./pjtlt.component.css']
})
export class PjtltComponent implements OnInit {
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
