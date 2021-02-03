import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  data: any;
  searchText: any;
  constructor(private http: HttpClient) {
    this.getRepos();
  }

  getRepos() {
    return this.http.get(`${environment.apiUrl}/show.php`).subscribe(response => {
      this.data = response;
    });
  }

}
