import { Component, OnInit } from '@angular/core';
import {GruposService} from '../../Services/grupos.service'

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.css']
})
export class GroupPageComponent implements OnInit {
  constructor(public gruposService: GruposService) {}

  ngOnInit(): void{
    // console.log(this.libroService.getLibros());
    this.getGrupos();
  }

    getGrupos(){
      this.gruposService.getGrupos().subscribe(
        res => {
          this.gruposService.grupos = res;
          console.log(this.gruposService.grupos );
        },
        err => {
          console.log(err);
        }
      )
    }
  }

