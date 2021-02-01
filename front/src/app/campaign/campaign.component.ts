import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {
  private routeSub: Subscription;
  public campaigns: any;
  private baseUrl = 'http://bpcoders.nazwa.pl/projekty/bacup-synerise/show.php';
  public first: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.routeSub = this.route.params.subscribe(params => {
      this.getRepos(params['id'])
    });
  }

  getRepos(id: string) {
    return this.http.get(this.baseUrl + '?id=' + id).subscribe(response => {
      this.campaigns = response
      this.first = this.campaigns[0];
    });
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
