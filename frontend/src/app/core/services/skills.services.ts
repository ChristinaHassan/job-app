import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Skill {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api';

  listAllSkills(): Observable<{ skills: Skill[] }> {
    return this.http.get<{ skills: Skill[] }>(`${this.apiUrl}/skills`);
  }

  getMySkills(): Observable<{ skills: Skill[] }> {
    return this.http.get<{ skills: Skill[] }>(
      `${this.apiUrl}/users/me/skills`
    );
  }

  replaceMySkills(skills: string[]): Observable<{ skills: Skill[] }> {
    return this.http.put<{ skills: Skill[] }>(
      `${this.apiUrl}/users/me/skills`,
      { skills }
    );
  }
}