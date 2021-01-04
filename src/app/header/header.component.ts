import { Component, OnInit } from '@angular/core';
import { faEnvelope, faGamepad, faGlobe, faMobile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faMail = faEnvelope;
  faMobile = faMobile;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faGlobe = faGlobe;
  faGamepad = faGamepad;
  constructor() { }

  ngOnInit(): void {
  }

}
