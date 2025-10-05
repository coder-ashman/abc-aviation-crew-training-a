import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'training-a-root',
  template: `
    <div style="padding:16px">
      <h2>Training A (Angular)</h2>
      <p>Roster and training assignment will appear here.</p>
      
      <!-- Demo of shared domain rules -->
      <div style="margin-top: 20px; padding: 16px; border: 1px solid #ccc; border-radius: 8px;">
        <h3>Pilot Currency Check (Shared Domain Rules)</h3>
        <p>Pilot: {{ pilotName }}</p>
        <p>Status: <span [class]="statusClass">{{ currencyStatus.status }}</span></p>
        <p>Days until expiry: {{ currencyStatus.daysUntilExpiry }}</p>
        
        <h4>Training Assignment Validation</h4>
        <div *ngIf="validationErrors.length > 0" style="color: red;">
          <ul>
            <li *ngFor="let error of validationErrors">{{ error }}</li>
          </ul>
        </div>
        <div *ngIf="validationErrors.length === 0" style="color: green;">
          ✅ Training assignment is valid
        </div>
      </div>
    </div>
  `,
  styles: [`
    .status-chip--success { background-color: #4caf50; color: white; padding: 4px 8px; border-radius: 4px; }
    .status-chip--warning { background-color: #ff9800; color: white; padding: 4px 8px; border-radius: 4px; }
    .status-chip--error { background-color: #f44336; color: white; padding: 4px 8px; border-radius: 4px; }
  `]
})
export class AppComponent implements OnInit {
  pilotName = 'Captain Jane Doe';
  currencyStatus: any = {};
  statusClass = '';
  validationErrors: string[] = [];

  async ngOnInit() {
    // Demo data without shared libraries for now
    this.currencyStatus = { status: 'current', daysUntilExpiry: 87 };
    this.statusClass = 'status-chip--success';
    this.validationErrors = [];
  }
}