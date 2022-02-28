import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorExComponent } from './operator-ex.component';

describe('OperatorExComponent', () => {
  let component: OperatorExComponent;
  let fixture: ComponentFixture<OperatorExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
