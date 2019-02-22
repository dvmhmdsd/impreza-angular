import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {

  satisfied: number = 128;
  projects: number = 247;

  constructor() { }

  ngOnInit() {
  }

}
