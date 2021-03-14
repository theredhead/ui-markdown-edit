import { Component, Input, OnInit } from '@angular/core';
import { UiMarkdownEditComponent } from '../ui-markdown-edit/ui-markdown-edit.component';

@Component({
  selector: 'ui-markdown-toolbar',
  templateUrl: './ui-markdown-toolbar.component.html',
  styleUrls: ['./ui-markdown-toolbar.component.scss'],
})
export class UiMarkdownToolbarComponent implements OnInit {
  @Input() editor!: HTMLTextAreaElement;

  bold() {
    const selection = this.editor.ownerDocument.getSelection();
    console.log({ selection });
  }

  constructor() {}

  ngOnInit(): void {}
}
