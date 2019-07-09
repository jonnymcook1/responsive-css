import React, {Component} from 'react';
import './App.css';
import './Reset.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      menuStatus: 'drop-down-menu',
      buttonStatus: 'drop-down-buttons'
    }
  }

  handleClick = () => {
    if(this.state.menuStatus === 'drop-down-menu-open') {
      this.setState({menuStatus: 'drop-down-menu-closed'});
    } else {
      this.setState({menuStatus: 'drop-down-menu-open'});
    }
  } 

  render() {
    return (
      <body className="App">
        <link href="https://fonts.googleapis.com/css?family=Kaushan+Script&display=swap" rel="stylesheet"></link>
          <nav>
            <ul>
              <div>
                <li className='logo'>Start Bootstrap</li>
              </div>
              <li className='menu-text'>SERVICES</li>
              <li className='menu-text'>PORTFOLIO</li>
              <li className='menu-text'>ABOUT</li>
              <li className='menu-text'>TEAM</li>
              <li className='menu-text'>CONTACT</li>
              <li>
                <img onClick={this.handleClick}
                src='https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png' alt='menu-bar'/>
              </li>
              <div className={this.state.menuStatus}>
              </div>
              
            </ul>
          </nav>
          <article>
            <h2>Welcome To Our Studio!</h2>
          </article>
      </body>
    );
  }
}

export default App;
