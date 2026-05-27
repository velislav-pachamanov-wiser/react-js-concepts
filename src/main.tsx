import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Provider } from 'react-redux'
import './index.css'
import { router } from './router'
import { store } from './store'
import { createTheme, ThemeProvider } from '@mui/material/styles'


const queryClient = new QueryClient()

const inputWhite = '#fff'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#c084fc' },
    text: { primary: inputWhite, secondary: 'rgba(255, 255, 255, 0.7)' },
  },
  typography: {
    fontFamily: 'system-ui, "Segoe UI", Roboto, sans-serif',
    fontSize: 16,
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
        fullWidth: true,
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'rgba(255, 255, 255, 0.7)',
          '&.Mui-focused': {
            color: inputWhite,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          color: inputWhite,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.5)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: inputWhite,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: inputWhite,
          },
        },
        input: {
          color: inputWhite,
          '&::placeholder': {
            color: inputWhite,
            opacity: 0.7,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: 'rgba(255, 255, 255, 0.7)',
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: inputWhite,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: 'rgba(255, 255, 255, 0.5)',
          '&.Mui-checked': {
            color: inputWhite,
          },
        },
      },
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
