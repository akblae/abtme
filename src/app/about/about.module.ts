import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutPage } from './about.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AboutPageRoutingModule } from './about-routing.module';
import { InfoComponent } from '../info/info.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AboutPageRoutingModule
  ],
  declarations: [AboutPage, InfoComponent]
})
export class AboutPageModule {}
