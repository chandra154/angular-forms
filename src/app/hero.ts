import { HttpClient, HttpHeaders } from '@angular/common/http';


export class Hero {

    // constructor(
    //     private http: HttpClient
    // ) { }

    // id : number;
    // name : string;

    constructor(
        public id: number,
        public name: string,
        public power: string,
        public alterEgo? : string
    ) { }
}
