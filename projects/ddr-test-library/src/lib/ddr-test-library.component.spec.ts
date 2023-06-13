import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdrTestLibraryComponent } from './ddr-test-library.component';

describe('DdrTestLibraryComponent', () => {
  let component: DdrTestLibraryComponent;
  let fixture: ComponentFixture<DdrTestLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DdrTestLibraryComponent]
    });
    fixture = TestBed.createComponent(DdrTestLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
