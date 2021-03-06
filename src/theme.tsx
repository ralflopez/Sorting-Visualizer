const theme = {
    palette: {
        primary: {
            color: '#7678ED',
            text: '#FFFFFF'
        },
        secondary: {
            color: '#87ED76',
            text: '#272727'
        },
        tertiary: {
            color: '#E3ED76',
            text: '#272727'
        },
        light: {
            color: '#FFFEFE',
            text: '#272727',
            100: '#F6F6F6'
        },
        dark: {
            color: '#272727',
            text: '#FFFEFE',
            100: '#2F2F2F'
        },
        gray: {
            color: '#535353',
            text: '#FFFEFE',
        },
        background: {
            // color: '#F6F6F6',
            color: '#414141',
            text: '#272727'
        },
        boxShadow: {
            prop: '0px 4px 3px rgba(0, 0, 0, 0.05);'
        }
    },
    sizing: {
        width: {
            maxWidth: '1200px'
        },
        padding: {
            button: '0.8rem 1.2rem'
        },
        rounded: {
            sm: '0.5rem'
        },
    },
    transition: {
        basic: 'all 300ms ease-out'
    }
}

export default theme