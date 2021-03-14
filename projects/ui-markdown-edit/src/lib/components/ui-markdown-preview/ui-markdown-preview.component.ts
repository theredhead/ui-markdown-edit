import { Component, Input, OnInit } from '@angular/core';
import { MarkdownPipe } from '../../markdown.pipe';

@Component({
  selector: 'ui-markdown-preview',
  templateUrl: './ui-markdown-preview.component.html',
  styleUrls: ['./ui-markdown-preview.component.scss'],
})
export class UiMarkdownPreviewComponent implements OnInit {
  @Input() source = '';

  get transformed() {
    return this.markdownPipe.transform(this.source);
  }
  constructor(readonly markdownPipe: MarkdownPipe) {}

  ngOnInit(): void {}
}
