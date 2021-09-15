import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TabSciencePage} from './tab-science.page';

const routes: Routes = [
  {
    path: '',
    component: TabSciencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabSciencePageRoutingModule {
}
