import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { HeroService } from './hero.service';
import { HttpClient } from '@angular/common/http';
import { Title } from './title';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public messageService: MessageService, public heroService: HeroService, private httpClient: HttpClient) {}

  title = 'Tour of Heroes';
  data: Title;

  ngOnInit(): void {
    this.getNavText();
  }

  getNavText() {
    const url = 'assets/data/dashboard-link.json';
    this.httpClient.get(url)
      .subscribe((data: Title) => this.data = data);
  }
}
