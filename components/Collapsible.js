import { Card, CardBody, CardHeader, Heading, HStack, VStack, StackDivider, Divider} from '@chakra-ui/react';
import styles from '../styles/Collapsible.module.css'

const Collapsible = (props) => {

    // time: (MM/DD/YYYY), 00:00 AM/PM;
    // temp;
    // humidity;
    // weatherid;
    // weatherdescription

    // Convert Kelvin to fahrenheit
    var fahrenheit = (props.temperature - 273.15) * (9/5) + 32;
    fahrenheit = fahrenheit.toFixed(0);
    var redOpacity = 0;
    var blueOpacity = 0;
    switch(true) {
        case fahrenheit < 30:
            redOpacity = 100;
            blueOpacity = 400;
            break;
        case fahrenheit < 40:
            redOpacity = 100;
            blueOpacity = 300;
            break;
        case fahrenheit < 50:
            redOpacity = 100;
            blueOpacity = 200;
            break;
        case fahrenheit < 60:
            redOpacity = 200;
            blueOpacity = 200;
            break;
        case fahrenheit < 70:
            redOpacity = 300;
            blueOpacity = 100;
            break;
        case fahrenheit < 80:
            redOpacity = 400;
            blueOpacity = 100;
            break;
        default:
            redOpacity = 500;
            blueOpacity = 100;
            break;
    }

    return (
        <Card boxShadow="xl" bgGradient={`linear(to-br, red.${redOpacity}, blue.${blueOpacity})`}>
            <CardHeader>
                <Heading size="lg"> { props.date } </Heading>
            </CardHeader>
            <Divider />
            <CardBody>
                <HStack divider={<StackDivider borderColor='gray.500' />}>
                    <i className={ `wi wi-owm-` + (props.weatherid).toString() + ` ${ styles.iconStyle }`}></i>
                    <VStack align="flex-start"
                        divider={<StackDivider borderColor='gray.500' />}>
                        <p>Temperature: { fahrenheit } </p>
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
