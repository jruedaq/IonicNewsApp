import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
  {
    path: 'news',
    component: TabsPage,
    children: [
      {
        path: 'science',
        loadChildren: () => import('../tab-science/tab-science.module').then(m => m.TabSciencePageModule)
      },
      {
        path: 'technology',
        loadChildren: () => import('../tab-technology/tab-technology.module').then(m => m.TabTechnologyPageModule)
      },
      {
        path: 'sports',
        loadChildren: () => import('../tab-sports/tab-sports.module').then(m => m.TabSportsPageModule)
      },
      {
        path: '',
        redirectTo: '/news/science',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/news/science',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {
}
