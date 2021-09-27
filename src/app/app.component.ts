import { Component, VERSION } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BitcoinService } from './bitcoin.service';


interface Repo{
  id: number;
  full_name: string

}



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  gitHubRepos: Array<Repo> = [];
 

  name = 'Angular ' + VERSION.major;

  constructor(private http: HttpClient, public bitCoinServ: BitcoinService){}


  ngOnInit(){
    this.updateGitHubRepos();
  

  }

  updateGitHubRepos(){
    this.http.get<Array<Repo>>('https://api.github.com/users/RosangelaSSBorges/repos').subscribe(data=> {this.gitHubRepos = data;

  }

    );
  }
  updateBitCoinRates(){
    this.bitCoinServ.updateBitCoinRates();
  }

}

