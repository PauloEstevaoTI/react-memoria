/* eslint-disable jsx-a11y/anchor-is-valid */
import './styles.css'
import logoImage from './assets/devmemory_logo.png'


const App = () => {
  return (
    <div className='container'>
      <div className='info'>
        <a className='logoLink' href="">
          <img src={logoImage} width="200" alt=""/>
        </a>
        <div className="infoarea">

        </div>
        
        
        <button>Reiniciar</button>
      </div>

      <div className="gridArea">
      ...
      </div>
      
    </div>
  );
}

export default App;
