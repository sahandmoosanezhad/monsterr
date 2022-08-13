import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [
        {
          name: 'francenstein',
          id: 'boss',
          power: 'Frankenstein is undead, composed of assorted body parts taken from dozens of different sources. Frankenstein has superhuman strength, does not need to eat or sleep, and is functionally immortal. He has mental access to the S.H.A.D.E. database via a surgical implant.'
        },
        {
          name: 'Dracula',
          id: 'right-hand',
          power: 'Dracula can manipulate the minds of others, and command animals, such as rats, bats, and wolves, to his will. With limited exceptions, he may control other vampires. He has the ability to mentally control victims he has bitten, and can temporarily hypnotize anyone with his gaze.'
        },
        {
          name: 'Devil',
          id: 'Left-hand',
          power: 'A Devil is a demonic entity that is said to be the source of all evil. Most religions have their own concepts of a single Devil that exists to corrupt the souls of man and is the eternal enemy of God. They are said to be the kings of all demons and possess great power, though the powers of Devils tend to differ depending on the religion.'
        },
        {
          name: 'Godzilla',
          id: 'Big-giant',
          power: 'Godzillas signature weapon is its "atomic heat beam" (also known as "atomic breath"), nuclear energy that it generates inside of its body, uses electromagnetic force to concentrate it into a laser-like high velocity projectile and unleashes it from its jaws in the form of a blue or red radioactive beam.'
        },
        {
          name: 'king-kong',
          id: 'giant-monkey',
          power: 'As one of the few mammal-based kaiju, Kongs most distinctive feature was his intelligence. He demonstrated the ability to learn and adapt to an opponents fighting style, identify and exploit weaknesses in an enemy, and utilize his environment to stage ambushes and traps.'
        },
        {
          name: 'Alien',
          id: 'Terribleee',
          power: 'The power to use the ability to transform into a extraterrestrial monster.'
        },
        {
          name: 'Sulley',
          id: 'Kind-giant',
          power: 'Sulleys armor is the latest innovation from the laboratories at Monsters, Inc. Sporting a mechanized exoskeleton and portable door tech, its biggest feature is the scream-energy system, which allows him to scare on the go and turn his enemies fear into a personal power supply to fight the Fractured.'
        },
        {
          name: 'Zombie',
          id: 'bad-soldiers',
          power: 'Enhanced senses – A zombies sense of hearing, sight, and smell become advanced past that of a normal humans after being brought back from the dead'
        },
      ],
      searchField: ''
    };

  }
  // componentDidMount(){
  //   fetch('https://https://typecode.com/about/')
  //   .then(response =>response.json())
  //   .then(team => this.setState({ monsters: team}));
  // }
  handleChange= e => {
    this.setState({searchField: e.target.value});
  };

  render(){
    const { monsters , searchField } = this.state;
    const filteredmonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()));

   return (
      <div className="App">
        <SearchBox
        placeholder='search monsters'
        handleChange={this.handleChange}
        />
        <CardList monsters={filteredmonsters}/>
      </div>
    );
  } 
}

export default App;
