import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  @Input() jobName: string = '';
  @Input() company: string = '';
  @Input() date: string = '';
  @Input() description: string = '';
  @Input() achievements: string = '';
  @Input() tech: Array<string> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
