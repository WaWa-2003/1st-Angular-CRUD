import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  faHome = faHome; 

  textFilterResult = ''; 

  // filterResults(text: string) {
  //   if (!text) {
  //     return this.textFilterResult ;
  //   } else {
  //     this.textFilterResult = text;
  //     return this.textFilterResult ;
  //   }

  // }

  filterResults(text: string){
    confirm("This function is not finished yet!");
  }

}
