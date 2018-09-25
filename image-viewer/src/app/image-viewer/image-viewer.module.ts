import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageViewerComponent } from './image-viewer.component';
import {ImageViewerRoutingModule} from './image-viewer-routing.module';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {ModalGalleryModule} from 'angular-modal-gallery';

@NgModule({
  imports: [
    CommonModule,
    ImageViewerRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ModalGalleryModule
  ],
  declarations: [ImageViewerComponent]
})
export class ImageViewerModule { }
