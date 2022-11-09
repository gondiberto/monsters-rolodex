//import logo from './logo.svg';

import { useState, useEffect } from 'react';
import './App.css';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

/* Function will only re-render when props change value or set the state a different value */
const App = () => {

  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  console.log('rendered')
  // callBack function, array which indicates the dependencies
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []) // we dont ever fetch again, so the array should be empty
 
  useEffect( () => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]) // re-run only when either monsters or searchfield changes (funcitons with Hooks)

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
     
    setSearchField(searchFieldString);
  };

  const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
     
    setTitle(searchFieldString);
  };

  return (
    <div className="App">
        <h1 className='app-title'>{title}</h1>

        
        
        <SearchBox 
          onChangeHandler={onSearchChange}
          placeholder='search monsters'
          className='monster-search-box' 
        />     
        <br />
        <SearchBox 
          onChangeHandler={onTitleChange}
          placeholder='set title'
          className='title-search-box' 
        />   
        <CardList 
          monsters={filteredMonsters} 
        />
      </div>
  );
}


/* class App extends Component {
  
  constructor() {
    super();

    // whenever the state or props changes, React will re-render the component
    this.state = {
      monsters:[],
      searchField: ''
    };
    
  }

  componentDidMount(){
    // run when the component got placed into the DOM
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users}
      }))
  }

  // method - will be initialized only once - otimizes -> better then anonymous function
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
          
    this.setState(() => {
      return {searchField};
   });
  } 
  
  render() {
    
    // casting to local variables is a way to perform better
    const { monsters, searchField} = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>

        <SearchBox 
          onChangeHandler={onSearchChange}
          placeholder='search monsters'
          className='monster-search-box' 
        />     
        <CardList 
          monsters={filteredMonsters} 
        />
      </div>
    );
  }
  
} */

export default App;
