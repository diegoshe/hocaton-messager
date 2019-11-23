import React, {Component} from 'react';
import './App.css';
import MessageLoading from "./components/MessageLoading";
import MessageOpponent from "./components/MessageOpponent";
import MessagePersonal from "./components/MessagePersonal";
import MessageStatus from "./components/MessageStatus";


class App extends Component {
  state = {
    id: "",

  };


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
              <MessageLoading/>
              <MessageOpponent/>
              <MessagePersonal/>
              <MessageStatus/>
            </div>
          </div>
          <form className="message-box" action="/404/" method="POST">
            <input type="text" className="message-input" placeholder="Ваше сообщение …"/>
            <button disabled type="submit" className="message-submit">Отправить</button>
          </form>

        </div>
        <div className="bg"></div>
      </div>
    );
  }
}

export default App;
