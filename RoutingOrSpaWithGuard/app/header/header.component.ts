import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  homeLink: String = '/';

  private router: Router;

  constructor(router: Router) {
    this.router = router;
   }

   loadShoes() {
     this.router.navigate(['/runshoes']);
   }

  ngOnInit() {
  }

}
