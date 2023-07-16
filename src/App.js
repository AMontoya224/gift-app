import { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import axios from 'axios';

function App() {
  const [date, setDate] = useState( '' );
  const [confirm, setConfirm] = useState( true );
  const [data, setData] = useState( false );

  const onHandle = e => {
    setDate( e.target.value );
  };

  const onSubmit = e => {
    e.preventDefault();
    (date === '2021-12-21' ? setConfirm( false ) : alert('error'))
  };

  useEffect( ()=>{
    axios.get( 'https://api.npoint.io/b96babeb4a83400b2232' )
      .then( res=>{
        setData( res.data );
        console.log(res.data)
      });
  },[] );

  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      {confirm ? 
      <div className='login'>
        <form onSubmit={onSubmit}>
          <input type='date' value={date} onChange={onHandle}/>
          <button type={ date.length < 1 ? 'reset' : 'submit'} className={ date.length < 1 ? 'submit not-submit' : 'submit'}>
            Enter
          </button>
        </form>
      </div>
      :
      data ? <Home setConfirm={setConfirm} data={data}/> : <></>}
    </div>
  );
}

export default App;
