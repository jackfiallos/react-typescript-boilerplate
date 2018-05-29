import * as React from 'react';
// import logo from './logo.svg';

interface IProps {
  compiler?: string,
  framework?: string,
  bundler?: string
}

export class App extends React.Component<IProps, {}> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/app/components/App.tsx</code> and save to reload.
        </p>
        <p>
          This is a {this.props.framework} application<br />
          using {this.props.compiler}<br />
          {this.props.bundler}
        </p>
      </div>
    );
  }
}
