import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-username-check',
    templateUrl: './username-check.component.html',
    styleUrls: ['./username-check.css']
})
export class UsernameComponent implements OnInit{
    allowNewUser:boolean = false;
    usernameCreationStatus = "No username was created!";
    username: string = 'Testusername'; 


constructor(){
    setTimeout(() => {
        this.allowNewUser = true;
    }, 2000);
}
ngOnInit(): void{
}

onCreationStatus(){
    this.usernameCreationStatus = "Username was created! User name is " + this.username;
}
onUpdateUserName(event:any){
    this.username = (<HTMLInputElement>event.target).value;
}
}

