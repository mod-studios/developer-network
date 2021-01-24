// Setting up the theme object. Can be accessed from anywhere within the app without importing it, thanks to the ContextAPI.

const theme = {};

theme.colors = {
    primary: '#121618',
    primaryDark: '#0c0e0f',
    secondary: '#1D2429',
    background: 'white',
    text: '#ffffff',
    danger: '',
    alert: '',
    success: '',
    grayscale: '',
    links: '#00DFB4'
}

theme.fonts = {
    primary: 'Questrial, Be Vietnam, PT Sans Caption, Roboto, sans-serif',
    secondary: 'Be Vietnam, PT Sans Caption, Roboto, sans-serif',
    secondary: 'PT Sans Caption, Roboto, sans-serif'
}

theme.fontSizes = {
    small: '1.2rem',
    medium: '1.6rem',
    large: '1.9rem',
    extra_large: '2.2rem'
}

theme.fontStyles = {
    p: theme.fontSizes.medium,
    h1: theme.fontSizes.large
}

export default theme;