import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {TabSportsPageRoutingModule} from './tab-sports-routing.module';

import {TabSportsPage} from './tab-sports.page';
import {TabTemplateComponent} from '../tab-template/tab-template.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabSportsPageRoutingModule
  ],
  exports: [
    TabTemplateComponent
  ],
  declarations: [TabSportsPage, TabTemplateComponent]
})
export class TabSportsPageModule {
}
