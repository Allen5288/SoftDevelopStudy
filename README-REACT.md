<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD029 -->

# 1. JS Quick Refesh

## 1.1 Adding  JS to Project

With type="Module" syntax, you can import and export between different js file.

```html
<script src="asset/scripts/app.js" type="module"></script>
```

export content from one js to another

```javascript
export let apiKey = 'gnbsdauigha';
import {apiKey} from '../util.js'

export default "gdhsaujfidashfi" // just can export one default
import apiKey from '../util.js' // use default without {}
import * as util from "./util.js"
console.log(`${util.apiKey}, ${util.default}`);
```

## 1.2 Values, Variable, operator

String, Number, Boolean, Null & undefined

var, let, const

console.log

## 1.3 Func and Array Func

Basic Func:

```javascript
fucntion greet(param1, param2) {
    comsoloe.log(param1)
}
greet("hello", "life");
```

Array Function:

```javascript
export default (param1, param2) => { // multiple param should be with ()
    return param1 + param2;
}

param1 => { ... } // exactly just one param, or use (param1)

() => { ... } // if no params, only in this way

number => number * 3 // only param1 and no logic, directly return;

number => ({age: number}); // only way directly return an object
```

Use Function as Values

```javascript
function handleTimeout() { ... };

const handleTimeout2 = () => { ... };

setTimout(handleTimeout, 2000); // it acts as value, to excute after 2000ms;
setTimout(handleTimeout2, 2000); // it acts as value, to excute 
setTimeout(() = > {
    ...;
}, 4000);

fucntion greeter(greetFn) {
    greetFn(); // print ...
}
greeter(() => console.log(...));
```

Defining function inside of Function

```javascript
fucntion init() {
    fucntion greet() {
        consoloe.log("Hi");
    }
    greet();
}
init();
```

## 1.4 Object and Class

Objects:

```javascript
const user = {
    name: 'Allen',
    age: 34,
    greet() { 
        consolot.log(this.age);
        return 'Hello'; 
    }
}
console.log(user.name);
user.greet();
```

Class:

```javascript
class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log('hi');
    }
}

const user1 = new User("Allen", 30);
console.log(user1)
user1.gteet();
```

## 1.5 Array

```javascript
const hobbies = ["sports", "reading"];
consoloe.log(hobbies[0]);

hobbies.push("working");

const index = hobbies.findIndex((item) => { // -1 if not found.
    return item === "reading"; // Or write: (item => item === "reading")
})

const editedHobbies = hobbies.map((item) => item + '!'); // origin not changed
```

## 1.6 Destructuring

```javascript
const [firstName, lastName] = ["Max", "sur"];

const {name: username, age} = { // pulled out by name, exactly match object name
    name: "xxx",
    age: 30
}

// For Fucntion params
function storeOrder(order) {
  localStorage.setItem('id', order.id);
  localStorage.setItem('currency', order.currency);
}
function storeOrder({id, currency}) { // destructuring
  localStorage.setItem('id', id);
  localStorage.setItem('currency', currency);
}

```

## 1.7 Spread Operator

```javascript
const mergedhobbies = [...hobbies, ...newHobbies]; /

const extndedUser = {
    isAdminL: true,
    ...user;
}
```

## 1.8 Manipulating the DOM

```javascript
const list = document.querySelector("ul");
list.remove();
```

## 1.9 Reference vs Primitive Value

Array is also object, Not store the value, but the memory from computer;

# 2. React Essentials - Coponents, JSX, Props, State &&

## 2.1 Components

### 2.1.1 Define and use a component

```javascript
function Header() {
  return (
    <header>
      ...
    </header>
  );
}

function App() {
  return (
    <Header />
  );
}
```

We can sepeerate diff component in diff file

```javascript
export default function Header() { ... } // export in the outside compoent

import Header from "./components/Header";
<Header /> // Use it
```

### 2.1.2 Dynamic content

```javascript
const description = reactDescriptions[genRandomInt(2)];
<p>{description} React</p> // inside content {}
```

## 2.2 Class-based component

Normally we still use function component.

### 2.2.1 usage of class based component

1. State should be defined in constructor. state is always an object(in function can be anything).
2. super() must be called
3. this is used to call related state or method

```javascript
import { Component } from 'react';

import User from './User';
import classes from './Users.module.css';

class Users extends Component {
  constructor() {
    super();
    this.state = { // always be object
      showUsers: true,
      more: 'Test',
    };
  }

  toggleUsersHandler() {
    // this.state.showUsers = false; // NOT!
    this.setState((curState) => { // this.setState fixed usage here
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}
```

### 2.2.1 Lifecycle of class based component

1. componentDidMount() -- called once a component mounted, evaluyated & rendered by react; like useEffect(..., [])
2. componentDidUodate() -- called once a component updated, re-evaluated and re0rendered by React; like useEffect(..., [someValue])
3. componentWillUnmoint() -- Called right before component is unmounted, right before removed from DOM; like useEffect(()=> {return ()=>{...}}, []);

```javascript
class UserFinder extends Component {
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: '',
    };
  }

  componentWillUnmount() {
    console.log('User will unmount!');
  }

  componentDidMount() {
    // Send http request...
    this.setState({ filteredUsers: DUMMY_USERS });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) { // we dont need to check in useEffect. but needed here.
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type='search' onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}
```

### 2.1.3 Error Boundaries

Error Boundaries are a React feature that allows you to catch JavaScript errors anywhere in your component tree, log those errors, and display a fallback UI instead of crashing the entire application. They were introduced in React 16 as a way to handle errors gracefully in React applications.

1. Component-Level Error Handling:

Error Boundaries work at the component level, meaning they catch errors in their child components. They do not catch errors inside the boundary itself, in event handlers, asynchronous code (like setTimeout or fetch), server-side rendering, or during the commit phase of rendering.

2. Lifecycle Methods Involved:

Two lifecycle methods are primarily used in Error Boundaries:
static getDerivedStateFromError(error): Used to update the state so that the next render shows the fallback UI.
componentDidCatch(error, info): Used to log the error information.

3. Fallback UI:

When an error is caught, an Error Boundary can render a fallback UI, which is a way to display a user-friendly message instead of the broken UI.

4. Where to Use Error Boundaries:

You should use Error Boundaries to wrap components that you expect might throw errors. This is especially useful for components from third-party libraries, large sections of your app, or any component where you want to display a specific error message if something goes wrong.

```javascript
// Define the ErrorBoundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Update state so the next render shows the fallback UI
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Log the error (you can also log it to an error reporting service)
  componentDidCatch(error, info) {
    console.error("Error caught by ErrorBoundary: ", error, info);
  }

  render() {
    if (this.state.hasError) {
      // Render any fallback UI you want
      return <h1>Something went wrong.</h1>;
    }

    // Render children if there's no error
    return this.props.children;
  }
}

// Example of a component that may throw an error
function BuggyComponent() {
  const [count, setCount] = React.useState(0);

  if (count === 5) {
    // Simulate a JavaScript error when count reaches 5
    throw new Error('I crashed!');
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

## 2.3 Props

pass data to components via a concept called "Props"

```javascript
function componentXXX(props) { // use props to represent all, Or can object destructoring {image, title, description}
    return(
        <xxx>{props.name}</xxx>
        <xxx>{props.age}</xxx>
        ...
    )
}

<componentXXX 
    name='allen' // string
    age={34} // number
    details={{userName: 'allen'}} // object
    hobbies={['Cooking', 'Reading']} // array value
/>

import { CORE_CONCEPTS } from "./data";
<CoreConcept {...CORE_CONCEPTS[1]} /> // directly write the object to it

export default function CoreConcept({ concept }) { ... }
<CoreConcept concept = {CORE_CONCEPTS[1]} /> // give a prop name to receive

export default function Button({ caption, type = "submit" }) { ... } // default param value
<Button caption="My Button" /> // to replace <Button type="submit" caption="My Button" />
```

props.children represent the content between your compnent text

```javascript
export default function TabButton(props) {
  return (
    <li>
      <button>{props.children}</button>
    </li>
  );
}

<TabButton>Components</TabButton>
```

The id prop, which is used to mark specially section or content, can not go through the component the outside used, like:

```javascript
<Section id="example"> // the id just can use outside, the css style can be apllied putside content. can not be used inside Section
```

If we want to transport many prop, but notnto write it one by one, we can use ...props;

```javascript
<Section id="example" className="xxx" mmmm> // the id just can use outside, the css style can be apllied putside content. can not be used inside Section

export default function Section({title, ...props}) {
  <div {...props}>....<> // then here use all outside other remainging props
}
```

### 2.3.1 Fragment

When we use component in react, we need return a whole body, rather than multiple, sometime we use ```<div>```, but it will add a div into the content

Methods:

1. ```<div>```
2. ```<>```
3. ```<Fragment>```so we introduce fragment, without show anything on screen

## 2.4 Function

Without using arrow functions: Suitable when the event handler **doesn't require any parameters**, such as onClick={handleSelect}, where handleSelect is a function without parameters.

Using arrow functions: When you **need to pass parameters or ensure the function is executed only after a specific user action**, you should use an arrow function, like onClick={() => handleSelect('Components')}.

```javascript
 <TabButton onSelect={() => handleSlect('Components')}>Components</TabButton>

```

## 2.5 conditional

If Condition

```javascript
// method 1
{!selectedTopic ? (
  <p>Please select a topic</p>
) : (
  <h3>{EXAMPLES[selectedTopic].title}</h3>
)}

// method 2
{!selectedTopic && <p>Please select a topic</p> }
{ selectedTopic && (
  <div id="tab-content">
  <p>{EXAMPLES[selectedTopic].description}</p>
  </div>
)}

//method 3
let tabContent = <p>Please select a topic</p>;
if (selectedTopic) {
  tabContent = (
    <div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    </div>
  )
}
```

iteral through each content

```javascript
<ul>
  {CORE_CONCEPTS.map((conceptItem) => (
    <CoreConcept key={conceptItem.title} {...conceptItem} />
  ))}
</ul>
```

## 2.6 class

className is used to select class to apply here

```javascript
<button className={isSelected ? "active" : undefined} onClick={onSelect}>
  {children}
</button>
```

## 2.7 Slot

Slot can be used to group and set dynamic changed outside of the compoennt, make it more flexiable.

```javascript
export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  // const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}

<Tabs
  buttons={
    <>
      <TabButton
        isSelected={selectedTopic === "components"}
        onClick={() => handleSelect("components")}
      >
        Components
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "jsx"}
        onClick={() => handleSelect("jsx")}
      >
        JSX
      </TabButton>
    </>
  }
>
  {tabContent}
</Tabs>
```

## 2.8 Resource

You should use the public/ folder for any images that should not be handled by the build process and that should be generally available. Good candidates are images used directly in the index.html file or favicons.

On the other hand, images that are used inside of components should typically be stored in the src/ folder (e.g., in src/assets/).

## 2.9 Data Update

### 2.9.1 Two way binding

```javascript
export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} /> // value is one way, onChange is another way
    );
    // btnCaption = 'Save';
  }
}
```

# 3. Styling React Apps

## 3.1 Vanilla CSS

Advantage:

1. CSS is decoupled from JSX code
2. You write CSS code as you may know and love it
3. CSS may be written by another developer who need only a minimal amount of access to your JSX code

Disadvantage:

1. You need to know CSS
2. CSS code ***is not scoped to components*** -> CSS rules mat clash accross components(same CSS class name used in different components for different purposes)

## 3.2 Mehtod 1: Inline Style

```javascript
<p style={{
  color: 'red',
  textAlign: 'left'
}}>Here is a Normal inline style try</p>

<label className={`label ${emailNotValid ? 'invalid' : ''}`}> // add more className initial as you want
<p style={{
  // CSS target is an object, so use emailNotValie rather than {emailNotValie}
  backgroundColor: emailNotValie ? '#fwfwfw' : '#g4g4g4' // emailNotValie is a judegment value
  className={emailNotValie ? 'invalid' : undefined} // dynamic add className to change style
}}>Here is a Dynamic&Condition inline style try</p>

<p style={{
  
}}>Here is a Dynamic&Condition inline style try</p>
```

Advantage:

1. Quick and eacy
2. only effext the element
3. **Add Dynamic and conditionally**

Disadvantage:

1. You need to know CSS
2. You need to style everyOne
3. No seperation between CSS and JSX

## 3.3 Method 2: Scope CSS Rule with CSS Module

```javascript
// change the css name to  Header.module.css with module key word

import classes from './Header.module.css';

<p className={classes.paragraph}>A community of artists and art-lovers.</p>
```

Advantage:

1. Decoupled
2. You write CSS code
3. can be writted by anotehr developer who need a small part
4. Scoped

Disadvantage:

1. You need to know CSS
2. You may end uo with many relatively small css files in your project

## 3.4 Method 3: Styled Component

```javascript
import { styled } from 'styled-components';

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ $invalid }) => ($invalid ? '#f87171' : '#6b7280')};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: ${({ $invalid }) => ($invalid ? '#fed2d2' : '#d1d5db')};
  color: ${({ $invalid }) => ($invalid ? '#ef4444' : '#374151')};
  border: 1px solid ${({ $invalid }) => ($invalid ? '#f73f3f' : 'transparent')};
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export default function CustomInput({ label, invalid, ...props }) {
  return (
    <p>
      <Label $invalid={invalid}>{label}</Label>
      <Input $invalid={invalid} {...props} />
    </p>
  );
}

// To use it:
import Input from './Input.jsx';
<Input
  label="Email"
  invalid={emailNotValid}
  type="email"
  // style={{
  //   backgroundColor: emailNotValid ? '#fed2d2' : '#d1d5db'
  // }}
  onChange={(event) => handleInputChange('email', event.target.value)}
/>
```

Advantage:

1. Quick and easy
2. Continue thinking in react
3. Scoped

Disadvantage:

1. You need to know CSS
2. No seperation between CSS and JSX

## 3.5 Method 4: Tailwind CSS

VScode has plug-in
Advantage:

1. You do not need to know css
2. Quick
3. No style clash bettween components
4. Highly configurable

Disadvantage:

1. long classname
2. any style change require editing JSX
3. end upo with many relatively small "wrapper"

```javascript
// index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

// in file
export default function Input({ label, invalid, ...props }) {
  let labelClasses = 'block mb-2 text-xs font-bold tracking-wide uppercase';
  let inputClasses = 'w-full px-3 py-2 leading-tight border rounded shadow';

  if (invalid) {
    labelClasses += ' text-red-400';
    inputClasses += ' text-red-500 bg-red-100 border-red-300';
  } else {
    labelClasses += ' text-stone-300';
    inputClasses += ' text-gray-700 bg-stone-300';
  }

  return (
    <p>
      <label className={labelClasses}>{label}</label>
      <input className={inputClasses} {...props} />
    </p>
  );
}

```

For config file:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Pacifico"', 'cursive']
      }
    },
  },
  plugins: [],
};

```

# 4. Debugging

## 4.1 devTools

## 4.2 Strict Mode

# 5. Refs & Portals

## 5.1 Refs Usage

### 5.1.1 Ref Basic usage

```javascript
const playerName = useRef();

const [enteredPlayerName, setEnteredPlayerName] = useState(null);

function handleClick() {
  setEnteredPlayerName(playerName.current.value);
  playerName.current.value = ''; // directly to clear content
}

<input
  ref={playerName} // receive content directly without useState onchange and value
  type="text"
/>
<button onClick={handleClick}>Set Name</button>
```

Compare State with Ref:

Ref:

1. Do not cause component re-evaluation when changed
2. Can be used to gain direct DOM element access (great for reading values or accessing certain browser APIs)

State:

1. Cause component re-evaluation when changed
2. should be used for values that are directly reflected in the UI
3. Should not be used for "behind the scenes" values that have no direct UI impact

### 5.1.2 Ref for pointer

```javascript
const timer = useRef();

function handleStart() {
  timer.current = setTimeout(() => { // here for the timer, diff element with it own timer ref
    setTimerExpired(true);
  }, targetTime * 1000);

  setTimerStarted(true);
}

function handleStop() {
  clearTimeout(timer.current);
}
```

### 5.1.3 Forward Ref

When you difined a new componet yourself to contain an system component, the origin ref such as used in the input cannot be used in your new Input components. at this time, you need forwardRef.

```javascript
export default function TimerChallenge({ title, targetTime }) {
  const dialog = useRef(); // later will forward this ref
  function handleStart() {
    dialog.current.showModal();
  }
  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
    </>
  );
}

// for the component which needed to be forward
import { forwardRef } from 'react';

const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>You {result}</h2>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
})

export default ResultModal;
```

## 5.2 useImperativeHandle Hook Fucntion

must be used with ref

```javascript
import { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
    </dialog>
  );
})

export default ResultModal;


function handleStart() {
  dialog.current.open();
}
<ResultModal ref={dialog} targetTime={targetTime} result="lost" />
```

# 6 State (Hook)

The component function doesnot excute again, so a let variable will not work when you want to change that value;

## 6.1 state use rule

To solve it, use state.

Rules:

1. Only call Hooks inside of Component Functions, not outsides;
2. Only call hooks on the top level (not called in nested code statement (eg: in a if statements))

```javascript
const [selectedTopic, setSelectedTopic] = useState('Please click a button');
      // currentValue  // update function           // initial state value
```

## 6.2 Update State based on od state

```javascript
setIdEditing(!isEditing); // DONOT DO LIKE THIS, this way will process in future like 1/2s, not instant; if you write two times, may all use old value, that will occur problem
setIdEditing(wasEditing => !wasEditing) // DO LIKE THIS
```

## 6.3 immutable change of state

Dont't mutate value directly of the original one, cause it it a reference

```javascript
const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      prevGameBoard[rowIndex][colIndex] = "X"; // DONT DO THIS
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = "X";
      return updatedBoard;
    });
  }
```

## 6.4 Lifting State Up

Lift the state up to the closet ancestor component that has access to all components that need to work with that state

```javascript
// ancestor component
const [activePlayer, setActivePlayer] = useState("X");
function handleSelectSquare() {
  setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
}
<Player
  initialName="Player 2"
  symbol="O"
  isActive={activePlayer === "O"}
/>
<GameBoard
  onSelectSquare={handleSelectSquare}
  activePlayerSymbol={activePlayer}
/>

// Child component
// player
<li className={isActive ? "active" : undefined} ></li>

// GameBoard
function handleSelectSquare(rowIndex, colIndex) {
  updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  onSelectSquare();
}
```

## 6.5 Advanced State: Context API

create
round(.provider)(Default to use, best way to use)
import, use,
connect with sate.

```javascript
// here to trigger a button from header to change page theme light and dark
// Context.js
import React from 'react';
export const ThemeContext = React.createContext({
    theme: 'light',
    toggleTheme: () => {},
})

export default function ThemeContextProvider({children}) {
  const [currentTheme, setCurrentTheme] = React.useState('light');
  
  function toggleTheme() {
      setCurrentTheme((prevTheme) => {
          if (prevTheme === 'dark') {
              return 'light';
          } else {
              return 'dark';
          }
      });
  };
  
  const ctxValue = {
    theme: currentTheme,
    toggleTheme: toggleTheme,
  };
  
  
  return (
    <ThemeContext.Provider value={ctxValue}>
        {children}
    </ThemeContext.Provider>
  );
}

// app.sj
import Page from './Page';
import ThemeContextProvider from "./ThemeContextProvider.js";

function App() {
  return(
    <ThemeContextProvider>
        <Page />
    </ThemeContextProvider>
    );
}

export default App;

// A components
import React from 'react';
import {ThemeContext} from "./ThemeContextProvider.js";

export default function Header() {
  const {toggleTheme}  = React.useContext(ThemeContext);
  
  return (
    <header>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
}

// B components
import Header from './Header';
import React from 'react';
import {ThemeContext}  from "./ThemeContextProvider.js";

export default function Page() {
    const themeCtx = React.useContext(ThemeContext);
    
  return (
    <div id="app" className={themeCtx.theme}>
    </div>
  );
}

```

A diff way to use context(Consumer) (not commonly used, not easy to read)

Reexcute hte project when the context value is changed.

## 6.6 UseReducer

Here is a counter example

```javascript
import { createContext, useReducer } from 'react';

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === 'REMOVE_ITEM') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    const updatedItems = [...state.items];

    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === 'CLEAR_CART') {
    return { ...state, items: [] };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: 'ADD_ITEM', item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: 'REMOVE_ITEM', id });
  }

  function clearCart() {
    dispatchCartAction({ type: 'CLEAR_CART' });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;


// using context
import { useContext } from 'react';
const cartCtx = useContext(CartContext);
function handleAddMealToCart() {
  cartCtx.addItem(meal);
}
```

# 7. Side Effects - UseEffect()

## 7.1 Some basic info

Side effects refer to any observable change in the state of the system that occurs as a result of executing a piece of code. This includes modifying a variable, writing to a file, updating a user interface, sending a network request, or any other action that changes the state outside of the function's scope.

What caused?
May cause infinit loop: a function call inside a app, but not trigger by page, it triggered itself. if it set state in this function. state change - rerender - call function - set state - state cahnge - rerender - Infinit loop

When not used: like setStorage, and get storage before main app component start. some fucnction finished instanousouly will be OK.

***Effect dependence***: use props or state value(casue re-excute) in the useEffect function; so we cannot use  [] in the end.

## 7.2 UseEffect()

useEffect should be used in root component function; it need some time to excute sometimes.

Nots: under the [], if you set some fix number from outside, it may be not changed. but if you outpout a function, even the function npot change logic, bug every time it excute, it will use a new memory, so it will trigger the useEffect to run again.

```javascript
function App() {
  const [pickedPlaces, setPickedPlaces] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );

      setAvailablePlaces(sortedPlaces);
    });
  }, []); // if there is  no [], it will call infinit, with []. it just call once

  return (
    <>
      <Places
        title="Available Places"
        places={availablePlaces}
        fallbackText="Sorting places by distance..."
      />
    </>
  );
}
```

Effect dependences:

```javascript
function Modal({ open, children, onClose }) {
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]); // rather than []. it should add the props open here

  ...
}
```

## 7.3 Clean Up Function: return () =>

Should be known here: the : return () => modal.close(); is a clean up fucntion. It is is not executed immediately after the open variable is set to true.

It is only executed when:

1. The component re-renders, and open changes again (e.g., from true to false).
2. The component unmounts (the entire effect is cleaned up).

```javascript
useEffect(() => {
  const modal = dialog.current;

  if (open) {
    modal.showModal();
  }

  return () => modal.close();
}, [open]);
```

## 7.4 useCallBack()

As we said before, when component reexcute, the function into the [] will detect change cause the memory changed. so it will trigger the useEffect run again. we we use the useCallBack to prevent and control it.

# 8. A Look behind React & optimization techniques

## 8.1 How React DOM Render

1. Component Tree Construction
Component Tree: When an application is running, React organizes these components into a tree-like structure called the component tree. Each component in the tree can have one or more child components, forming a hierarchical structure.

Rendering: The root component (usually ```<App />```) is at the top of this tree, and React recursively renders each component down the tree, turning them into the HTML that gets displayed in the browser.

2. Virtual DOM

Virtual DOM (VDOM): React creates a virtual representation of the UI, known as the Virtual DOM. This is a lightweight copy of the actual DOM (Document Object Model) in the browser. The VDOM allows React to make updates efficiently without directly manipulating the real DOM.

Initial Rendering: When a component renders for the first time, React creates a VDOM tree representing the entire UI structure. This tree is a snapshot of the components and their current state.

Reconciliation: When a component’s state or props change, React creates a new VDOM tree. It then compares this new tree with the previous one (a process known as "reconciliation") to determine the minimum number of changes needed to update the real DOM.

## 8.2 usememo()

### 8.2.1. When to Use useMemo()

a. Expensive Computations:

b. Avoiding Unnecessary Re-Renders:

c. Dependent Derived Values:

### 8.2.2. How useMemo() Works

useMemo() takes two arguments:

```javascript

const memoizedValue = useMemo(() => {
  // Compute and return a value
  return expensiveCalculation(a, b);
}, [a, b]); // Dependencies
```

First Render: On the initial render, the function inside useMemo() is executed, and the result is stored.

Subsequent Renders: On subsequent renders, React checks if any of the dependencies (a or b) have changed.

If no dependencies have changed, the memoized value is returned without re-executing the function.

If any dependency has changed, the function is re-executed, and the new result is memoized.

## 8.3 Use better with Key

1. Rendering Lists of Elements:

Whenever you are rendering a list of elements using .map() or a similar method, you should provide a key prop to each element.
Example:

```javascript

const items = ['Apple', 'Banana', 'Cherry'];

function FruitList() {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```

2. Dynamic Components:

When rendering components that depend on dynamic data, such as items fetched from an API or user-generated content, use a key to uniquely identify each component.
Example:

```javascript
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

function UserList() {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

3. Managing Child Components in a Parent Component:

If you have a parent component that conditionally renders or reorders child components, using a key ensures that each child component is correctly identified and preserved across updates.

Also:
If your components have local state or side effects, using key ensures that React preserves the correct state across re-renders. Without a stable key, React might reuse components inappropriately, leading to unexpected behavior or bugs.
Example:

```javascript

function App() {
  const [items, setItems] = React.useState(['A', 'B', 'C']);

  return (
    <div>
      {items.map((item) => (
        <ChildComponent key={item} item={item} />
      ))}
    </div>
  );
}

function ChildComponent({ item }) {
  // Child component logic here
  return <div>{item}</div>;
}
```

# 9. Data Fetching & HTTP Request

## 9.1 Sending Fetch request via useEffect

1. Fetching Data

```javascript
useEffect(() => {
  fetch('http://localhost:3000/places')
    .then((response) => {
      return response.json();
    })
    .then((resData) => {
      setAvailablePlaces(resData.places);
    });
}, []);

// extract to an api function
export async function fetchAvailablePlaces() { 
  const response = await fetch('http://localhost:3000/places');
  const resData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch places');
  }

  return resData.places;
}

useEffect(() => {
  async function fetchPlaces() {
    setIsFetching(true);

    try {
      const places = await fetchAvailablePlaces();
      ...
```

2. Async fetch and catch error

```javascript
useEffect(() => {
  async function fetchPlaces() {
    setIsFetching(true);

    try {
      const response = await fetch('http://localhost:3000/places');
      const resData = await response.json();

      if (!response.ok) {
        throw new Error('Failed to fetch places');
      }

      setAvailablePlaces(resData.places);
    } catch (error) {
      setError({
        message:
          error.message || 'Could not fetch places, please try again later.',
      });
    }

    setIsFetching(false);
  }

  fetchPlaces();
}, []);
```

## 9.2 Sending Post Requests

use fetch with put method

```javascript
export async function updateUserPlaces(places) {
  const response = await fetch('http://localhost:3000/user-places', {
    method: 'PUT',
    body: JSON.stringify({ places }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to update user data.');
  }

  return resData.message;
}

// usage
async function handleSelectPlace(selectedPlace) {
  ...

  try {
    await updateUserPlaces([selectedPlace, ...userPlaces]);
  } catch (error) {
    // ...
  }
}
```

# 10. Custom Hook

## 10.1 Rules of Hook

1. Only call hooks inside of component Functions

So If you outsource a range of code which use like useEffect or other system hook, it cannot be outsource as a standard function, and reuse in some component;

2. Only call Hooks on the top level

## 10.2 Define a custom Hook

Name should start with use;

state changed in custom hook, also cause component use that hook to re-render;

state will be seperated created in different component when using custom hook state.

```javascript
// custom hook
import { useEffect, useState } from 'react';

export function useFetch(fetchFn, initialValue) {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setFetchedData(data);
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch data.' });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]);

  return {
    isFetching,
    fetchedData,
    setFetchedData, // also the setting can be output
    error
  }
}

// app component
const {
  isFetching,
  error,
  fetchedData: userPlaces,
  setFetchedData: setUserPlaces,
} = useFetch(fetchUserPlaces, []);
```

## 10.3 UseHttp Hook Example

A common USEHTTP HOOK

```javascript
import { useCallback, useEffect, useState } from 'react';

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(
      resData.message || 'Something went wrong, failed to send request.'
    );
  }

  return resData;
}

export default function useHttp(url, config, initialData) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  function clearData() {
    setData(initialData);
  }

  const sendRequest = useCallback(
    async function sendRequest(data) {
      setIsLoading(true);
      try {
        const resData = await sendHttpRequest(url, { ...config, body: data });
        setData(resData);
      } catch (error) {
        setError(error.message || 'Something went wrong!');
      }
      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if ((config && (config.method === 'GET' || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
    clearData
  };
}

```

# 11. Handle Form and User Input

## 11.1 Handling form submission

### 11.1.1 submit Form

1. problem: the button in the form has default behaviour which will send request to server to submit the info. so even if you add a button with a self deined function inside, the form will excute the default, and your function will not operated.

Solution:

  1) add a type="button" to that ```<button>```;
  2) remove the button you add and add onSubmit={handleSubmit} inside the ```<form>```, and use ``` event.preventDefault() ``` to prevent the default sumit action of itself

### 11.1.2 Handle form data

2. Handle form values: useState, ref;

3. Handling values vis FormData & Native Browser APIs

using FormData to get item by 'name' property in the form;

```javascript
function handleSubmit(event) {
  event.preventDefault();

  const fd = new FormData(event.target); // Creates a FormData object with all form data.
  const acquisitionChannel = fd.getAll('acquisition'); // Retrieves all values for the field named acquisition.
  const data = Object.fromEntries(fd.entries()); // Converts all the form data into a plain JavaScript object.
  data.acquisition = acquisitionChannel; // Replaces the acquisition field in the object with an array of all its values.
  console.log(data);
}


<div className="control">
  <label htmlFor="email">Email</label> // using htmlFor keyWord to represent the type label
  <input id="email" type="email" name="email" /> // The name here is the identifier
</div>

<div className="control-row">
  <div className="control">
    <label htmlFor="password">Password</label>
    <input id="password" type="password" name="password" />
  </div>
```

### 11.1.3 Reset form

1. use reset type

```javascript
<button type="reset" className="button button-flat"> // with <form> inside, can direct use
  Reset
</button>
```

2. reset value by function
By clearing all ref or state or event.target.reset;

## 11.2 Validation

### 11.2.1 Via state

```javascript
const emailIsInvalid = enteredValues.email !== '' && !enteredValues.email.includes('@');

<div className="control-error">
  {emailIsInvalid && <p>Please enter a valid email address.</p>}
</div>
```

### 11.2.1 Via lost focus(Blur)

```javascript
const [didEdit, setDidEdit] = useState({ // recvord the state, blur or not.
  email: false,
  password: false,
});

const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@'); // judge the blur state then judge

function handleInputChange(identifier, value) {
  setEnteredValues((prevValues) => ({
    ...prevValues,
    [identifier]: value,
  }));
  setDidEdit((prevEdit) => ({ // when type again, set the state to false, waiting next blur judgement
    ...prevEdit,
    [identifier]: false,
  }));
}

function handleInputBlur(identifier) {
  setDidEdit((prevEdit) => ({
    ...prevEdit,
    [identifier]: true, // set blue to true
  }));
}

<input
  id="email"
  type="email"
  name="email"
  onBlur={() => handleInputBlur('email')} // add func to the blur function
  onChange={(event) => handleInputChange('email', event.target.value)}
  value={enteredValues.email}
/>
```

### 11.2.1 Via Form Submission

```javascript
<form onSubmit={handleSubmit}>
```

### 11.2.1 Via Build-in Validation Props

1. required - not allowed here to be empty
2. type - like email, will judge which is not email;
3. minLength - define a min length for this input

```javascript
<input
  id="password"
  type="password"
  name="password"
  required
  minLength={6}
/>
</div>
```

# 100. Some commonly used Content

1. article

When you want a group of content with pic + content + someelse like price, can be group by a article

2. Header

Just like a new like used in page

3. Form

When you submit a form

4. Model - dialog

```javascript
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children, open, onClose, className = '' }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}
```

# 101 Some tips

1. When fetch img src from backend

Sometime backend just give back a path rather than whole src, so you should add a url to the img src + that path

```javascript
<img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
```

2. Formatting data

one u can use is Intl.NumberFormat

```javascript
export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
```
