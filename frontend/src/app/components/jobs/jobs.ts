import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Job, JobsService } from '../../core/services/jobs.service';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './jobs.html',
  styleUrl: './jobs.css',
})
export class JobsComponent implements OnInit {
  jobs: Job[] = [];
  loading = true;
  private jobsService = inject(JobsService);
  
  ngOnInit(): void {
    this.jobsService.getJobs().subscribe({
      next: (response) => {
        this.jobs = response.jobs;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load jobs:', err);
        this.loading = false;
      },
    });
  }
}
