import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoeListService {
  shoeList = 'https://mocki.io/v1/3424a754-0561-4efc-b41f-213b1b49daea';

  constructor() { }
}
