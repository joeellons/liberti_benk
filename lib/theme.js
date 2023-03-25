const { extendTheme } = require("@chakra-ui/react");

const styles = {
  global: (props) => ({
    body: {
      bg: "#F6F1F1",
    },
  }),
};
const components = {
	Heading: {
		variants: {
			'landing-title': {
				color: '#146C94',
				textDecoration: 'underline',
				overflowWrap: "normal",
				fontSize: 40,
				textUnderlineOffset: 6,
				textDecorationColor: '#19A7CE',
				textDecorationThickness: 4,
				marginTop: 3,
				marginBottom: 4
			},
			'landing-mini-title': {
				color: '#146C94',
				fontSize: 30,
				marginTop: 3,
				overflowWrap: "normal",
				marginBottom: 4,
				borderBottomStyle: "solid",
				borderBottomWidth: "thick",
				borderBottomColor: "#19A7CE",
			},
		}
	},
  Link: {
    baseStyle: {
      textDecoration: "none",
      _hover: {
        textDecoration: "none",
      },
    },
		variants: {
			'nav-link': {
				color: '#146C94',
				fontSize: 20,
				_hover: {
					textDecoration: 'underline',
					textDecorationColor: '#19A7CE',
					textUnderlineOffset: 6,
					textDecorationThickness: 4,
				}
			}
		}
  },
};

const fonts = {
	heading: "'Libre Baskerville'"
}


const theme = extendTheme({
	styles,
	components,
	fonts
})

export default theme