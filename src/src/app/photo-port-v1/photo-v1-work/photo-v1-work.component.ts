import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../images.service';
import { Panel } from '../../photo-info';

@Component({
  selector: 'app-photo-v1-work',
  templateUrl: './photo-v1-work.component.html',
  styleUrls: ['./photo-v1-work.component.css']
})
export class PhotoV1WorkComponent implements OnInit {

  panels: Panel[]; //id's of panels to be displayed

  constructor(private imagesService: ImagesService) { }

  ngOnInit(): void {
    this.panels = this.imagesService.getWorkPanels();
    console.log("HEY", this.panels[0].id);
  }

}
