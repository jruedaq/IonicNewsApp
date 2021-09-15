import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TabTechnologyPage} from './tab-technology.page';

const routes: Routes = [
  {
    path: '',
    component: TabTechnologyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabTechnologyPageRoutingModule {
}
