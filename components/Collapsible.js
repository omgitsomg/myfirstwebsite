import styles from '../styles/Collapsible.module.css'

const Collapsible = (props) => {
    for(let i = 0; i < props.data.length; i++)
    {
        console.log(props.data[i])
    }

    return (
        <div>
            {props.data.map(item => (
                <details className={ styles.detailStyle }>
                    {/*  item list
                    {
                        time: (MM/DD/YYYY), 00:00 AM/PM ;
                        temp;
                        humidity;
                        weatherid;
                        weatherdescription
                    } */}
                    <summary className={ styles.summaryStyle }>{ item[0] }</summary> 
                    <i className={ `wi wi-owm-` + (item[3]).toString() + ` ${ styles.iconStyle }`}></i>
                    <div>
                        <p>Temperature: { item[1] } </p>
                        <p>Humidity: { item[2] } </p>
                        <p>Weather description: { item[4] } </p>
                    </div>
                    
                </details>
            ))}
        </div>
    );

    
}

export default Collapsible;
