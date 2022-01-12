import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalCurrencyExchangeComponent } from './historical-currency-exchange.component';

describe('HistoricalCurrencyExchangeComponent', () => {
  let component: HistoricalCurrencyExchangeComponent;
  let fixture: ComponentFixture<HistoricalCurrencyExchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalCurrencyExchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalCurrencyExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
