import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeMyWorkComponent } from './some-my-work.component';

describe('SomeMyWorkComponent', () => {
  let component: SomeMyWorkComponent;
  let fixture: ComponentFixture<SomeMyWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeMyWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeMyWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
