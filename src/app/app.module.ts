import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { CentralContentComponent } from './central-content/central-content.component';
import { BannerComponent } from './banner/banner.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { DivorceDialogComponent } from './dialogs/divorce-dialog/divorce-dialog.component';
import { BankruptcyDialogComponent } from './dialogs/bankruptcy-dialog/bankruptcy-dialog.component';
import { ChildSupportDialogComponent } from './dialogs/child-support-dialog/child-support-dialog.component';
import { DivorceCardComponent } from './cards/divorce-card/divorce-card.component';
import { BankruptcyCardComponent } from './cards/bankruptcy-card/bankruptcy-card.component';
import { ChildSupportCardComponent } from './cards/child-support-card/child-support-card.component';
import { GrandParentsCardComponent } from './cards/grand-parents-card/grand-parents-card.component';
import { GrandParentsDialogComponent } from './dialogs/grand-parents-dialog/grand-parents-dialog.component';
import { GuardianshipCardComponent } from './cards/guardianship-card/guardianship-card.component';
import { RealEstateCardComponent } from './cards/real-estate-card/real-estate-card.component';
import { WillsCardComponent } from './cards/wills-card/wills-card.component';
import { GuardianshipDialogComponent } from './dialogs/guardianship-dialog/guardianship-dialog.component';
import { RealEstateDialogComponent } from './dialogs/real-estate-dialog/real-estate-dialog.component';
import { WillsDialogComponent } from './dialogs/wills-dialog/wills-dialog.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    CentralContentComponent,
    BannerComponent,
    DivorceDialogComponent,
    BankruptcyDialogComponent,
    ChildSupportDialogComponent,
    DivorceCardComponent,
    BankruptcyCardComponent,
    ChildSupportCardComponent,
    GrandParentsCardComponent,
    GrandParentsDialogComponent,
    GuardianshipCardComponent,
    RealEstateCardComponent,
    WillsCardComponent,
    GuardianshipDialogComponent,
    RealEstateDialogComponent,
    WillsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
