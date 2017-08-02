import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchensetupComponent } from './kitchensetup.component';

describe('KitchensetupComponent', () => {
  let component: KitchensetupComponent;
  let fixture: ComponentFixture<KitchensetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchensetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchensetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
