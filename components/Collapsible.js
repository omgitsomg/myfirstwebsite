import { Card, CardBody, CardHeader, Heading, HStack, VStack, StackDivider, Divider, Text} from '@chakra-ui/react';
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
        case fahrenheit < 35:
            redOpacity = 100;
            blueOpacity = 400;
            break;
        case fahrenheit < 45:
            redOpacity = 100;
            blueOpacity = 300;
            break;
        case fahrenheit < 55:
            redOpacity = 100;
            blueOpacity = 200;
            break;
        case fahrenheit < 65:
            redOpacity = 200;
            blueOpacity = 200;
            break;
        case fahrenheit < 75:
            redOpacity = 300;
            blueOpacity = 100;
            break;
        case fahrenheit < 85:
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
                <Heading size="md"> { props.date } </Heading>
            </CardHeader>
            <Divider borderColor='black'/>
            <CardBody>
                <HStack divider={<StackDivider borderColor='black' />}>
                    <i className={ `wi wi-owm-` + (props.weatherid).toString() + ` ${ styles.iconStyle }`}></i>
                    <VStack align="flex-start"
                        divider={<StackDivider borderColor='black' />}>
                        <Text>Temperature: { fahrenheit } </Text>
                        <Text>Humidity: { props.humidity } </Text>
                        <Text>Weather description: { props.weather_desc } </Text>
                        <Card></Card>
                    </VStack>
                </HStack>
            </CardBody>
        </Card>
    );

    
}

export default Collapsible;
