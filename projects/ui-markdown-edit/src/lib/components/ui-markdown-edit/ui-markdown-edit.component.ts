import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ui-markdown-edit',
  templateUrl: './ui-markdown-edit.component.html',
  styleUrls: ['./ui-markdown-edit.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: UiMarkdownEditComponent,
      multi: true,
    },
  ],
})
export class UiMarkdownEditComponent {
  @ViewChild('editor') editor!: ElementRef<HTMLTextAreaElement>;
  @Input() disabled = false;
  @Input() value = '';
  @Output() change = new EventEmitter<string>();

  constructor() {}

  onKeyPress(event: KeyboardEvent) {
    if (event.key == 'Tab') {
      event.preventDefault();
    }
    this.changed();
  }

  changed() {
    this.value = this.editor.nativeElement.value;
    this.change.emit(this.value);
    this.changeHandler(this.value);
  }

  //#region ControlValueAccessor
  private changeHandler = (_: string) => {};
  private touchHandler = () => {};

  touched() {
    this.touchHandler();
  }

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(callback: (_: any) => void): void {
    this.changeHandler = callback;
  }
  registerOnTouched(callback: () => void): void {
    this.touchHandler = callback;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  //#endregion ControlValueAccessor
}
