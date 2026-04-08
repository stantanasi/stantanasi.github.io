'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
  },
});

export default theme;