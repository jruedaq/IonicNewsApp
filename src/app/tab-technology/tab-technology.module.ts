import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {TabTechnologyPageRoutingModule} from './tab-technology-routing.module';

import {TabTechnologyPage} from './tab-technology.page';
import {TabTemplateComponent} from '../tab-template/tab-template.component';
import {CardComponent} from '../card/card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabTechnologyPageRoutingModule
  ],
  exports: [
    TabTemplateComponent,
    CardComponent
  ],
  declarations: [TabTechnologyPage, TabTemplateComponent, CardComponent]
})
export class TabTechnologyPageModule {
}
