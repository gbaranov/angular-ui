import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategotyListComponent } from './categoty-list.component';

describe('CategotyListComponent', () => {
  let component: CategotyListComponent;
  let fixture: ComponentFixture<CategotyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategotyListComponent]
    });
    fixture = TestBed.createComponent(CategotyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
