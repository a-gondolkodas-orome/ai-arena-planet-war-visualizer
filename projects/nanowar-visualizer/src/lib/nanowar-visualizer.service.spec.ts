import { TestBed } from '@angular/core/testing';

import { NanowarVisualizerService } from './nanowar-visualizer.service';

describe('NanowarVisualizerService', () => {
  let service: NanowarVisualizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NanowarVisualizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
