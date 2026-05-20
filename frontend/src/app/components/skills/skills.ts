import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { forkJoin } from 'rxjs';

import { Skill, SkillsService } from '../../core/services/skills.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class SkillsComponent implements OnInit {
  private skills = inject(SkillsService);

  allSkills: Skill[] = [];
  selected: Set<string> = new Set();
  saving = false;
  message = '';

  ngOnInit(): void {
    forkJoin({
      allSkills: this.skills.listAllSkills(),
      mySkills: this.skills.getMySkills(),
    }).subscribe({
      next: (response) => {
        this.allSkills = response.allSkills.skills;
        this.selected = new Set(response.mySkills.skills.map((skill) => skill.name));
      },
      error: (err: HttpErrorResponse) => {
        console.error('Failed to load skills:', err);
        this.message = 'Failed to load skills.';
      },
    });
  }

  toggle(skillName: string): void {
    if (this.selected.has(skillName)) {
      this.selected.delete(skillName);
      return;
    }

    this.selected.add(skillName);
  }

  save(): void {
    this.saving = true;
    this.message = '';

    this.skills.replaceMySkills([...this.selected]).subscribe({
      next: () => {
        this.saving = false;
        this.message = 'Skills saved.';
      },
      error: (err: HttpErrorResponse) => {
        console.error('Failed to save skills:', err);
        this.saving = false;
        this.message = 'Failed to save skills.';
      },
    });
  }
}
