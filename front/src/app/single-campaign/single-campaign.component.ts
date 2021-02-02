import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-single-campaign',
  templateUrl: './single-campaign.component.html',
  styleUrls: ['./single-campaign.component.scss']
})
export class SingleCampaignComponent implements OnInit {
  private routeSub: Subscription;
  private baseUrl = 'https://bpcoders.nazwa.pl/projekty/bacup-synerise/show.php';

  campaign:any;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.routeSub = this.route.params.subscribe(params => {
      this.getRepos(params['id'])
    });}

    back() {
      window.history.back();
    }

    getRepos(id: string) {
      return this.http.get(this.baseUrl + '?id=' + id).subscribe(response => {
        this.campaign = response
        console.log(response);
      });
    }

  ngOnInit(): void {
  }

}
