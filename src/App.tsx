// eslint-disable-next-line
import * as C from './App.styles';
//eslint-disable-next-line 
import logoImage from './assets/devmemory_logo.png';
import RestartIcon from './svgs/restart.svg'
import { InfoItem } from './components/InfoItem';
import { Button } from './components/Button';
import { useEffect, useState } from 'react';
import { GridItemType } from './types/GridItemType';
import { Items } from  './data/items'
import { GridItem } from './components/GridItem';

const App = () => {

  const [play, setPlay] = useState<boolean>(false)
  const [time, setTime] = useState<number>(0)
  const [moveCount, setMoveCount] = useState<number>(0)
  const [shownCount, setShownCount] = useState<number>(0)
  const [gridItems, setGridItems] = useState<GridItemType[]>([])

  useEffect(()=> {
    resetAndCreateGrid()
  },[])

  const resetAndCreateGrid = () => {
      //passo 1 resetar o jogo
      setTime(0);
      setMoveCount(0);
      setShownCount(0);      

      //passo 2 criar o grip e começar o jogo
      // 2.1 - criar um grid vazio
      const tempGrid: GridItemType[] = [];

      for(let i = 0; i < (Items.length * 2); i ++){
        tempGrid.push({
          item: null,
          shown: false,
          permanentShown: false
        })
      }

      //2.2 preencher o Grid
      for(let w = 0; w < 2; w++){
        for(let i = 0; i < Items.length; i++){
          let pos = -1;
          while(pos < 0 || tempGrid[pos].item !== null){
            pos = Math.floor(Math.random() * (Items.length * 2))
          }
          
          tempGrid[pos].item = i;


        }
      }
      //2.3 jogar no state
      setGridItems(tempGrid)
      

      //passo 3 começar o jogo
      setPlay(true);
  }

  const handleItemClick = (index: number) => {
    
  }

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
          <img src={logoImage} width="200" alt=""/>
        </C.LogoLink>
        <C.InfoArea>
          <InfoItem label="Tempo" value="00:00" />
          <InfoItem label="movimento" value="0" />
        </C.InfoArea>    
        
        <Button label='Reiniciar' icon={RestartIcon} onClick={resetAndCreateGrid} />
        
      </C.Info>
      <C.GridArea>
        <C.Grid>
          {gridItems.map((item, index) => (
                <GridItem 
                  key={index}
                  item={item}
                  onClick={()=>handleItemClick(index)}

                />
            ))}
        </C.Grid>
      </C.GridArea> 
      
    </C.Container>
  );
}

export default App;
