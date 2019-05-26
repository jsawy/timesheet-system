import { Injectable } from '@angular/core';
import { Project } from '../model/project';
import { PROJECTS } from '../mock-data/mock-projects';
import { Observable, of } from 'rxjs';
import { TraceService } from '../services/trace.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProjectService {

  private projectUrl = 'api/heroes';  // URL to web api

  getProjects(): Observable<Project[]> {
    // Todo: send the message _after_ fetching the heroes
    this.log('fetched Projects');
    // return this.http.get<Project[]>(this.heroesUrl).retry(3);
    return of(PROJECTS);
  }

  getProject(id: number): Observable<Project> {
    // Todo: send the message _after_ fetching the hero
    this.log(`fetched hero id=${id}`);
    return of(PROJECTS.find(project => project.id === id));
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.traceService.add('ProjectService: ' + message);
  }

  constructor(
    private http: HttpClient,
    private traceService: TraceService
  ) { }

}
