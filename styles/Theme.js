import { extendTheme } from "@chakra-ui/react";
import { inputTheme } from "../components/Input";

export const myTheme = extendTheme({
    components: {
        Input: inputTheme
    }
})

// Don't need "export default myTheme"