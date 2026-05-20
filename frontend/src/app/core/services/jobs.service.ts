import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Job {
  id: number;
  title: string;
  description: string;
  matched_count: number;
}

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api';


  getJobs(): Observable<{ jobs: Job[] }> {
    return this.http.get<{ jobs: Job[] }>(
      `${this.apiUrl}/jobs/matches`
    );
  }

}
