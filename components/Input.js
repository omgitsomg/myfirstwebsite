import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys)

const pill = definePartsStyle({
    field: {
        border: '1px solid',
        borderColor: 'blue.500',
        background: 'gray.50',
        borderRadius: 'full',
    
        // Let's also provide dark mode alternatives
        _dark: {
          borderColor: 'gray.600',
          background: 'gray.800',
        },
    },
})

export const inputTheme = defineMultiStyleConfig({
    variants: { pill },
})