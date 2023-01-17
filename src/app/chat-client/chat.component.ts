import { Component, OnInit } from '@angular/core';
import {User} from "../User/User";
import {ChatMessage, Empty} from "../../grpc/generated/chat_pb";
import {AuthenticationService} from "../services/authentication/authentication.service";
import {ChatService} from "../services/chat/chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponentClient implements OnInit {
  currentUser: User | null;

  messages: ChatMessage[] = [];
  sender: string = "";
  newMessage: string = "";

  constructor(private authService: AuthenticationService,
              private chatService: ChatService) {
    this.messages = [];
    this.currentUser = this.authService.getCurrentUser();
    this.sender = this.currentUser.userName;
  }

  sendMessage(): void {
    this.chatService.sendMessage(this.sender, "admin", this.newMessage)
      .subscribe((response: Empty) => {
        const message = new ChatMessage();
        message.setMessage(this.newMessage);
        message.setSender(this.sender);
        message.setReceiver("admin");
        this.messages.push(message);
        this.newMessage = "";
      });
  }

  ngOnInit(): void {
    this.newMessage = "";
    this.chatService.receiveMessage(this.sender).subscribe(message => {
      if (message.getReceiver() === this.sender || message.getSender() === this.sender) {
        this.messages.push(message);
      }
    });
  }

}
