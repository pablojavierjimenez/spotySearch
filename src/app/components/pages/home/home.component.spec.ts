import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home.component';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
     declarations: [HomeComponent]
    });
  });
  beforeEach(async(() => {
    TestBed.compileComponents();
  }));

  it ('should create the component', () => {
    //We can create components.
    let fixture = TestBed.createComponent(HomeComponent);
    //And do any asserts we want.
    expect(fixture.componentInstance instanceof HomeComponent).toBe(true, 'should create HomeComponent');
  });

  it ('should update the view', () => {
    let fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    
    expect(fixture.nativeElement.textContent).toContain('Hello World! from a component.');

    fixture.componentInstance.homeText = 'New value'
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('New value');
  });
  
});
