import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-villano-tarjeta',
  templateUrl: './villano-tarjeta.component.html',
  styleUrls: ['./villano-tarjeta.component.css']
})
export class VillanoTarjetaComponent implements OnInit {

  @Input() villano: any = {};
  @Input() index: number = 0;
 

  constructor( private router: Router) {

  }

  vervillano(){
  
    this.router.navigate(['/villano', this.index ])

  }

  ngOnInit(): void {
  }

}
