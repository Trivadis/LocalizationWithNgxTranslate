import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// ngxTranslate imports
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NavModule } from './nav/nav.module';

// imports for native i18n support for dates, numbers, percentages
import { registerLocaleData } from '@angular/common';
import localeDECH from '@angular/common/locales/de-CH';
import localeFR from '@angular/common/locales/fr';
import localeIT from '@angular/common/locales/it';

// register each native i18n locale
registerLocaleData(localeDECH);
registerLocaleData(localeFR);
registerLocaleData(localeIT);

// icu import 
import { TranslateSelectorPipe } from './pipes/TranslteSelectorPipe';

// define the translate loader with the file location
// needs prefix parameter because app is not in root folder on github pages
export function TranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/");
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
        useFactory: TranslateLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }