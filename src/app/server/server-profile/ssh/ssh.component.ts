import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { ServersService } from 'src/app/servers.service';
import { SSHKeypair } from 'src/types/ssh-keypair';

@Component({
  selector: 'app-ssh',
  templateUrl: './ssh.component.html',
  styleUrls: ['./ssh.component.scss']
})
export class SshComponent {
  constructor(
    private serversService: ServersService
  ){}

  keypairs: SSHKeypair[] = []


  ngOnInit() {
    this.serversService.fetchSSHKeysOnServer()
    .pipe(
      tap(keypair => console.log('Received keypair:', keypair))
    )
    .subscribe(keypair => {
      this.keypairs.push(keypair)
    })
  }
}
