import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase} from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideFirebaseApp(() => initializeApp({"projectId":"horariociego-rtdb","appId":"1:402656595256:web:a15b8790a17b82a1e045cd","databaseURL":"https://horariociego-rtdb-default-rtdb.firebaseio.com","storageBucket":"horariociego-rtdb.appspot.com","apiKey":"AIzaSyDlhhRxiPGRcVlsbjUwVC9oFIEVlr0CJKs","authDomain":"horariociego-rtdb.firebaseapp.com","messagingSenderId":"402656595256"}))
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
