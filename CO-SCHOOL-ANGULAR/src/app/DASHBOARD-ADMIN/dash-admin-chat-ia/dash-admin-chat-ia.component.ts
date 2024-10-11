import { Component } from '@angular/core';
import { ChatService } from 'src/app/Services/chat.service';

@Component({
  selector: 'app-dash-admin-chat-ia',
  templateUrl: './dash-admin-chat-ia.component.html',
  styleUrls: ['./dash-admin-chat-ia.component.css']
})
export class DashAdminChatIAComponent {
  question: string = '';  
  response: string = '';  
  check: boolean = false;  

  constructor(private chatService: ChatService) {}

  askQuestion() {
    this.check = true;  

    
    this.chatService.ask(this.question).subscribe(
      (response) => {
        this.response += `\n\n` + response;      
        this.check = false;
      }
    );

   
    this.question = '';
  }
}
