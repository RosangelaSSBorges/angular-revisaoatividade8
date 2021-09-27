import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface BitCoinRate{
  time:{
    updated:string
  };
  bpi:{
    USD:{
      symbol: string
      rate_float:number
    };
    EUR:{
      symbol: string
      rate_float:number
    }
  }
}

@Injectable()
export class BitcoinService {
  bitCoinRates: Array<BitCoinRate> = [];

  constructor(private http: HttpClient) { }

  updateBitCoinRates(){
    this.http.get<BitCoinRate>("https://api.coindesk.com/v1/bpi/currentprice.json").subscribe(data=>{
           this.bitCoinRates.push(data);
    });
  }

}