[//]: # (ng build --prod --op docs  --base-href /AngularNgxTranslate/)

# Angular localization with ngxTranslate

Demo project for Angular localization with ngxTranslate. Clone this project and install all dependencies for a working playgorund.
Visit the live demo at https://raphibolliger.github.io/AngularNgxTranslate/

## Localizing workflow

### Install ngxTranslate

First you need to install the right npm module. This depends on your Angular version.

- `Angular <  4.0.0` use `@ngx-translate/core@^7.2.2`
- `Angular <  6.0.0` use `@ngx-translate/core@^9.1.1`
- `Angular >= 6.0.0` use `@ngx-translate/core`

### Translation file

You need a JSON resource file for each language. Default location is [`assets/i18n/xx-XX.json`](https://github.com/raphibolliger/AngularNgxTranslate/tree/master/src/assets/i18n). The resource file contains keys and related texts.
```JSON
{
    "HOME": {
        "TITLE": "Angular ngxTranslate localization",
        ...
    },
    "NAV": {
        "EN": "English",
        ...
    }
}
```
It is possible to define nested elements in JSON resource files.

### Imports and definitions
Import `TranslateModule`, `TranslateLoader` and `TranslateHttpLoader` in `app.module.ts` the HttpLoader is used to load translation files from assets folder.

```TypeScript
// ngxTranslate imports
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
```

```TypeScript
// define the translate file loader
export function TranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
```

```TypeScript
@NgModule({
  declarations: [ ... ],
  imports: [
    ...,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ...
  ],
  exports: [ ... ],
  providers: [ ... ],
  bootstrap: [ AppComponent ]
})
```

To have native i18n support for dates, numbers, percentages and currencies you need to import and register each locale in `app.module.ts`
```TypeScript
// imports for native i18n support for dates, numbers, percentages
import { registerLocaleData } from '@angular/common';
import localeDECH from '@angular/common/locales/de-CH';
import localeFR from '@angular/common/locales/fr';
import localeIT from '@angular/common/locales/it';

// register each native i18n locale
registerLocaleData(localeDECH);
registerLocaleData(localeFR);
registerLocaleData(localeIT);
```

### Localize elements

#### Texts and strings
You have three ways how to achive the translation of texts

1. Use the **service**
2. Use the **pipe**
3. Use the **directive**

##### Service
Use the service to translate strings directly in components
```TypeScript
translate.get('HOME.HELLO', {name: userName}).subscribe((res: string) => {
    console.log(res); // => 'Hi, Raphael Bolliger'
});
```

##### Pipe
Use the pipe directly in html tags
```html
<p>{{ 'HOME.HELLO' | translate:{name:userName} }}</p>
```

##### Directive
Add translate attributes to html tags
```html
<p translate [translateParams]="{name: userName}">HOME.HELLO</p>
```

#### Dates, numbers, percentages and currencies
To localize dates etc. you can use the built in native pipes. Extract the actual locale with the service and set it as a parameter in the native pipes.

Following code shows a example with a date. You have to provide each parameter of the date pipe.
```html
<p class="card-text">{{ now | date:'shortDate':'':translate.currentLang }}</p>
```

Full documentations of other pipes are available at the official angular page

- Dates: https://angular.io/api/common/DatePipe
- Numbers: https://angular.io/api/common/DecimalPipe
- Percentages: https://angular.io/api/common/PercentPipe
- Currencies: https://angular.io/api/common/CurrencyPipe

#### ICU (plurals, genders and more)

### Switch language


