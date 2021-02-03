import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CampaignComponent } from './campaign/campaign.component';
import { SingleCampaignComponent } from './single-campaign/single-campaign.component';
import { LoginGuardGuard } from './login-guard.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'campaigns/:id',
    component: CampaignComponent
  },
  {
    path: 'campaign/:id',
    component: SingleCampaignComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
