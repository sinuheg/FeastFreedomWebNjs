import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenverifyComponent } from './kitchenverify.component';

describe('KitchenverifyComponent', () => {
  let component: KitchenverifyComponent;
  let fixture: ComponentFixture<KitchenverifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenverifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
