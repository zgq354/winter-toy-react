import { createElement, Component, render } from "./toy-react";

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>My Component</h1>
        {this.children}
      </div>
    );
  }
}

render(
  <MyComponent id="a" class="c">
    <div>abc</div>
    <div>abc</div>
    <div>abc</div>
    <div>abc</div>
  </MyComponent>,
  document.body
);
