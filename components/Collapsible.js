import { Card, CardBody, CardHeader, Heading, HStack, VStack, StackDivider, Divider} from '@chakra-ui/react';
import styles from '../styles/Collapsible.module.css'

const Collapsible = (props) => {

    // time: (MM/DD/YYYY), 00:00 AM/PM;
    // temp;
    // humidity;
    // weatherid;
    // weatherdescription

    var kelvinToFahrenheit = (props.temperature - 273.15) * (9/5) + 32;
    kelvinToFahrenheit = kelvinToFahrenheit.toFixed(0);

    return (
        <Card>
            <CardHeader>
                <Heading size="lg"> { props.date } </Heading>
            </CardHeader>
            <Divider />
            <CardBody>
                <HStack divider={<StackDivider borderColor='gray.500' />}>
                    <i className={ `wi wi-owm-` + (props.weatherid).toString() + ` ${ styles.iconStyle }`}></i>
                    <VStack align="flex-start"
                        divider={<StackDivider borderColor='gray.500' />}>
                        <p>Temperature: { kelvinToFahrenheit } </p>
                        <p>Humidity: { props.humidity } </p>
                        <p>Weather description: { props.weather_desc } </p>
                        <Card></Card>
                    </VStack>
                </HStack>
            </CardBody>
        </Card>
    );

    
}

export default Collapsible;
