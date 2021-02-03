import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CampaignComponent } from './campaign/campaign.component';
import { SingleCampaignComponent } from './single-campaign/single-campaign.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'campaigns/:id',
    component: CampaignComponent
  },
  {
    path: 'campaign/:id',
    component: SingleCampaignComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
