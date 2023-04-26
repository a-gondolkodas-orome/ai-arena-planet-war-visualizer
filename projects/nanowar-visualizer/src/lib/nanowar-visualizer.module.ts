import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NanowarVisualizerComponent } from './nanowar-visualizer.component';
import { FormsModule } from '@angular/forms';
import { MatListModule } from "@angular/material/list";
@NgModule({
  declarations: [NanowarVisualizerComponent],
  imports: [CommonModule, FontAwesomeModule, FormsModule, MatListModule],
  exports: [NanowarVisualizerComponent],
})
export class NanowarVisualizerModule {}
