import { useState } from 'react';
import './App.css';
import Input from './components/Input/Input';
import Stays from './components/Stays/Stays';
import logo from "./logo.svg";
import globe from "./web.svg";
import data from './stays.json';

function App() {

  const [locationText, setLocationText] = useState('Helsinki, Finland');
  const [guestCount, setGuestCount] = useState({
    adult: 1,
    children: 0,
  });

  const [filteredStays, setFilteredStays] = useState(data);

  const [toggle, setToggle] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault()
    setToggle(prev => !prev)
  }

  const handleLocationChange = (e) => {
    setLocationText(e.target.value)
  }

  const handleSuggestion = (e) => {
    setLocationText(e.target.name)
  }

  const handleGuestCount = (e) => {
    if (e.target.name === 'adult-subtract' && guestCount.adult > 0) {
      setGuestCount(prev => ({
        ...prev,
        adult: guestCount.adult - 1
      }))
    } else if (e.target.name === 'adult-plus' && guestCount.adult < 20) {
      setGuestCount(prev => ({
        ...prev,
        adult: guestCount.adult + 1
      }))
    } else if (e.target.name === 'children-subtract' && guestCount.children > 0) {
      setGuestCount(prev => ({
        ...prev,
        children: guestCount.children - 1
      }))
    } else if (e.target.name === 'children-plus' && guestCount.children < 20) {
      setGuestCount(prev => ({
        ...prev,
        children: guestCount.children + 1
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilteredStays(filterStays())
    setToggle(prev => !prev) //moved state up from input to app so I could add this here
  }

  const filterStays = () => {
    return data.filter(stay => parseInt(guestCount.adult) + parseInt(guestCount.children) <= stay.maxGuests ?
      `${stay.city}, ${stay.country}` === locationText
      : null
    )
  }

  return (
    <div className="App">
      <nav className="flex align-center between padding-20">
        <div className="logo-div">
          <img src={logo} alt="Windbnb" />
        </div>
        <Input
          handleSuggestion={handleSuggestion}
          locationText={locationText}
          handleLocationChange={handleLocationChange}
          handleGuestCount={handleGuestCount}
          guestCount={guestCount}
          handleSubmit={handleSubmit}
          toggle={toggle}
          handleToggle={handleToggle}
        />
        <div className="flex align-center between mobile-none">
          <div>
            Become a Host
          </div>
          <div className="margin-start-5">
            <img src={globe} alt="" />
          </div>
        </div>
      </nav>
      <main>
        <Stays
          filteredStays={filteredStays}
        />
      </main>
    </div>
  );
}

export default App;
