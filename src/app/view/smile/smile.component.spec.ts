import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmileComponent } from './smile.component';

describe('SmileComponent', () => {
  let component: SmileComponent;
  let fixture: ComponentFixture<SmileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmileComponent]
    });
    fixture = TestBed.createComponent(SmileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
