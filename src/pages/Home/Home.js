import { useState } from 'react';
import './Home.css';


function Home( props ){
    const {setConfirm, data, selectLan, onSelectLan} = props
    const [photo, setPhoto] = useState( '' )

    const onBtnLan = () => {
        if(!selectLan){
            onSelectLan( true );
        }
        else{
            onSelectLan( false );
        }
    };

    const onReturn = () => {
        setConfirm( true )
    }

    const onPhoto = ( idx ) => {
        setPhoto( idx )
    }

    return (
        <div className='Home'>
            <header>
                <div>
                    <div>
                        <button type='sumit' onClick={onBtnLan}>{selectLan ? 'Spanish' : 'Inglés'}</button>
                        <form onSubmit={onReturn}>
                            <button type='sumit'><span className="material-symbols-outlined">logout</span></button>
                        </form>
                    </div>
                    <h1>{selectLan ? 'Album of Memories' : 'Álbum de los Recuerdos'}</h1>
                    <p>{selectLan ? 'Welcome to this corner with some of our most beautiful moments.' : 'Bienvenida a este rincón con algunos de nuestros momentos más bonitos'}</p>                   
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#d87093" fillOpacity="1" d="M0,96L80,90.7C160,85,320,75,480,64C640,53,800,43,960,48C1120,53,1280,75,1360,85.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                </svg>
            </header>
            <main className='container'>
                {data.memories.map( ( memory, idx ) => {
                    return(
                        <div key={idx}>
                            <h3>{selectLan ? memory.titleEn : memory.title }</h3>
                            <h5>{ memory.date }</h5>
                            <p>{selectLan ? memory.descriptionEn : memory.description }</p>
                            <span className="material-symbols-outlined" onClick={() => onPhoto(idx)}>image</span>
                            <span className={photo === idx ? 'material-symbols-outlined exit active' : 'material-symbols-outlined exit'} onClick={() => onPhoto('')}>cancel</span>
                            <img className={photo === idx ? 'active' : ''}src={require(`../../images/${memory.image}`)} alt={memory.titleEn}/>
                        </div>
                    )
                })}
            </main>
            <footer>
                <img className="autor" src={require('./../../images/perfil.jpg')} alt="foto autor"/>
                <div className="informacion">
                    <h3>Andres Montoya Angulo</h3>
                    <p>{selectLan ? 'Electronic Engineer | Programmer | Totally in love with you' : 'Ingeniero Electrónico | Programador | Totalmente enamorado de ti'}</p>
                    <p>{selectLan ? 'I like to make robots, swim and see your beautiful face' : 'Me gusta hacer robots, nadar y ver tu hermosa cara'}</p>
                    <div className="enlaces">
                        <a href="https://web.facebook.com/juan.andres.montoya.angulo" target="_blank" rel="noreferrer"><img className="link" src={require('./../../images/facebook.png')} alt="logo facebook"/></a>
                        <a href="https://www.instagram.com/andresm22_04/" target="_blank" rel="noreferrer"><img className="link" src={require('./../../images/instagram.png')} alt="logo instagram"/></a>
                        <a href="https://github.com/AMontoya224" target="_blank" rel="noreferrer"><img className="link" src={require('./../../images/github.png')} alt="logo github"/></a>
                        <a href="https://www.linkedin.com/in/juan-andres-montoya-angulo-a33253226/" target="_blank" rel="noreferrer"><img className="link" src={require('./../../images/linkedin.png')} alt="logo linkedin"/></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;