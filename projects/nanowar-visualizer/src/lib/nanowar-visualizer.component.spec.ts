import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NanowarVisualizerComponent } from './nanowar-visualizer.component';

describe('NanowarVisualizerComponent', () => {
  let component: NanowarVisualizerComponent;
  let fixture: ComponentFixture<NanowarVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NanowarVisualizerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NanowarVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
