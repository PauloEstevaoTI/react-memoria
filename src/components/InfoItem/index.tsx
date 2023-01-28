import './styles.css'

type Props = {
    label: string;
    value: string
}

export const InfoItem = ({ label, value } : Props) => {
    return(
        <div className='containerInfoItem'>
            <div className="label">{label}</div>
            <div className="value">{value}</div>
        </div>
    );
}