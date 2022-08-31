import { Injectable } from '@angular/core';
import { Block, Confirm, Loading, Notify, Report } from 'notiflix';

@Injectable({
  providedIn: 'root'
})
export class NgxNotiflixService {

  constructor() { }
  success = (message: string): void => {
    Notify.success(message);
  }
}
