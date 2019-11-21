import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorydetailComponent } from './storydetail.component';

describe('StorydetailComponent', () => {
  let component: StorydetailComponent;
  let fixture: ComponentFixture<StorydetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorydetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
