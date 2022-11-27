import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NanowarVisualizerModule } from 'projects/nanowar-visualizer/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NanowarVisualizerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
