import React, {Component} from 'react';
import './App.css';
import MessageLoading from "./components/MessageLoading";
import MessageOpponent from "./components/MessageOpponent";
import MessagePersonal from "./components/MessagePersonal";
import MessageStatus from "./components/MessageStatus";
import openSocket from 'socket.io-client';
import * as axios from "axios";
import AppHooks from "./components/AppHooks";
import Chat from "./components/Chat";
import Users from "./components/Users";


class App extends Component {
  state = {
    switchView: "users",
    users: [],
    MessagesResponse: {
      page: 5,
      totalCount: 5,
      pageSize: 5,
      messages: {
        chatId: "43",
        authorId: "54",
        isRead: true,
        date: {},
        status: ""                  // "not-deleted" | "deleted-for-sender" | "deleted-for-recipient" | "deleted-for-all";
      }
    },
    IPhoto: {
      small: "",
      large: ""
    },
    IInterlocutor: {
      id: "",
      name: "Tolik",
      photo: {
        small: "",
        large: ""
      },
      visitDate: "Date"
    },
    ILastMessage: {
      body: "",
      authorId: "",
      date: "Date",
      isRead: true
    },
    IChat: {
      _id: "",
      userId: "",
      interlocutor: {
        id: "",
        name: "Tolik",
        photo: {
          small: "",
          large: ""
        },
        visitDate: "Date"
      },
      newMessagesCount: 22,
      lastMessage: {
        body: "",
        authorId: "",
        date: "Date",
        isRead: true
      },
      isHidden: true
    },

    //type MessageStatusType = "not-deleted" | "deleted-for-sender" | "deleted-for-recipient" | "deleted-for-all";

    IMessage: {
      chatId: "",
      authorId: "",
      isRead: "",
      date: "Date",
      status: ""              // "not-deleted" | "deleted-for-sender" | "deleted-for-recipient" | "deleted-for-all";
    }
  }

  // export class Chat implements IChat {
  //   _id: string
  //
  //   constructor(public userId: string,
  //   public interlocutor: IInterlocutor,
  //   public newMessagesCount: number,
  //   public lastMessage: LastMessage,
  //   public isHidden: boolean) {
  //   this._id = new Date().getTime().toString();
  // }
//   }
//
// //   export class Interlocutor implements IInterlocutor {
// //   constructor(public id: string,
// //   public name: string,
// //   public photo: IPhoto,
// //   public visitDate: Date) {
// // }
// }

// export class LastMessage implements ILastMessage {
//   constructor(public body: string,
//   public authorId: string,
//   public date: Date,
//   public isRead: boolean) {
// }
// }
//
// export class Photo implements IPhoto {
//   constructor(public large: string,
//   public small: string) {
// }
// }
//
//
// export class Message implements IMessage {
//   _id: string
//
//   constructor(public chatId: string,
//   public authorId: string,
//   public isRead: boolean,
//   public date: Date,
//   public status: MessageStatusType) {
//   this._id = "fake" + new Date().getTime();
// }
// }
  // componentDidMount() {
  //   const token = "73fae02b-f2f6-4ec5-8d42-ee3df6a8c5a8";
  //   const socket = openSocket('http://messenger-hackathon.herokuapp.com');
  //   socket.on('send-message-success', (data) => {
  //     console.log(data)

  //   })
  //   socket.emit('send-message', {token})
  //
  //   // const instance = axios.create({
  //   //   withCredentials: true,
  //   //   baseURL: 'https://social-network.samuraijs.com/api/1.0/'
  //   // });
  //   //     instance.post(`auth/get-token`).then(x => console.log(x));
  // }

// }
  componentDidMount(props) {
    const instance = axios.create({
      withCredentials: true,
      //baseURL: 'http://localhost:54463/api/1.0/',
      baseURL: 'https://social-network.samuraijs.com/api/1.0/'
    });


    instance.get(`users?page=${1}&count=${10}&term=${""}`)
      .then(response => {
        this.setState({users: response.data.items})
        console.log(response.data.items)
      });


  }

  setMessage = (e) => {
    this.props.setData({...this.props.data, message: e.currentTarget.value});
  };

  sendMessage = () => {
    this.props.sendMessage();
  };

  initChats = (id) => {
    this.props.setData({...this.props.data, interlocutorId: id});
    this.props.initChat();
    this.setState({...this.state, switchView: "messages"});
    this.props.getMessages();
  };
//   connectAPI = () => {
//     const connection = new WebSocket('5ac078f7-4935-4223-bad6-63f58b80cd23');
//     console.log(connection);
// }

  render() {
    return (
      <div>
        <div className="chat">
          <div className="chat-title">
            <h1>Георгий Бородин</h1>
            <h2 className="chat-status" data-online="в сети" data-offline="не в сети">не в сети</h2>
            <figure className="avatar">
              <img src="#"/>
            </figure>
          </div>
          <div className="messages">
            <div className="messages-templates">
              <div className="message loading">
                <figure className="avatar"><img src="#"/></figure>
                <span></span>
              </div>
              <div className="message">
                <figure className="avatar"><img src="#"/></figure>
                <span className="message-text">Привет!</span>
                <div className="timestamp">12:56</div>
              </div>
              <div className="message message-personal">
                <span className="message-text">Привет</span>
                <div className="timestamp">12:56</div>
              </div>
              <div className="message message-status">
                <span className="message-text">Пользователь не в сети</span>
              </div>
            </div>
            <div className="messages-content">
              {this.state.switchView === "messages" && this.props.socketState && this.props.socketState.messages &&
              this.props.socketState.messages.messages.map((c, i) =>
                <Chat key={i} c={c} getMessages={this.props.getMessages}
                      users={this.state.users}
                      setData={this.props.setData}
                      data={this.props.data}/>)}
              {this.state.switchView === "chats" && this.props.socketState && this.props.socketState.chats && this.props.socketState.chats
                .map((c, i) => <Chat key={i} c={c} getMessages={this.props.getMessages} users={this.state.users}
                                     setData={this.props.setData} data={this.props.data}/>)}
              {this.state.switchView === "users" && this.state.users
                .map((c, i) => <Users key={i} c={c} initChats={this.initChats} users={this.state.users}
                                      setData={this.props.setData} data={this.props.data}/>)}
              {/*<MessageLoading/>*/}
              {/*<MessageOpponent/>*/}
              {/*<MessagePersonal/>*/}
              {/*<MessageStatus/>*/}
            </div>
          </div>
          <div className="message-box">
            <input type="text" className="message-input" placeholder="Ваше сообщение …" onChange={(e) => this.setMessage(e)}/>
            <button className="message-submit" onClick={this.sendMessage}>Отправить</button>
          </div>
          <button className="message" onClick={this.props.getChats}>get chats</button>
          <button className="message" onClick={this.props.getMessages}>get messages</button>
        </div>
        <div className="bg"></div>
      </div>
    );
  }
}

export default App;

// 0: {name: "Gachimuchi", id: 5253, uniqueUrlName: null, photos: {…}, status: null, …}
// 1: {name: "Arm", id: 5252, uniqueUrlName: null, photos: {…}, status: null, …}
// 2: {name: "sieugene01", id: 5251, uniqueUrlName: null, photos: {…}, status: null, …}
// 3: {name: "Antonij", id: 5250, uniqueUrlName: null, photos: {…}, status: null, …}
// 4: {name: "AlexShinkevich", id: 5249, uniqueUrlName: null, photos: {…}, status: null, …}
// 5: {name: "leshanative", id: 5248, uniqueUrlName: null, photos: {…}, status: null, …}
// 6: {name: "Alina", id: 5247, uniqueUrlName: null, photos: {…}, status: null, …}
// 7: {name: "bogelyk", id: 5246, uniqueUrlName: null, photos: {…}, status: null, …}
// 8: {name: "rayfun", id: 5245, uniqueUrlName: null, photos: {…}, status: null, …}
// 9: {name: "enlia", id: 5244, uniqueUrlName: null, photos: {…}, status: null, …}
