import { Injectable } from '@angular/core';

@Injectable()
  export class VillanosService {
    private villanos: Villano[] = [
      {
        nombre: "Galactus",
        bio: " es un supervillano ficticio que aparece en historietas publicadas por la editorial Marvel Comics. Creado por los historietistas Stan Lee y Jack Kirby.",
        img: "assets/img/galactus.png",
        aparicion: "1941-11-01",
        casa:"Marvel"
      },
      {
        nombre: "Dormammu",
        bio: " El único Conquistador cósmico El propósito de toda evolución El porqué de toda existencia Destructor de mundos Salvador de los mundos",
        img: "assets/img/dormammu.png",
        aparicion: "1964-11-01",
        casa:"Marvel"
      },
      {
        nombre: "Surtur",
        bio: "Inmenso poderes mágico Fuerza y resistencia sobrehumanas Inmortalidad Empuña a Crepúsculo la Espada de la Muerte",
        img: "assets/img/surtur.png",
        aparicion: "1941-11-01",
        casa:"Marvel"
      },
      {
        nombre: "Ego",
        bio: "Manipulación de la materia poderes psiónicos",
        img: "assets/img/ego.png",
        aparicion: "1966-08-01",
        casa:"Marvel"
      }
    ];
    constructor (){
      console.log("Serv. Listo Para consumir");
    }
    getVillanos():Villano[]{
      return this.villanos
    }
    getvillano( idx: number){
      return this.villanos[idx];
    }
   
  }

export interface Villano {
    nombre: string;
    bio: string;
    img: string;
    aparicion: string;
    casa:string;
    idx?: number;
  
}
