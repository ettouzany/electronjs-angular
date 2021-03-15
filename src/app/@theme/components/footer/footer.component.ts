import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
    Par <b><a href="" target="_blank">G.U @ 2020</a></b>
    </span>
    <div class="socials">
    <b><a href="" target="_blank">G.U</a></b>
    </div>
  `,
})
export class FooterComponent {
}

