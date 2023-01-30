import { GridItemType } from '../../types/GridItemType'
import * as C from './styles'
import b7svg from '../../svgs/b7.svg'
import { Items } from '../../data/items'

type Props = {
    item: GridItemType,
    onClick: () => void
}

export const GridItem = ({item, onClick}: Props) => {
    return(
        <C.Container 
            shownBackground = {item.permanentShown || item.shown}
            onClick={onClick}
        >
             {item.permanentShown === false && item.shown === false &&
                <C.GridItem src={b7svg} alt="b7web" opacity={.1} />
               
            }
            {(item.permanentShown === true || item.shown === true) && item.item != null &&
                <C.GridItem src={Items[item.item].icon} alt="" />
            }
        </C.Container>
      
    )
}