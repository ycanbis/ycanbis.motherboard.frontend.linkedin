import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './master.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/motherboard",
    pathMatch: 'full',
  },
  {
    path: '',
    component: MasterComponent,
    children: [
      {
        path : '',
        loadChildren : ()=> import('./dashboard/dashboard.module').then(mod=>mod.DashboardModule)
      },
      {
        path : 'social/linkedin',
        loadChildren : ()=> import('./my-social-subscription/linkedin/linkedin.module').then(mod=>mod.LinkedinModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
