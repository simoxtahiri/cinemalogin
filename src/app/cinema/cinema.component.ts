import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrl: './cinema.component.css'
})
export class CinemaComponent implements OnInit {

public villes! :Data ;//???????????

constructor(private Http: HttpClient){}
ngOnInit(){
this.Http.get("http://localhost:8080/villes")
   .subscribe(data=>{
      this.villes=data;

   },err=>{
      console.log(err);
   })
    
}
}
