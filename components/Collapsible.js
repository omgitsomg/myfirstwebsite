import { Card, CardBody, CardHeader, Heading, SimpleGrid } from '@chakra-ui/react';
import styles from '../styles/Collapsible.module.css'

const Collapsible = (props) => {

    // time: (MM/DD/YYYY), 00:00 AM/PM;
    // temp;
    // humidity;
    // weatherid;
    // weatherdescription

    return (
        <div className={ styles.container }>
            <Card size="sm" width="max-content">
                <CardHeader>
                    <Heading size="lg"> { props.date } </Heading>
                </CardHeader>
                <CardBody
                    direction={{ base: 'column', sm: 'row' }}
                    overflow="hidden"
                >
                    <i className={ `wi wi-owm-` + (props.weatherid).toString() + ` ${ styles.iconStyle }`}></i>
                    <div>
                        <p>Temperature: { props.temperature } </p>
                        <p>Humidity: { props.humidity } </p>
                        <p>Weather description: { props.weather_desc } </p>
                        <Card></Card>
                    </div>
                </CardBody>
            </Card>
        </div>
    );

    
}

export default Collapsible;
