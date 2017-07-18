import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { HeaderComponent } from './header.component';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
     declarations: [HeaderComponent]
    });
  });
  beforeEach(async(() => {
    TestBed.compileComponents();
  }));

  it ('should create the component', () => {
    //We can create components.
    let fixture = TestBed.createComponent(HeaderComponent);
    //And do any asserts we want.
    expect(fixture.componentInstance instanceof HeaderComponent).toBe(true, 'should create HeaderComponent');
  });

  it ('should update the view', () => {
    let fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    
    expect(fixture.nativeElement.textContent).toContain('Hello World! from a component.');

    fixture.componentInstance.headerTitle = 'New value'
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('New value');
  });
  
});
