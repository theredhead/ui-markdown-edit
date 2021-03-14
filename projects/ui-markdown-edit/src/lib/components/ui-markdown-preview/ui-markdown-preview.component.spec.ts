import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMarkdownPreviewComponent } from './ui-markdown-preview.component';

describe('UiMarkdownPreviewComponent', () => {
  let component: UiMarkdownPreviewComponent;
  let fixture: ComponentFixture<UiMarkdownPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiMarkdownPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiMarkdownPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
