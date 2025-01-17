import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { ApiResponseModel } from '../../model/interface/role';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{

  clientObj : Client = new Client();
  clientList : Client[] =[]; 

  clientService = inject(ClientService)

  ngOnInit(): void {
    this.loadClient()
  }

  loadClient(){
   this.clientService.getAllClients().subscribe((res:ApiResponseModel)=>{
     this.clientList = res.data;
   })
  }
  onSaveClient(){
   this.clientService.addUpdate(this.clientObj).subscribe((res:ApiResponseModel)=>{
     if(res.result){
      alert("Client Added")
      this.loadClient();
      this.clientObj = new Client();
     } else {
      alert(res.message)
     }
   })
  }
  onEdit(data:Client ){
    this.clientObj = data;
  }

  onDelete(id:number){
    if(confirm("Are you sure you want to delete this client?")){
     this.clientService.deleteClientById(id).subscribe((res:ApiResponseModel)=>{
       if(res.result){
        alert("Client Deleted")
        this.loadClient();
       } else {
        alert(res.message)
       }
     })
    }
  }
}
