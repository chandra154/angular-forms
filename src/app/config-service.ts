import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from 'protractor';



@Injectable()



export class ConfigService {
    config: { heroesUrl: any; textfile: any; };
    constructor(private http: HttpClient) { }

    configUrl ='assets/config.json';

    showConfig() {
        this.getConfig()
          .subscribe((data: Config) => this.config = {
              heroesUrl: data['heroesUrl'],
              textfile:  data['textfile']
          });
      }
    
    getConfig() {
        return this.http.get(this.configUrl);
    }

}
