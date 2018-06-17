import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CookieModule } from 'ngx-cookie';

import { MyApp } from './app.component';
import { PssApiProvider } from '../providers/pss-api/pss-api';
import { HttpClientModule }    from '@angular/common/http';
import { AuthProvider } from '../providers/auth/auth';
import { ProblemTypeProvider } from '../providers/problem-type/problem-type';
import { HttpLoadingProvider } from '../providers/http-loading/http-loading';
import { MachinesProvider } from '../providers/machines/machines';

@NgModule({
    declarations: [
        MyApp    
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpClientModule,
        CookieModule.forRoot(),        
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp    
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        PssApiProvider,
    AuthProvider,
    ProblemTypeProvider,
    HttpLoadingProvider,
    MachinesProvider
    ]
})
export class AppModule {}
