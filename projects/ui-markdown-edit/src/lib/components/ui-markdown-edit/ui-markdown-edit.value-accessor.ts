import { Directive, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, DefaultValueAccessor } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UiMarkdownEditComponent } from './ui-markdown-edit.component';

@Directive({
  host: { '(blur)': 'touchHandler()' },
})
export class UiMarkdownEditValueAccessor
  implements ControlValueAccessor, OnInit, OnDestroy {
  changeHandler = (_: string) => {};
  touchHandler = () => {};

  private changeSubscription?: Subscription;

  constructor(private editor: UiMarkdownEditComponent) {}

  ngOnInit(): void {
    console.log('subscribing to change...');
    this.changeSubscription = this.editor.change.subscribe((value) => {
      console.log('change...');
      this.changeHandler(value);
    });
  }
  ngOnDestroy(): void {
    this.changeSubscription?.unsubscribe();
  }

  writeValue(value: string): void {
    this.editor.value = value;
  }
  registerOnChange(callback: (_: any) => void): void {
    this.changeHandler = callback;
  }
  registerOnTouched(callback: () => void): void {
    this.touchHandler = callback;
  }
  setDisabledState(isDisabled: boolean): void {
    this.editor.disabled = isDisabled;
  }
}
