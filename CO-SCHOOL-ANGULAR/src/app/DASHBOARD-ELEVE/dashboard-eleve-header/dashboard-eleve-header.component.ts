import { Component, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-dashboard-eleve-header',
  templateUrl: './dashboard-eleve-header.component.html',
  styleUrls: ['./dashboard-eleve-header.component.css']
})
export class DashboardEleveHeaderComponent {
  
  constructor(@Inject(DOCUMENT) private document: Document) {}

  toggleFullscreen() {
    const elem = this.document.documentElement;

    if (!this.document.fullscreenElement) {
      elem.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      }
    }
  }
}
