import React, {Component} from 'react';
import './App.css';
import * as axios from "axios";
import Dialogs from "./components/Dialogs";
import UsersSearch from "./components/UsersSearch";
import Chat from "./components/Chat";


class App extends Component {
  state = {
    switchView: "dialogs",
    users: []
  };

  getUsers = (props) => {
    const instance = axios.create({
      withCredentials: true,
      //baseURL: 'http://localhost:54463/api/1.0/',
      baseURL: 'https://social-network.samuraijs.com/api/1.0/'
    });

    instance.get(`users?page=${1}&count=${10}&term=${this.props.data.message}`)
      .then(response => {
        this.setState({users: response.data.items});
        console.log(response.data.items)
      });
  };

  getChats = () => {
    this.setState({switchView: "dialogs"});
    this.props.getChats();
  };

  setMessage = (e) => {
    this.props.setData({...this.props.data, message: e.currentTarget.value});
  };

  sendMessage = () => {
    this.props.sendMessage();
  };

  initChats = (id) => {
    this.props.setData({...this.props.data, interlocutorId: id});
    setTimeout(() => this.props.initChat(), 1000);
    this.setState({...this.state, switchView: "chat"});
    this.props.getMessages();
  };

  getMessages = (id) => {
    this.defaultView = false;
    this.props.setData({...this.props.data, interlocutorId: id});
    // this.setState({...this.state, switchView: "chat"});
    setTimeout(() => this.props.getMessages(), 1000);
  };
//   connectAPI = () => {
//     const connection = new WebSocket('5ac078f7-4935-4223-bad6-63f58b80cd23');
//     console.log(connection);
// }
  defaultView = true;
  render() {
    const changeButton = this.state.switchView === "messages" ? "отправить" : "найти";
    const changeFunctionButton = this.state.switchView === "messages" ?
      this.sendMessage : this.getUsers;
    return (
      <div>
        <div className="chat">
          <div className="chat-title">
            <h1>Георгий Бородин</h1>
            <div className="message-box">
            <button className="message-submit" onClick={this.getChats}>чаты</button>
            </div>
            <h2 className="chat-status" data-online="в сети" data-offline="не в сети">не в сети</h2>
            <figure className="avatar">
              <img src="#"/>
            </figure>
          </div>
          <div className="messages">
            <div className="messages-content">
              {this.state.switchView === "chat" &&
              this.props.socketState &&
              this.props.socketState.messages &&
              this.props.socketState.messages.messages.map((c, i) =>
                <Chat key={i} c={c}
                      users={this.state.users}
                      setData={this.props.setData}
                      data={this.props.data}/>)}

              {this.state.switchView === "users-search" && this.state.users
                .map((c, i) => <UsersSearch key={i} c={c} initChats={this.initChats} users={this.state.users}
                                            setData={this.props.setData} data={this.props.data}/>)}

              {!this.defaultView &&
              this.state.switchView === "dialogs" &&
              this.props.socketState &&
              this.props.socketState.chats &&
              this.props.socketState.chats
                .map((c, i) => <Dialogs key={i} c={c} getMessages={this.getMessages} users={this.state.users}
                                        setData={this.props.setData} data={this.props.data}/>)}

              {/*{*/}
              {/*this.defaultView &&*/}
              {/*this.props.socketState &&*/}
              {/*this.props.socketState.chats*/}
              {/*  .map((c, i) => <Dialogs key={i} c={c} getMessages={this.getMessages} users={this.state.users}*/}
              {/*                          setData={this.props.setData} data={this.props.data}/>)}*/}
            </div>
          </div>
          <div className="message-box">
            <input type="text" className="message-input" placeholder="Ваше сообщение …" onChange={(e) => this.setMessage(e)}/>
            <button className="message-submit" onClick={changeFunctionButton}>{changeButton}</button>
          </div>
          {/*<button className="message" onClick={this.props.getMessages}>get messages</button>*/}
        </div>
        <div className="bg"></div>
      </div>
    );
  }
}

export default App;
