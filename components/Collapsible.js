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
                    <summary className={ styles.summaryStyle }>{ item[0] }</summary>
                    <p> { item } </p>
                    <i class={ "wi wi-owm-" + (item[3]).toString()}></i>
                </details>
            ))}
        </div>
    );

    
}

export default Collapsible;
