import React from 'react';
import types from 'prop-types'

const Header = ({message}) => {
	return (
    <h2 className="Header text-center">
			{message}
		</h2>
	);
};
Header.propTypes = {
	message: types.string
};

Header.defaultProps = {
	message : 'No Header Content'
};

export default Header;