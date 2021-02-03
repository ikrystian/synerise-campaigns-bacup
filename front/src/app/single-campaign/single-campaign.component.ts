import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { environment } from '../../environments/environment';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-single-campaign',
  templateUrl: './single-campaign.component.html',
  styleUrls: ['./single-campaign.component.scss']
})
export class SingleCampaignComponent implements OnInit {
  private routeSub: Subscription;

  campaign: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private campaignService: CampaignService) {
    this.routeSub = this.route.params.subscribe(params => {
      this.campaignService.getBacup(params['id'])
        .subscribe(data => this.campaign = data);
    });
  }

  back() {
    window.history.back();
  }

  ngOnInit(): void {
  }

}
