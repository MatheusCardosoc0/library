import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notices';

  constructor(private router: Router){}

  DynamicRoutes(linkName: string){

    if(linkName == 'person') 
    {
      this.router.navigate(['/teste']) 
    }
    else
    {
      this.router.navigate(['/person']) 
    }
  }
}
