import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'front';
  data: any;
  private baseUrl = 'http://bpcoders.nazwa.pl/projekty/bacup-synerise/show.php';
  constructor(private http: HttpClient) {
    this.getRepos();
  }

  getRepos() {
    return this.http.get(this.baseUrl).subscribe(response => this.data = response);
  }
}
