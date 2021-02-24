import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MailFields } from '../model/mail-fields';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailServiceService {
  constructor(private httpClient: HttpClient) {}

  private API_SERVER = 'http://azdocumentninja.com/mailerApi/api/smtpEmail.php';

  sendEmail(mailFields: MailFields): Observable<MailFields> {
    return this.httpClient.post<MailFields>(
      `${this.API_SERVER}`,
      JSON.stringify(mailFields)
    );
  }
}
