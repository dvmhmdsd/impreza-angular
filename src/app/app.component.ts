import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '../../node_modules/@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  scroll: boolean = false;

  constructor(@Inject(DOCUMENT) private doc: Document) {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let num = window.scrollY;
    if (num > 30) {
      this.scroll = true;
    } else if (this.scroll && num < 5) {
      this.scroll = false;
    }
 }
}