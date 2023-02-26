import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, MatTabsModule],
  template: `
    <h1>Weclome to {{name}}</h1>
    <mat-tab-group>
    <mat-tab label="First"> Content 1 </mat-tab>
    <mat-tab label="Second"> Content 2 </mat-tab>
  </mat-tab-group>
  `,
})
export class PackApp {
  name = 'PackApp';
}

bootstrapApplication(PackApp);
