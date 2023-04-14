import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NanowarVisualizerComponent } from './nanowar-visualizer.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [NanowarVisualizerComponent],
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  exports: [NanowarVisualizerComponent],
})
export class NanowarVisualizerModule {}
