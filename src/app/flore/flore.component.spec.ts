import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloreComponent } from './flore.component';

describe('FloreComponent', () => {
  let component: FloreComponent;
  let fixture: ComponentFixture<FloreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
