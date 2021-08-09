import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {Task} from '../tasks';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'appliction/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'
  constructor(private http: HttpClient) { }

  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl) 
  }
  deleteTask(task: Task):Observable<Task>{
    let url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)
  }
  updateTaskReminder(task: Task):Observable<Task> {
    let url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url, task, httpOptions)
  }
  addTask(task: Task):Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task,httpOptions)
  }
}
