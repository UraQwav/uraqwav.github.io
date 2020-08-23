import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySkilsComponent } from './my-skils.component';

describe('MySkilsComponent', () => {
  let component: MySkilsComponent;
  let fixture: ComponentFixture<MySkilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySkilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySkilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
