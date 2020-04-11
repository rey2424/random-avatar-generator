import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css'


class App extends Component {

    constructor() {
        super();
        this.state = {
            people: [],
            searchfield: ''
        }
    }

    componentDidMount() {
       fetch('https://jsonplaceholder.typicode.com/users') 
       .then(response =>  response.json())
       .then(users => this.setState({people: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});    }


    render(){
        
    
        const filterPeople = this.state.people.filter(person => {
            return person.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
       
        return !this.state.people.length ?
            <h1>Loading</h1> :
        (
        
        <div className='tc'>
        <h1 className='f1'>Random Avatar Generator</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
            <ErrorBoundry>
            <CardList people = {filterPeople} />
            </ErrorBoundry>
        </Scroll>
        </div>

         );
}
}


export default App;