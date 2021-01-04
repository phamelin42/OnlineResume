import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  public langs: Array<string> = ['English', 'Français', 'Italiano (read only)'];
  constructor() { }

  ngOnInit(): void {
  }

}
