import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Home from './components/Home';
import Planets from './components/Planets';
import 'semantic-ui-css/semantic.min.css'

function App() {
  const [people, setPeople] = useState ([]);
  const [planets, setPlanets] = useState ([]);
  const [loading, setLoading] = useState (true);

  useEffect(() => {

    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

    async function fetchPlanets() {
      let res = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results);
      setLoading(false);
    }
    fetchPeople();
    fetchPlanets();

  },[])

  // console.log('people',people);
  // console.log('planets',planets);

  return (
    <>
      <Router>
        <Navbar />
        <Container>
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          ) : ( 
              <Routes>
                <Route exact path='/Home' element={<Home data={people}/>}>
                </Route>
                <Route exact path='/Planets' element={<Planets data={planets}/>}></Route>
              </Routes>
            )}   
          </Container>
      </Router>
    </>
  );
}

export default App;
