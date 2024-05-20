import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideStorage, getStorage } from '@angular/fire/storage'

import { provideNgxMask } from 'ngx-mask'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp({
        apiKey: "AIzaSyCSwxFHqaU0VjVsqXM4pGk2Eljg4VSvpPI",
        authDomain: "departamentmanager-226c8.firebaseapp.com",
        projectId: "departamentmanager-226c8",
        storageBucket: "departamentmanager-226c8.appspot.com",
        messagingSenderId: "1094607551295",
        appId: "1:1094607551295:web:42a6dc41366a67ffac318a"
      }
      )),
      provideStorage(() => getStorage())
    ]),
    provideNgxMask()
  ]
};
