import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionGalerieComponent } from './selection-galerie.component';

describe('SelectionGalerieComponent', () => {
  let component: SelectionGalerieComponent;
  let fixture: ComponentFixture<SelectionGalerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionGalerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionGalerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
