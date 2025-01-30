import { useEffect, useState } from 'react';
import './App.css';
import AddHeroModal from './components/AddHeroModal';
import HeroCard from './components/HeroCard';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [heroes, setHeroes] = useState([]);

  const handleClose = () => {
    setIsOpened(false);
  };

  const fetchData = async () => {
    const res = await fetch("http://localhost:8080/superheroes", {
      method: 'GET',
    });

    if (!res.ok) {
      console.error("There was an issue while fetching superheroes!");
      return;
    }

    const data = await res.json();
    setHeroes(data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      <nav>
        <button onClick={() => setIsOpened(true)}>Create new Hero!</button>
      </nav>
      <div className='main-container'>
        {isOpened && <AddHeroModal isOpened={isOpened} onClose={handleClose} onHeroAdded={fetchData} />}
        {!heroes.length ? (
          <p>
            No Heroes Available
          </p>
        ): heroes.map((hero) => (
          <div key={hero.name}>
            <HeroCard hero={hero}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
