import React from "react";
import ReactDOM from "react-dom/client";

// Created React Element using React
const heading = React.createElement("h1", {}, "Hello World! from React");

// Create React Element using JSX
const jsxHeading = <h1 id="heading">Hello React using JSX!</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am h1</h1>
 *          <h2>I am h2</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I am h1</h1>
 *          <h2>I am h2</h2>
 *      </div>
 * </div>
 *
 * ReactElement(object) => after rendering it becomes => HTMLelement(Browser understands)
 */

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am h1 tag of child1"),
//     React.createElement("h2", {}, "I am h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I am h1 tag"),
//     React.createElement("h2", {}, "I am h2 tag"),
//   ]),
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// React Components
// React Functional Component
const HeadingComponent = () => {
  return <h1 className="heading">React Functional Component</h1>;
};

const Title = () => (
  <div>
    <h1 className="head" tabIndex="1">
      React Learning
    </h1>
  </div>
);

const elem = (
  <h4>elem</h4>
);

const element = (
  <div>
    <Title/>
    <Title></Title>
    {Title()}
    {elem}
    <h3>element</h3>
  </div>
);

// Component Composition - using component within component
const HeadingComponent2 = () => (
  <div id="container">
    <Title />
    {100 + 200}
    {element}
    <h1 className="heading">React Functional Component</h1>
  </div>
);

root.render(<HeadingComponent2 />);
