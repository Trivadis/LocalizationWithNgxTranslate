import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

  changeLanguage(lang: string): void {
    this.translate.use(lang);
  }

}