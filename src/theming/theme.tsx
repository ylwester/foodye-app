import { extendTheme } from 'native-base'

const customTheme = extendTheme({
  colors: {
    custom: {
      0: '#ffffff',
      10: '#a9abb2',
      20: '#7d808a',
      50: '#454a58',
      100: '#040216'
    }
  },
  components: {
    Text: {
      baseStyle: () => {
        return {
          _light: {
            color: 'custom.100'
          },
          _dark: {
            color: 'custom.10'
          }
        }
      }
    }
  },
  fontConfig: {
    Poppins: {
      100: {
        normal: 'Poppins_100Thin',
        italic: 'Poppins_100Thin_Italic'
      },
      200: {
        normal: 'Poppins_200ExtraLight',
        italic: 'Poppins_200ExtraLight_Italic'
      },
      300: {
        normal: 'Poppins_300Light',
        italic: 'Poppins_300Light_Italic'
      },
      400: {
        normal: 'Poppins_400Regular',
        italic: 'Poppins_400Regular_Italic'
      },
      500: {
        normal: 'Poppins_500Medium',
        italic: 'Poppins_500Medium_Italic'
      },
      600: {
        normal: 'Poppins_600SemiBold',
        italic: 'Poppins_600SemiBold_Italic'
      },
      700: {
        normal: 'Poppins_700Bold',
        italic: 'Poppins_700Bold_Italic'
      }
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
    mono: 'Poppins'
  }
})

export default customTheme
