import { useEffect, useState } from 'react';
import './App.css';
import AddHeroModal from './components/AddHeroModal';
import HeroCard from './components/HeroCard';
import { URL } from './utils/const';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [heroes, setHeroes] = useState([]);

  // Function to close the modal
  const handleClose = () => {
    setIsOpened(false);
  };

  // Function to fetch superheroes data from the server
  const fetchData = async () => {
    const res = await fetch(URL, {
      method: 'GET',
    });

    // Handle bad response
    if (!res.ok) {
      console.error("There was an issue while fetching superheroes!");
      return;
    }

    const data = await res.json();
    // Save fetched data to array
    setHeroes(data);
  }

  // Fetch data when the component mounts
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
