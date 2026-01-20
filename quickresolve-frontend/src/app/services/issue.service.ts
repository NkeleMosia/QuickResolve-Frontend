import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Issue } from '../models/issue.model';

@Injectable({

  providedIn: 'root'    // Makes the service available throughout the app
})
export class IssueService {
  
  private apiUrl = 'http://localhost:8080/api/issues';  // Base URL of your Spring Boot backend

  constructor(private http: HttpClient) {}  // Inject HttpClient so we can make API calls

  getAllIssues(): Observable<Issue[]> {     // Fetch all issues from the backend

    return this.http.get<Issue[]>(this.apiUrl);     // Sends GET request to backend
  }

  createIssue(issue: Issue): Observable<Issue> {    // Create a new issue (from report issue form)

    return this.http.post<Issue>(this.apiUrl, issue);   // Sends POST request with issue data
  }

  updateIssueStatus(issueId: number, status: string): Observable<Issue> {   // Update issue status (Open → In Progress → Resolved)

    // PUT request to backend with updated status
    return this.http.put<Issue>(
      `${this.apiUrl}/${issueId}/status`,
      { status }
    );
  }
}
