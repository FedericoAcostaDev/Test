import { createTheme } from '@mui/material/styles'
import { primary } from './colors';

const theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: "#FCBF49",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});
export default theme