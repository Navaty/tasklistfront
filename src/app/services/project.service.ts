import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Project} from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectsUrl: string = 'https://stark-atoll-30319.herokuapp.com/projects';
  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]>{
   return this.http.get<Project[]>(this.projectsUrl);
  }
}
