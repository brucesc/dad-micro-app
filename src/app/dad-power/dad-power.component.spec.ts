import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadPowerComponent } from './dad-power.component';

describe('DadPowerComponent', () => {
  let component: DadPowerComponent;
  let fixture: ComponentFixture<DadPowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadPowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
