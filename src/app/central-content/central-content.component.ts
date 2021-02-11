import { Directive, Input } from '@angular/core';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DivorceDialogComponent } from '../dialogs/divorce-dialog/divorce-dialog.component';
import { BankruptcyDialogComponent } from '../dialogs/bankruptcy-dialog/bankruptcy-dialog.component';
import { ChildSupportDialogComponent } from '../dialogs/child-support-dialog/child-support-dialog.component';
import { GrandParentsDialogComponent } from '../dialogs/grand-parents-dialog/grand-parents-dialog.component';
import { GuardianshipDialogComponent } from '../dialogs/guardianship-dialog/guardianship-dialog.component';
import { RealEstateDialogComponent } from '../dialogs/real-estate-dialog/real-estate-dialog.component';
import { WillsDialogComponent } from '../dialogs/wills-dialog/wills-dialog.component';

@Directive({ selector: 'workCard' })
export class WorkCard {
  @Input() id: string;
}

@Component({
  selector: 'app-central-content',
  templateUrl: './central-content.component.html',
  styleUrls: ['./central-content.component.scss']
})
export class CentralContentComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(cardWork: any) {
    switch (cardWork) {
      case 'divorceCard': {
        cardWork = DivorceDialogComponent;
        break;
      }
      case 'bankruptcyCard': {
        cardWork = BankruptcyDialogComponent;
        break;
      }
      case 'childCard': {
        cardWork = ChildSupportDialogComponent;
        break;
      }
      case 'grandParentsCard': {
        cardWork = GrandParentsDialogComponent;
        break;
      }
      case 'guardianshipCard': {
        cardWork = GuardianshipDialogComponent;
        break;
      }
      case 'realEstateCard': {
        cardWork = RealEstateDialogComponent;
        break;
      }
      case 'willsCard': {
        cardWork = WillsDialogComponent;
        break;
      }
    }
    this.dialog.open(cardWork);
  }
}
