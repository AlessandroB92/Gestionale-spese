import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <h2>Dashboard</h2>
    <p>Benvenuto nella tua gestione spese!</p>
  `,
  styles: [`
    h2 {
      margin-bottom: 1rem;
    }
  `]
})
export class Dashboard {}
