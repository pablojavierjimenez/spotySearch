import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { NavbarComponent } from './navbar.component';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
     declarations: [NavbarComponent]
    });
  });
  beforeEach(async(() => {
    TestBed.compileComponents();
  }));

  it ('should create the component', () => {
    //We can create components.
    let fixture = TestBed.createComponent(NavbarComponent);
    //And do any asserts we want.
    expect(fixture.componentInstance instanceof NavbarComponent).toBe(true, 'should create NavbarComponent');
  });

  it ('should update the view', () => {
    let fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();
    
    expect(fixture.nativeElement.textContent).toContain('Hello World! from a component.');

    fixture.componentInstance.navbarText = 'New value'
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('New value');
  });
  
});
