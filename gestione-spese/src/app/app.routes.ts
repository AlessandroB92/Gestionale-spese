import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Spese } from './components/spese/spese';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'spese', component: Spese }
];
