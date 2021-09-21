import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {TabSciencePageRoutingModule} from './tab-science-routing.module';

import {TabSciencePage} from './tab-science.page';
import {TabTemplateComponent} from '../tab-template/tab-template.component';
import {CardComponent} from '../card/card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabSciencePageRoutingModule
  ],
  exports: [
    TabTemplateComponent,
    CardComponent
  ],
  declarations: [TabSciencePage, TabTemplateComponent, CardComponent]
})
export class TabSciencePageModule {
}
