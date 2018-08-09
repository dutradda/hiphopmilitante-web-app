import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#616161',
      light: '#8e8e8e',
      dark: '#373737',
      contrastText: '#fff'
    },
    secondary: {
      main: '#bf360c',
      light: '#f9683a',
      dark: '#870000',
      contrastText: '#fff'
    }
  }
})
