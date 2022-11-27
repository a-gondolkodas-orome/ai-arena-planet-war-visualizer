import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NanowarVisualizerComponent } from './nanowar-visualizer.component';

@NgModule({
  declarations: [NanowarVisualizerComponent],
  imports: [CommonModule],
  exports: [NanowarVisualizerComponent],
})
export class NanowarVisualizerModule {}
