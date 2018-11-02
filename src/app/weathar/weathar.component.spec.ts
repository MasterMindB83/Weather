import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatharComponent } from './weathar.component';

describe('WeatharComponent', () => {
  let component: WeatharComponent;
  let fixture: ComponentFixture<WeatharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
