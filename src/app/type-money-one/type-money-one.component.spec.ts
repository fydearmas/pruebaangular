import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeMoneyOneComponent } from './type-money-one.component';

describe('TypeMoneyOneComponent', () => {
  let component: TypeMoneyOneComponent;
  let fixture: ComponentFixture<TypeMoneyOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeMoneyOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeMoneyOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
