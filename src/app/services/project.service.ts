import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Project} from '../models/Project';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectsUrl: string = 'https://stark-atoll-30319.herokuapp.com/projects';
  constructor(private http: HttpClient) { }

  createTodo(): Observable<any>{

  }

  getProjects(): Observable<Project[]>{
   return this.http.get<Project[]>(this.projectsUrl);
  }

  toggleComplited(todo: Todo, projectid: number):Observable<any> {
    const url = `${this.projectsUrl}/${projectid}/todos/${todo.id}`;
    return this.http.patch(url, todo, httpOptions);
  }
}
