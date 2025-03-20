// Exercise 1
const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(
  <>
    <p>Welcome Messages</p>
    <ul>
      <li>Welcome Tom from Singapore</li>
      <li>Welcome Jerry from Malaysia</li>
      <li>Welcome Sarah from Indonesia</li>
    </ul>
  </>
)



// Exercise 2
const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
    function Header() {
        return <p>Welcome Messages</p>
    }
    function Paragraph() {
     return <ul>
      <li>Welcome Tom from Singapore</li>
      <li>Welcome Jerry from Malaysia</li>
      <li>Welcome Sarah from Indonesia</li>
    </ul>
    }
    function App(){
    return <div>
        <Header />
        <Paragraph />
    </div>
    }
    root.render(<App />)



// Exercise 3
function WelcomeMessagesTitle() {
    return <p>Welcome Messages</p>
}

const WelcomeMessage = (props) => {
    return (
        <li>Welcome {props.name} from {props.country}</li>
    )
}
  
function WelcomeMessagesList() {
    return <ul>
        <WelcomeMessage
            name="Tom"
            country="Singapore" 
        />
        <WelcomeMessage
            name="Jerry"
            country="Malaysia" 
        />
        <WelcomeMessage
            name="Sarah"
            country="Indonesia" 
        />
    </ul>
}
  
function WelcomeMessagesSection() {
return <div>
    <WelcomeMessagesTitle />
    <WelcomeMessagesList />
</div>
}

function App() {
return <div>
    <WelcomeMessagesSection />
</div>
}

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />)


// Exercise 4
const strings = ['hello', 'world', 'javascript'];

const lengths = strings.map(function(stringsLength) {
    return stringsLength.length
})

console.log(lengths); // Output: [5, 5, 10]



// Exercise 5
const names = [['John', 'Doe'], ['Jane', 'Doe'], ['Jeremy']];

const fullNames = names.map((namesArray) => {
    if (namesArray.length !== 2) {
        return "invalid data point"          // to handle dirty data that returns weird output
    }
    return namesArray[0] + " " + namesArray[1]
})

console.log(fullNames); // Output: ['John Doe', 'Jane Doe']

const filteredNames = names.filter((namesArray) => {
    return namesArray.length === 2
})

console.log(filteredNames)



// Exercise 6
const users = [
  { name: 'Tom', country: 'Singapore' },
  { name: 'Jerry', country: 'Malaysia' },
  { name: 'Sarah', country: 'Indonesia' }
];

function WelcomeMessagesTitle() {
    return <p>Welcome Messages</p>
  }
  
  function WelcomeMessage(props) {
    return <li>Welcome {props.name} from {props.country}</li>
  }
  
  function WelcomeMessagesList(props) {
    return props.users.map(user => {
      return <WelcomeMessage
        key={user.name} 
        name={user.name}
        country={user.country} />
    })
  }
  
  function WelcomeMessagesSection() {
    return <div>
      <WelcomeMessagesTitle />
      <WelcomeMessagesList />
    </div>
  }
  
  function App() {
    return <div>
      <WelcomeMessagesSection />
    </div>
  }
  
  const domContainer = document.getElementById('root');
  const root = ReactDOM.createRoot(domContainer);
  root.render(<App/>)



// Exercise 7
const age = 20
const beverage = age >= 18 ? "Beer" : "Juice"
console.log(beverage)



// Exercise 8
const users = [
  { name: 'Tom', country: 'Singapore' },
  { name: 'Jerry', country: 'Malaysia' },
  { name: 'Sarah', country: 'Indonesia' }
];

function WelcomeMessagesTitle() {
  return <p>Welcome Messages</p>
}

function WelcomeMessage(props) {
  return <li>Welcome {props.name} from {props.country}</li>
}

function WelcomeMessagesList() {
  return <ul> 
    { 
    users.map(user => {
      user.country === "Singapore" ?
        <li>Majulah Singapura, {user.name}!</li> :
        <WelcomeMessage key={user.name} name={user.name} country={user.country} />
      })
    }
  </ul>
}

function WelcomeMessagesSection() {
  return <div>
    <WelcomeMessagesTitle/>
    <WelcomeMessagesList/>
  </div>
}

function App() {
  return <div>
    <WelcomeMessagesSection/>
  </div>
}
const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App/>)



// Exercise 9
const users = [
  { name: 'Tom', country: 'Singapore' },
  { name: 'Jerry', country: 'Malaysia' },
  { name: 'Sarah', country: 'Indonesia' }
];

function WelcomeMessagesTitle() {
  return <p>Welcome Messages</p>
}

function WelcomeMessage(props) {
  return <li>Welcome {props.name} from {props.country}</li>
}

function WelcomeMessagesList() {
  return <ul>
    {
      users.map(user => (
        <>
          {user.country === "Singapore" && <li>Majulah Singapura, {user.name}!</li>}
          <WelcomeMessage key={user.name} name={user.name} country={user.country} />
        </>
      ))
    }
  </ul>
}


function WelcomeMessagesSection() {
  return <div>
    <WelcomeMessagesTitle />
    <WelcomeMessagesList />
  </div>
}

function App() {
  return <div>
    <WelcomeMessagesSection />
  </div>
}

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />)