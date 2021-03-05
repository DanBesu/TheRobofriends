import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

function App(){
    // constructor(){
    //     super()
    //     this.state = {
    //         robots: [],
    //         searchfield: ''
    //     }
    // }
    
    const [robots, setRobots] = useState([]) // initial state
    const [searchfield, setSearchField] = useState('')

    // componentDidMount() {
    //     // request to server
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response=>response.json())
    //     .then(users => this.setState({robots: users})); // if {} => LOADING....
    // }

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(users => setRobots(users)); // if {} => LOADING....
    }, []) // only run useEffect if the list is empty (just run initially when the component mounts)

    const onSearchChange = (event) =>{
        // every time the input chances, an event happens
        setSearchField(event.target.value);
    }

   
    const filterRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    
    if(!robots.length){
        return <h1 className='tc'> Loading.... </h1>
    }
    else{
        return(
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <CardList robots={filterRobots}/>
                </Scroll>
                
            </div>
        );
    }
    
}

export default App;