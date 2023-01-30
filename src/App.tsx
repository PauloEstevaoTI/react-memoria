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
import { formatTime } from './helpers/formatTime';

const App = () => {

  const [play, setPlay] = useState<boolean>(false)
  const [time, setTime] = useState<number>(0)
  const [moveCount, setMoveCount] = useState<number>(0)
  const [shownCount, setShownCount] = useState<number>(0)
  const [gridItems, setGridItems] = useState<GridItemType[]>([])

  useEffect(()=> {
    resetAndCreateGrid()
  },[])

  useEffect(() => {
    const timer = setInterval(() => {
      if(play){
        setTime(time + 1)
      }      
    }, 1000)
    return () => clearInterval(timer)

  },[play, time])

  // verify if opened are equal
  useEffect(()=> {
    if(shownCount === 2 ){
      let opened = gridItems.filter(item => item.shown === true)
      
      if(opened.length === 2 ){
        // v1 - if both are equal, make every shown permanent
       
        if(opened[0].item === opened[1].item){        
          let tmpGrid = [...gridItems]   

          for(let i in tmpGrid){
            if(tmpGrid[i].shown){
              tmpGrid[i].permanentShown = true;
              tmpGrid[i].shown = false
            }
          }
          setGridItems(tmpGrid);
          setShownCount(0);
          
        }else {   
          //v2 - if they are NOT equal, close all 'shown'
         setTimeout(()=> {
            let tmpGrid = [...gridItems]   
            for(let i in tmpGrid){
            tmpGrid[i].shown = false
          }
          setGridItems(tmpGrid);
          setShownCount(0);  
         },2000)
            
        }

    

        setMoveCount(moveCount => moveCount + 1)
      }
    }
  },[shownCount, gridItems])

  //verify if gamer is over
  useEffect(()=> {
    if(moveCount > 0 && gridItems.every(item => item.permanentShown === true)){
      setPlay(false)
    }
  },[moveCount, gridItems])

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
    if(play && index !== null && shownCount < 2){
      let tmpGrid = [...gridItems];

      if(tmpGrid[index].permanentShown === false && tmpGrid[index].shown === false){
        tmpGrid[index].shown = true;
        setShownCount(shownCount + 1)
      }

      setGridItems(tmpGrid);
    }
  }

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
          <img src={logoImage} width="200" alt=""/>
        </C.LogoLink>
        <C.InfoArea>
          <InfoItem label="Tempo" value={formatTime(time)} />
          <InfoItem label="movimento" value={moveCount.toString()} />
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
