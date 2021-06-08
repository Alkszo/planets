import React, {Component} from 'react';
import planets from './planets';

const Title = () => {
  return (
    <>
    <h1 className="title">A simple page about planets</h1>
    <h3 className="title">build in an hour to showcase basic React.js features</h3>
    </>
  )
}

const PlanetsList = () => {
  return (
    <div className="planets-list">
      {planets.map(planet => <Planet planet={planet} key={planet.name}/>)}
    </div>
    )
}

class Planet extends Component {
  constructor(props){
    super(props);
    this.state = {extend: false};
  }
  
 toggle = () => {
  this.setState({
    extend: !this.state.extend
  })
}

  render() {
    const planet = this.props.planet
    
    return(
      <div className="planet-card">
       <p className="planet-name">{planet.name}</p>
       <img src={planet.img} alt={planet.name}/>
       {!this.state.extend && <p className="toggle" onClick={this.toggle}>See more informations ▼</p>}
       {this.state.extend && <div className="planet-details">
          <p>type: {planet.type}</p>
          <p>equatorial diameter: {planet.equatorialDiameter} </p>
          <p>mass: {planet.mass}</p>
          <p>orbital period: {planet.orbitalPeriod}</p>
          <p>eccentricity of orbit: {planet.orbitalEccentricity}</p>
          <p>time to rotate around the Sun: {planet.rotationPeriod}</p>
          <p>number of confirmed moons: {planet.moons}</p>
          <p className="toggle" onClick={this.toggle}>Hide ▲</p>
       </div>}
      </div>
     
    )
  }
}


function App() {
  return (
    <>
   <Title />
   <PlanetsList />
   </>
  );
}

export default App;

/*
Planet component rewritten using hooks

import React, {useState} from 'react';
const Planet = ({planet}) => {

  const [toggle, setToggle] = useState(false);

  return(
    <div className="planet-card">
       <p className="planet-name">{planet.name}</p>
       <img src={planet.img} alt={planet.name}/>
       {!toggle && <p className="toggle" onClick={() => setToggle(!toggle)}>See more informations ▼</p>}
       {toggle && <div className="planet-details">
          <p>type: {planet.type}</p>
          <p>equatorial diameter: {planet.equatorialDiameter} </p>
          <p>mass: {planet.mass}</p>
          <p>orbital period: {planet.orbitalPeriod}</p>
          <p>eccentricity of orbit: {planet.orbitalEccentricity}</p>
          <p>time to rotate around the Sun: {planet.rotationPeriod}</p>
          <p>number of confirmed moons: {planet.moons}</p>
          <p className="toggle" onClick={() => setToggle(!toggle)}>Hide ▲</p>
       </div>}
      </div>
  )
}
*/