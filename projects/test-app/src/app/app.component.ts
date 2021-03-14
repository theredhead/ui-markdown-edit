import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'TestApp';

  source = `![Markdown, lightweight formatting for text](/assets/images/200px-Markdown-mark.png)
# Heading 1
## Heading 2
### Heading 3
#### Heading

> Solo lingua bono esta una lingua morte.

  - short
  - unorderd
  - list

  1. short
  2. orderd
  3. list

| a table | with three | columns |
|--|--|--|
| 1 | 2 | 3 |
| 4 | 5 | 6 |
| 7 | 8 | 9 |

now with some alignment:

| a table | with three | columns |
|:--|:--:|--:|
| 1 | 2 | 3 |
| 4 | 5 | 6 |
| 7 | 8 | 9 |

`;
}
