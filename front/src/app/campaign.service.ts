import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Campaign } from './Campaign';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  constructor(private http: HttpClient) { }

  getAllCampaigns() {
    return this.http.get<Campaign[]>(`${environment.apiUrl}/show.php`);
  }

  getBacups(s_id: string) {
    return this.http.get<Campaign[]>(`${environment.apiUrl}/show.php?s_id=${s_id}`);
  }

  getBacup(id: string) {
    return this.http.get<Campaign[]>(`${environment.apiUrl}/show.php?id=${id}`);
  }

  getStatus() {
    return this.http.get<Campaign[]>(`${environment.apiUrl}/show.php?last=true`);
  }
}
