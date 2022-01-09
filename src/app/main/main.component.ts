import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  master: String = "Momo le Bobo";
  padawans: Array<String> = ["Bobby", "John", "John John", "Gary"];
  isNuit: boolean = false;
  birthday: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  userclic(): void {
    console.log("clicketi");
  }

  setJourNuit(): void {
    this.isNuit = !this.isNuit;
  }

}
