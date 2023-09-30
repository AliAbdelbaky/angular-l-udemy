import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
// how angular works ✔️✅
// basics => 03 video ✔️✅
// basics => 11 dataBinding
