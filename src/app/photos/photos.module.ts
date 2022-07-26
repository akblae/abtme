import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PhotosPage } from './photos.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PhotosPageRoutingModule } from './photos-routing.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: PhotosPage }]),
    PhotosPageRoutingModule,
  ],
  declarations: [PhotosPage]
})
export class PhotosPageModule {}
