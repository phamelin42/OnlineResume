import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  public degrees: Array<{name: string, year: string}> = [
    {
      name: '42 Born 2 Code',
      year: '2016 - 2019'
    },
    {
      name: 'High school diploma',
      year: '2014'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
