import { Component, OnInit } from '@angular/core';
import {MyHttpService} from '../my-http.service';
import {MatDialog} from '@angular/material';
import {GridLayout, Image, PlainGalleryConfig, PlainGalleryStrategy} from 'angular-modal-gallery';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {

    constructor(private http: MyHttpService,
                private dialog: MatDialog) { }

    images: Image[];
    plainGalleryGrid: PlainGalleryConfig = {
      strategy: PlainGalleryStrategy.GRID,
      layout: new GridLayout({ width: '80px', height: '80px' }, { length: 6, wrap: true })
    };

    ngOnInit() {
      this.getImages(null);
    }

    applyFilter(filterString) {
      this.getImages(filterString);
    }

    getImages(filter) {
        let url = 'get-feed';
        if (filter) {
          url += '?filter=' + filter;
        }
      this.http.get(url)
        .subscribe(
          (feed: any) => {
            this.images = [];
            const items: any[] = feed.items;
            let index = 0;
            items.forEach(item => this.images.push(new Image(
              index++,
              { // modal
                img: item.media.m,
                extUrl: item.media.m
              }
            )));
          },
          error1 => {
            console.log('Error getting images');
          }
        );
    }
}
