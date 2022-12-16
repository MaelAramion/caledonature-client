import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloreListComponent } from './flore-list.component';

describe('FloreListComponent', () => {
  let component: FloreListComponent;
  let fixture: ComponentFixture<FloreListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloreListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
