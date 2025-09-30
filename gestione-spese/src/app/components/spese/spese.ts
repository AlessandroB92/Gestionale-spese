import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Spesa {
  descrizione: string;
  importo: number;
  categoria: string;
  data: string;
}

@Component({
  selector: 'app-spese',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './spese.html',
  styleUrls: ['./spese.scss']
})
export class Spese {
  spese: Spesa[] = [];
  nuovaSpesa: Spesa = { descrizione: '', importo: 0, categoria: '', data: '' };

  aggiungiSpesa() {
    this.spese.push({ ...this.nuovaSpesa });
    this.nuovaSpesa = { descrizione: '', importo: 0, categoria: '', data: '' };
  }

  eliminaSpesa(index: number) {
    this.spese.splice(index, 1);
  }
}
