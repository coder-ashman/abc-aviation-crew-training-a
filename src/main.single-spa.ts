import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Simple Angular app that can be loaded by single-spa
let appRef: any = null;

export async function bootstrap() {
  // Bootstrap the Angular app
  appRef = await platformBrowserDynamic().bootstrapModule(AppModule);
}

export async function mount() {
  // Mount the app
  console.log('Training-A Angular app mounted');
}

export async function unmount() {
  // Unmount the app
  if (appRef) {
    appRef.destroy();
    appRef = null;
  }
  console.log('Training-A Angular app unmounted');
}