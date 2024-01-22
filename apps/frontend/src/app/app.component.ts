import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'nevra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(
    private service: AppService,
  ) {}

  ngOnInit(): void {
    this.service.getProductById(2017).subscribe(product => {
      console.log(product)
    })
  }

}
