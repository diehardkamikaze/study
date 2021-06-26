import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'

function SomeAnother({nameSUPER, age, city, pets, soul}) {
  return (<div>
            <p>Name: {nameSUPER}</p>
            <p>Age: {age}</p>
            <p>City: {city}</p>
            <ul>{pets.map(pet => <li>{pet}</li>)}</ul>
            <code>
              {soul.name}
              {soul.age}
            </code>
        </div>)
}

SomeAnother.defaultProps = {
  nameSUPER: "Almaz",
  age: 25,
  city: "Kazan",
  pets: ['dog', 'cat', 'snake'],
  soul: {
    name: 'Dennis',
    age: 15,
  }
}

SomeAnother.propTypes = {
  soul: PropTypes.exact({
    name: PropTypes.string,
    quantity: PropTypes.number,
  })
}



function App() {
  return (
    <div className="App">
      <header>
          <SomeAnother />
      </header>
    </div>
  );
}

export default App;
