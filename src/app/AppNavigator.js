import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import PropTypes from 'prop-types';

import Navigator from './StackNavigator';

function AppNavigator({ dispatch, nav }) {
  return (
    <Navigator
      navigation={
        addNavigationHelpers({
          dispatch,
          state: nav,
      })}
    />
  );
}

const mapStateToProps = (state) => {
  return { nav: state.nav };
};

AppNavigator.propTypes = {
  dispatch: PropTypes.func,
  nav: PropTypes.object,
};

AppNavigator.defaultProps = {
  dispatch: null,
  nav: null,
};

export default connect(mapStateToProps)(AppNavigator);
