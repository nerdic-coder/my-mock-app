import { Component, OnInit } from '@angular/core';
import { BeersService } from './services/beers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-mock-app';
  beers;

  constructor(private beersService: BeersService) {}

  async ngOnInit(): Promise<void> {
    this.beers = await this.beersService.beers();
    console.log('this.beers', this.beers);
  }
}
