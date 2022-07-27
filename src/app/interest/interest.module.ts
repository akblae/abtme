import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InterestPage } from './interest.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { InterestPageRoutingModule } from './interest-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    InterestPageRoutingModule
  ],
  declarations: [InterestPage]
})
export class InterestPageModule {}
