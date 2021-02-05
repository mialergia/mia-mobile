import React, { useMemo, useState } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import { string, object, bool } from 'prop-types';

import eyeIcon from 'images/eye.png';
import hideEyeIcon from 'images/hideEye.png';
import { getStyles, placeholderTextColor } from './styles';

const Input = ({ error, inputStyle, secureTextEntry = false, ...props }) => {
  const styles = useMemo(() => getStyles(secureTextEntry), [secureTextEntry]);
  const [showPassword, setShowPassword] = useState(secureTextEntry);

  return (
    <View style={[styles.inputContainer, inputStyle]}>
      <TextInput
        style={styles.input}
        placeholderTextColor={placeholderTextColor}
        returnKeyType="done"
        {...props}
        secureTextEntry={showPassword}
      />
      {secureTextEntry && (
        <TouchableOpacity
          style={styles.passwordIcon}
          onPress={() => setShowPassword(!showPassword)}>
          <Image source={showPassword ? eyeIcon : hideEyeIcon} />
        </TouchableOpacity>
      )}
      {error && <Text>{error}</Text>}
    </View>
  );
};

Input.propTypes = {
  error: string,
  inputStyle: object,
  secureTextEntry: bool,
};

export default Input;
