/* eslint-disable jsx-a11y/anchor-is-valid */
import './styles.css'
import logoImage from './assets/devmemory_logo.png';
import RestartIcon from './svgs/restart.svg'
import { InfoItem } from './components/InfoItem';
import { Button } from './components/Button';


const App = () => {

  const resetAndCreateGrid = () => {

  }

  return (
    <div className='container'>
      <div className='info'>
        <a className='logoLink' href="">
          <img src={logoImage} width="200" alt=""/>
        </a>
        <div className="infoArea">
          <InfoItem label="Tempo" value="00:00" />
          <InfoItem label="movimento" value="0" />
        </div>
        
        <Button label='Reiniciar' icon={RestartIcon} onClick={resetAndCreateGrid} />
        
      </div>

      <div className="gridArea">
      ...
      </div>
      
    </div>
  );
}

export default App;
