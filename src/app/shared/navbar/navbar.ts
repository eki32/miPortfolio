import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
scrollToAbout() {
 const element = document.getElementById('about');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
scrollToProjects() {
 const element = document.getElementById('project-card');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
  
scrollToContact() {
  const element = document.getElementById('contact');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

}
