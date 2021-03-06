import * as React from 'react';
import {
  Text,
	View
} from 'react-native';
import PropTypes from 'prop-types';
import { Switch } from 'react-native-paper';
import {styles} from './styles';
import Colors from '../../utils/Colors';

const LabelSwitch = ({ title = "", value = true, onValueChange}) => {
	return (
	<View style={styles.container}>
		<Text style={styles.label}>{title}</Text>
		<Switch value={value} color={Colors.primaryColor} onValueChange={onValueChange} />
	</View>
	);
};

LabelSwitch.propTypes = {
  title: PropTypes.string,
  value: PropTypes.bool,
  onValueChange: PropTypes.func.isRequired,
}

export default LabelSwitch;