import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TabSportsPage} from './tab-sports.page';

const routes: Routes = [
  {
    path: '',
    component: TabSportsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabSportsPageRoutingModule {
}
