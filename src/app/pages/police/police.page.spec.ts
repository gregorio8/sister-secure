import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PolicePage } from './police.page';

describe('PolicePage', () => {
  let component: PolicePage;
  let fixture: ComponentFixture<PolicePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PolicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
