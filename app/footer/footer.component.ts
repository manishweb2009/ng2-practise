import { Component } from '@angular/core';

@Component({
  selector: 'ah-footer',
  template: `
            <hr>
            <footer class="container">
              <span class="pull-left"><a routerLink="/home">Project name</a></span>
              <span class="pull-right">All Rights Reserved. &copy; Project name</span>
            </footer>
            `
})

export class AhFooter { }