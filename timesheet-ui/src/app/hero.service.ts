import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-data/mock-heroes';
import { Observable, of } from 'rxjs';
import { TraceService } from './services/trace.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  getHeroes(): Observable<Hero[]> {
    // Todo: send the message _after_ fetching the heroes
    this.traceService.add('HeroService: fetched heroes');
    // return this.http.get<Hero[]>(this.heroesUrl).retry(3);
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // Todo: send the message _after_ fetching the hero
    this.traceService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.traceService.add('HeroService: ' + message);
  }

  constructor(
    private http: HttpClient,
    private traceService: TraceService
  ) { }

}
