import { Component, OnInit } from '@angular/core';
import { faGamepad, faPaw, faPlane, faPuzzlePiece, faSwimmer } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {

  gamepad = faGamepad;
  plane = faPlane;
  swimmer = faSwimmer;
  puzzlePiece = faPuzzlePiece;
  paw = faPaw;
  constructor() { }

  ngOnInit(): void {
  }

}
