import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
/// @ts-ignore
import * as marked from 'marked';

@Pipe({
  name: 'markdown',
})
export class MarkdownPipe implements PipeTransform {
  constructor(private readonly domSanitizer: DomSanitizer) {}

  transform(value: string, ...args: unknown[]): SafeHtml {
    let output: string = value;
    try {
      output = marked.parse(value);
    } catch (e) {
      output = String(e);
    }
    return this.domSanitizer.bypassSecurityTrustHtml(output);
  }
}
