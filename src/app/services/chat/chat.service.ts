import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { ChatMessage, Empty, Client } from '../../../grpc/generated/chat_pb';
import { ChatServiceClient } from '../../../grpc/generated/chat_pb_service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private readonly client: ChatServiceClient;
  private readonly messageSubject: Subject<ChatMessage>;

  constructor() {
    this.client = new ChatServiceClient('http://localhost:5024');
    this.messageSubject = new Subject<ChatMessage>();
  }

  sendMessage(sender:string, receiver: string, message: string): Observable<Empty> {
    const msg = new ChatMessage();
    msg.setSender(sender);
    msg.setReceiver(receiver);
    msg.setMessage(message);
    console.log(msg);
    return new Observable(observer => {
      this.client.sendMessage(msg, (err, response) => {
        if (err) {
          console.error(err);
          observer.error(err);
        } else {
          response = new Empty();
          observer.next(response);
          observer.complete();
        }
      });
    });
  }

  receiveMessage(clientUsername: string): Observable<ChatMessage> {
    return new Observable(observer => {

      let grpcClient = new Client();
      grpcClient.setUsername(clientUsername);
      const call = this.client.receiveMessage(grpcClient);
      console.log(this.client.receiveMessage(grpcClient));
      call.on('data', (message) => {
        console.log(message.getMessage());
        observer.next(message);
      });
      call.on('end', () => {
        observer.complete();
      });
    });
  }

}
