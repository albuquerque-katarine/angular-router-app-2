import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAbout } from './content-about';

describe('ContentAbout', () => {
  let component: ContentAbout;
  let fixture: ComponentFixture<ContentAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentAbout],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentAbout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
