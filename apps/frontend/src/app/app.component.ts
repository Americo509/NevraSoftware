import { Component, inject } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'nevra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';

  appService = inject(AppService);

  constructor() {
    const user = this.appService.getUserLocally();
    if (!user) {
      this.appService
        .createUser('n' + 1, 'n' + 2, 'n' + 3, 'n' + 4)
        .subscribe((user) => {
          console.log(user);
          this.appService.saveUserLocally(user);
        });
    }
  }
}
