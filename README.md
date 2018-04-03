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

You need a JSON resource file for each language. Default location is `assets/i18n/xx-XX.json`

### Imports and definitions
Import `TranslateModule`, `TranslateLoader` and `TranslateHttpLoader` in `app.module.ts` the HttpLoader is used to load translation files from assets folder.
```
// ngxTranslate imports
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
```

```
// define the translate file loader
export function TranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
```

```
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



### Localize elements

#### Texts and strings

#### Dates, numbers, percentages and concurrencies

#### ICU (plurals and genders)

### Switch language


