import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from './hero.service';

import { Hero } from './hero';

@Component({
    selector: 'my-heroes',
    template: require('./heroes.component.html'),
    styles: [require('./heroes.component.css')]
})

export class HeroesComponent implements  OnInit{
    selectedHero: Hero;
    heroes: Hero[];

    constructor(
        private heroService: HeroService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes)
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}