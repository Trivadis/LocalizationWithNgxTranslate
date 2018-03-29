import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NavModule } from './nav/nav.module';

/* 
Import all needed locals and register them this is for dates, numbers, percentage and concurencies
*/
import { registerLocaleData } from '@angular/common';
import localeDECH from '@angular/common/locales/de-CH';
import localeFR from '@angular/common/locales/fr';
import localeIT from '@angular/common/locales/it';
import { TranslateSelectorPipe } from './pipes/TranslteSelectorPipe';

registerLocaleData(localeDECH);
registerLocaleData(localeFR);
registerLocaleData(localeIT);

// define the translate loader with the file location
// because this project is hosted on github pages the path is diffrent
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./AngularNgxTranslate/assets/i18n/");
}

@NgModule({
  declarations: [
    AppComponent,
    TranslateSelectorPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NavModule,
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }