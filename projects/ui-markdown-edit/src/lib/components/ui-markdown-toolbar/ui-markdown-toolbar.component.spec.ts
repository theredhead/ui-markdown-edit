import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMarkdownToolbarComponent } from './ui-markdown-toolbar.component';

describe('UiMarkdownToolbarComponent', () => {
  let component: UiMarkdownToolbarComponent;
  let fixture: ComponentFixture<UiMarkdownToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiMarkdownToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiMarkdownToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
