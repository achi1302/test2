import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit, AfterViewInit {

  constructor(){}
  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, {
        indicators:true,
        fullWidth:true,
        padding: -46
    


      });
    });
  }

}
