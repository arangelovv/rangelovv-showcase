import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEmploymentHistoryComponent } from './user-employment-history.component';

describe('UserEmploymentHistoryComponent', () => {
  let component: UserEmploymentHistoryComponent;
  let fixture: ComponentFixture<UserEmploymentHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserEmploymentHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEmploymentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
