import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedUserDetailsComponent } from './booked-user-details.component';

describe('BookedUserDetailsComponent', () => {
  let component: BookedUserDetailsComponent;
  let fixture: ComponentFixture<BookedUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedUserDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookedUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
