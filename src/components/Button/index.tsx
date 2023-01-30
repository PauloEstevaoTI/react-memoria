import './styles.ts'
import * as C from './styles'

type Props = {
    label: string;
    icon?: any;
    onClick: React.MouseEventHandler<HTMLDivElement>
}

export const Button = ({label, icon, onClick}: Props) => {
    return(
        <C.Container onClick={onClick}>
            {icon &&
                <C.IconArea>
                    <C.IconButton src={icon} alt="" />
                </C.IconArea>
            }
            <C.Label>{label}</C.Label>
        </C.Container>
        
    )
}