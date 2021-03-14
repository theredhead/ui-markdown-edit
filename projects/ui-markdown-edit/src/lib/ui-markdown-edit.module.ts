import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiMarkdownEditComponent } from './components/ui-markdown-edit/ui-markdown-edit.component';
import { UiMarkdownViewComponent } from './components/ui-markdown-view/ui-markdown-view.component';
import { UiMarkdownToolbarComponent } from './components/ui-markdown-toolbar/ui-markdown-toolbar.component';
import { MarkdownPipe } from './markdown.pipe';

const components = [
  UiMarkdownViewComponent,
  UiMarkdownEditComponent,
  UiMarkdownToolbarComponent,
];

const pipes = [MarkdownPipe];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [FormsModule],
  exports: [...components, ...pipes],
  providers: [{ provide: MarkdownPipe }],
})
export class UiMarkdownEditModule {}
