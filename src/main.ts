import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode, Component } from '@angular/core';
import { AppModule } from './app/app.module';

// if (process.ENV.env === 'production') {
//   enableProdMode();
// }

@Component({
    templateUrl: 'index.html',
    styleUrls: ['globls.less']
})

platformBrowserDynamic().bootstrapModule(AppModule);
