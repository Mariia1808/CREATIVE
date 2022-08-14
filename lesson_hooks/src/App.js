import './App.css';
import React from 'react';

class CustomTextInput extends React.Component {
    constructor(props) {
      super(props);
      this.textInput = React.createRef();
      this.focusTextInput = this.focusTextInput.bind(this);
    }
  
    focusTextInput() {
      this.textInput.current.focus();
      this.textInput.current.type === "text"? this.textInput.current.type = "password": this.textInput.current.type = "text"
    }
  
    render() {
      return (
        <div>
            <input
            type="button"
            value="Фокус-"
            onClick={this.focusTextInput}
          />
          <input
            type="password"
            value="покус"
            ref={this.textInput} />
  
          
        </div>
      );
    }
  }

class Time extends React.Component {
    state = {
      count: 0
    };
  
    componentDidMount() {
      this.timeout = setTimeout(() => {
        this.setState({ count: this.state.count + 10 });
      }, 3000);
    }
  
    handleIncrement = () => {
      this.setState({ count: this.state.count + 1 });
    };
  
    componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  
    render() {
      return (
        <div className="App">
          <h1>{this.state.count}</h1>
          <button onClick={this.handleIncrement}>+1</button>
        </div>
      );
    }
}

function App() {
  return (
    <div className="App div">
        <CustomTextInput/>
        <Time/>
    </div>
  );
}

export default App;
