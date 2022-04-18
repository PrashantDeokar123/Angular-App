import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
   allowNewServer=false;
   serverCreationStatus='no server was created!';
  serverName='Testserver ';
  serverCreated = false;
  servers =['testserver,testserver 2'];
   constructor() { 
    
    setTimeout(() => {
      this.allowNewServer=true;
    }, 2000);
  }

  ngOnInit(): void {
  }
  onButtonClick(){
  alert("THIS IS THE ALERT BOX ");
}
onCreateServer(){
  this.serverCreated = true;
  this.servers.push(this.serverName);
  this.serverCreationStatus='server was created!';
}
onUpdateServerName(event:any){
this.serverName=(<HTMLInputElement>event.target).value;
}
}
