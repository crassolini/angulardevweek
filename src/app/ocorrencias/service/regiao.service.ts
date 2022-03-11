import { Injectable } from '@angular/core';
import { Regiao } from '../model/regiao';

@Injectable({
  providedIn: 'root'
})
export class RegiaoService {

  constructor() { }

  listRegioes(): Regiao[]{
    return [
      { id: 1, regiao: 'Norte', total_exames: 1564 },
      { id: 2, regiao: 'Sul', total_exames: 31567 },
      { id: 3, regiao: 'Sudeste', total_exames: 31595 },
      { id: 4, regiao: 'Nordeste', total_exames: 1258 },
      { id: 5, regiao: 'Centro Oeste', total_exames: 7564 },
    ];
  }
}
