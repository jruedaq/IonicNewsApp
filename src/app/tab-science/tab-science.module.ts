import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {TabSciencePageRoutingModule} from './tab-science-routing.module';

import {TabSciencePage} from './tab-science.page';
import {TabTemplateComponent} from '../tab-template/tab-template.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabSciencePageRoutingModule
  ],
  exports: [
    TabTemplateComponent
  ],
  declarations: [TabSciencePage, TabTemplateComponent]
})
export class TabSciencePageModule {
}
