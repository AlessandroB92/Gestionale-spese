import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class Dashboard {
  // Esempio: categorie di spesa
  public categories = ['Cibo', 'Trasporti', 'Bollette', 'Altro'];
  public spesePerCategoria = [250, 120, 300, 80];

  public pieChartData = {
    labels: this.categories,
    datasets: [
      { data: this.spesePerCategoria }
    ]
  };

  public pieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      }
    }
  };
}
