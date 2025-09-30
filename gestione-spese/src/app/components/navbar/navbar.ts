import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a> |
      <a routerLink="/spese" routerLinkActive="active">Spese</a>
    </nav>
  `,
  styles: [`
    nav {
      padding: 1rem;
      background-color: #007bff;
      color: white;
    }
    a {
      color: white;
      text-decoration: none;
      margin-right: 1rem;
    }
    a.active {
      font-weight: bold;
      text-decoration: underline;
    }
  `]
})
export class Navbar {}
