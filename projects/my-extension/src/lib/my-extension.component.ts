import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-extension',
  template: `
    <p>
      my-extension works! And changes too!
    </p>
  `,
  styles: []
})
export class MyExtensionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
