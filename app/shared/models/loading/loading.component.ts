import { Component } from '@angular/core';

@Component({
  selector: 'ah-loading',
  template: `
            <div class="loading">
                <div class="rectangle-bounce">
                    <span class="rect1"></span>
                    <span class="rect2"></span>
                    <span class="rect3"></span>
                    <span class="rect4"></span>
                    <span class="rect5"></span>
                </div>
            </div>
            `,
  styleUrls: ['app/shared/models/loading/loading.component.css']
})

export class ahLoading { }