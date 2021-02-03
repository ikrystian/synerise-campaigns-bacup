import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {
  private routeSub: Subscription;
  public campaigns: any;
  private baseUrl = `${environment.apiUrl}/show.php`;
  public first: any;
  obj: any;
  displayedColumns: string[] = ['date', 'name', 'modify', 'link', 'action'];

  constructor(private route: ActivatedRoute, private http: HttpClient, private campaignService: CampaignService) {
    this.routeSub = this.route.params.subscribe(params => {
      this.campaignService.getBacups(params['id'])
        .subscribe(data => this.campaigns = data);
    });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
