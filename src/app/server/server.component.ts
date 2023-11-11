import {Component} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  title: string = 'hii from server-component'
  serverId: number = 10;
  serverStatus: string = 'active'
  convertServerStatus = () => {
    this.serverStatus = this.serverStatus === 'offline' ? 'active' : 'offline'
  }
}
