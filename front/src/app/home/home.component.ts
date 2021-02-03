import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  campaigns: any;
  searchText: any;
  constructor(private http: HttpClient, private campaignService: CampaignService) {

  }

  ngOnInit() {
    this.campaignService.getAllCampaigns()
      .subscribe(data => this.campaigns = data);
  }
}
