import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMarkdownEditComponent } from './ui-markdown-edit.component';

describe('UiMarkdownEditComponent', () => {
  let component: UiMarkdownEditComponent;
  let fixture: ComponentFixture<UiMarkdownEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiMarkdownEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiMarkdownEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
