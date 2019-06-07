import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
@Component({
  selector: 'lib-my-extension',
  template: `
    <p>
      my-extension works! And changes too! test
    </p>
  `,
  styles: []
})



export class MyExtensionComponent implements OnInit {
    session_key ="";

    constructor(private http: HttpClient) { }


    /**
     * needs session_key!
     */
    getListOfSurveys(callback,user:string){
        this.callAPIMethod(
            callback,
            'list_surveys',
            [this.session_key,user]);
    }





    callAPIMethod(callback, method:string, params:string[]){
        let headers = new HttpHeaders()
            .set("Content-type",'application/json');
        this.http.post(
            'remotecontrol',
            {
                method: method,
                params: params,
                id:1
            },
            {headers}
        ).subscribe(
            body => {
                callback(body['result']);
            }
        );
    }


    getSessionKey(callback){
        this.callAPIMethod(callback,'get_session_key',['ETBoye','5cE4yyeSS0dhOX4Z'])
    }


  ngOnInit() {
        this.getSessionKey((session_key) => {
            this.session_key = session_key;
            console.log("Got session key: " + session_key);
            this.getListOfSurveys((list) => {console.log(list)},"ETBoye");
        });
  }

}
