import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  data: any;
  private baseUrl = 'http://bpcoders.nazwa.pl/projekty/bacup-synerise/show.php';

  constructor(private http: HttpClient) {
    this.getRepos();
  }

  getRepos() {
    return this.http.get(this.baseUrl).subscribe(response => this.data = response);
  }

}
