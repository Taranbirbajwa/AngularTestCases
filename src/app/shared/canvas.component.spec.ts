import { TestBed, async, tick, fakeAsync } from '@angular/core/testing';
import { CanvasComponent } from './canvas.component';

describe('CanvasComponent', () => {
  beforeEach(() => {
    window['__zone_symbol__FakeAsyncTestMacroTask'] = [
      {
        source: 'HTMLCanvasElement.toBlob',
        callbackArgs: [{ size: 200 }],
      },
    ];
  });
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CanvasComponent
      ],
    }).compileComponents();
  }));

  it('should be able to generate blob data from canvas', fakeAsync(() => {
    const fixture = TestBed.createComponent(CanvasComponent);
    const canvasComp = fixture.componentInstance;

    fixture.detectChanges();
    expect(canvasComp.blobSize).toBe(0);

    tick();
    expect(canvasComp.blobSize).toBeGreaterThan(0);
  }));
});


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/