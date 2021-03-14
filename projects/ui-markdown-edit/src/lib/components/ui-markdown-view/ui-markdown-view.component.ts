import { Component, Input, OnInit } from '@angular/core';
import { MarkdownPipe } from '../../markdown.pipe';

@Component({
  selector: 'ui-markdown-view',
  templateUrl: './ui-markdown-view.component.html',
  styleUrls: ['./ui-markdown-view.component.scss'],
})
export class UiMarkdownViewComponent implements OnInit {
  @Input() source = '';

  get transformed() {
    return this.markdownPipe.transform(this.source);
  }
  constructor(readonly markdownPipe: MarkdownPipe) {}

  ngOnInit(): void {}
}
