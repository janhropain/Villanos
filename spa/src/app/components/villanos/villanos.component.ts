import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Villano, VillanosService } from 'src/app/servicios/villanos.service';

@Component({
  selector: 'app-villanos',
  templateUrl: './villanos.component.html',
  styleUrls: ['./villanos.component.css']
})
export class VillanosComponent implements OnInit {

  villanos: Villano [] = [];

  constructor( private _villanosService: VillanosService ) {
  console.log("Este-->"+this.villanos);
   }

  ngOnInit(): void {
    this.villanos = this._villanosService.getVillanos();
    console.log(this.villanos);
  }

}
