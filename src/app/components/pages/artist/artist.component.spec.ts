import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { ArtistComponent } from './artist.component';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
     declarations: [ArtistComponent]
    });
  });
  beforeEach(async(() => {
    TestBed.compileComponents();
  }));

  it ('should create the component', () => {
    //We can create components.
    let fixture = TestBed.createComponent(ArtistComponent);
    //And do any asserts we want.
    expect(fixture.componentInstance instanceof ArtistComponent).toBe(true, 'should create ArtistComponent');
  });

  it ('should update the view', () => {
    let fixture = TestBed.createComponent(ArtistComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Hello World! from a component.');

    fixture.componentInstance.artistText = 'New value'
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('New value');
  });

});
