import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridNavComponent } from './grid-nav.component';

describe('GridNavComponent', () => {
  let component: GridNavComponent;
  let fixture: ComponentFixture<GridNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
