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
    this.client = new ChatServiceClient('http://localhost:8080');
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

  receiveMessage(): Observable<ChatMessage> {
    return new Observable(observer => {
      const call = this.client.receiveMessage(new Client());
      call.on('data', (message: ChatMessage) => {
        observer.next(message);
      });
      call.on('end', () => {
        observer.complete();
      });
    });
  }

}
