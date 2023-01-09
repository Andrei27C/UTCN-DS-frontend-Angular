import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ChatMessage, Empty} from "../../../grpc/generated/chat_pb";
import {User} from "../User";
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {ChatService} from "../../services/chat/chat.service";


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  currentUser: User | null;

  msgMap: Map<string, ChatMessage[]>;
  sender: string = "";
  newMessage: string = "";

  constructor(private authService: AuthenticationService,
              private chatService: ChatService) {
    this.currentUser = this.authService.getCurrentUser();
    this.sender = this.currentUser.userName;
    this.msgMap = new Map<string, ChatMessage[]>();
  }

  sendMessage(client: string): void {
    this.chatService.sendMessage(this.sender, client, this.newMessage)
      .subscribe((response: Empty) => {
        const message = new ChatMessage();
        message.setMessage(this.newMessage);
        message.setSender(this.sender);
        message.setReceiver("");

        if (!this.msgMap.has(client)) {
          this.msgMap.set(client, [message]);
        } else {
          this.msgMap.get(client)?.push(message);
        }
        this.newMessage = "";
      });
  }

  ngOnInit(): void {
    this.newMessage = "";
    let client = "";

    this.chatService.receiveMessage().subscribe(message => {
      const receiver = message.getReceiver();
      if (receiver == "") {
        client = message.getSender();
      } else {
        client = message.getReceiver();
      }

      if (!this.msgMap.has(client)) {
        this.msgMap.set(client, [message]);
      } else {
        this.msgMap.get(client)?.push(message);
      }
      console.log(this.msgMap);
    });
  }

}
