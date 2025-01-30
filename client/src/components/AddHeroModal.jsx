import React, { useState } from 'react';
import '../App.css'

const AddHeroModal = ({ isOpened, onClose, onHeroAdded }) => {
  const [name, setName] = useState('');
  const [superpower, setSuperpower] = useState('');
  const [humilityScore, setHumilityScore] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (name, superpower, humility_score) => {
    const res = await fetch("http://localhost:8080/superheroes", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            superpower: superpower,
            humility_score: humility_score,
        })
      });

      const result = await res.text();
      setMessage(result);

      if (!res.ok) {
        console.error("There was an issue while adding superhero!");
        return;
      }

      console.log("Superhero added successfully!");
      onHeroAdded();
  }

  return (
    <>
    {isOpened && (
      <>
        <div className="modal-overlay"></div>
        <div id="myModal" className="modal">
            <div className="modal-content">
                <button className="close" onClick={onClose}>&times;</button>
                <h2>Create your hero</h2>
                <div className='input-container'>
                    <div className='input-form'>
                        <label htmlFor="name">Name</label>
                        <input 
                          type='text' 
                          placeholder='batman' 
                          value={name} 
                          onChange={(e) => setName(e.target.value)} 
                        />
                    </div>
                    <div className='input-form'>
                        <label htmlFor="superpower">Superpower</label>
                        <input 
                          type='text' 
                          placeholder='invisibility' 
                          value={superpower} 
                          onChange={(e) => setSuperpower(e.target.value)} 
                        />
                    </div>
                    <div className='input-form'>
                        <label htmlFor="humilityScore">Humility Score</label>
                        <input 
                          type='number' 
                          placeholder='6' 
                          value={humilityScore} 
                          onChange={(e) => setHumilityScore(e.target.value)} 
                        />
                    </div>
                </div>

                <button className='submit-button' onClick={() => onSubmit(name, superpower, humilityScore)}>Submit</button>
                {message && <p>{message}</p>}
            </div>
        </div>
      </>
    )}
    </>
  )
}

export default AddHeroModal;