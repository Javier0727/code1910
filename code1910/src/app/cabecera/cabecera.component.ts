import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }
noshow(){
  document.getElementById("navbarSupportedContent").classList.remove("show");

}
scrollTop(){
  document.documentElement.scrollTop = 0;
}
}
