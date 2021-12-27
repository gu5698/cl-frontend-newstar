import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-cl-heroes',
  templateUrl: './cl-heroes.component.html',
  styleUrls: ['./cl-heroes.component.css']
})
export class ClHeroesComponent implements OnInit {

  constructor(public heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroService.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroService.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroService.heroes = this.heroService.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
