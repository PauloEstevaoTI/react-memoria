import './styles.css'

type Props = {
    label: string;
    icon?: any;
    onClick: React.MouseEventHandler<HTMLDivElement>
}

export const Button = ({label, icon, onClick}: Props) => {
    return(
        <div className='containerButton' onClick={onClick}>
            {icon &&
                <div className='iconArea'>
                    <img className='iconButton' src={icon} alt="" />
                </div>
            }
            <div className='labelButton'>{label}</div>
        </div>
    )
}