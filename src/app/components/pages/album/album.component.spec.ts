import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AlbumComponent } from './album.component';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
     declarations: [AlbumComponent]
    });
  });
  beforeEach(async(() => {
    TestBed.compileComponents();
  }));

  it ('should create the component', () => {
    //We can create components.
    let fixture = TestBed.createComponent(AlbumComponent);
    //And do any asserts we want.
    expect(fixture.componentInstance instanceof AlbumComponent).toBe(true, 'should create AlbumComponent');
  });

  it ('should update the view', () => {
    let fixture = TestBed.createComponent(AlbumComponent);
    fixture.detectChanges();
    
    expect(fixture.nativeElement.textContent).toContain('Hello World! from a component.');

    fixture.componentInstance.albumText = 'New value'
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('New value');
  });
  
});
