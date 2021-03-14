import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMarkdownViewComponent } from './ui-markdown-view.component';

describe('UiMarkdownPreviewComponent', () => {
  let component: UiMarkdownViewComponent;
  let fixture: ComponentFixture<UiMarkdownViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiMarkdownViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiMarkdownViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
