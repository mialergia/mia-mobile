import React, { useCallback, useEffect } from 'react';
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import strings from 'locale';
import { object } from 'prop-types';

import TouchableText from 'components/common/TouchableText';
import Separator from 'components/common/Separator';
import BackArrow from 'components/common/Icons/BackArrow';
import { logout, updateUserInfo } from 'actions/userActions';
import { SETTINGS_SECTIONS } from 'constants/app';
import { directions } from 'utils/helpers';
import styles from './styles';

const SettingsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const logoutRequest = useCallback(() => dispatch(logout()), [dispatch]);

  useEffect(() => {
    dispatch(updateUserInfo.reset());
  });

  const renderSeparator = useCallback(() => <Separator containerStyle={styles.separator} />, []);

  const renderItem = useCallback(
    ({ item: { title, icon, nextScreen } }) => (
      <TouchableOpacity
        style={styles.rowContainer}
        onPress={() => (nextScreen ? navigation.navigate(nextScreen) : {})}>
        <View style={styles.rowTitleContainer}>
          <Image source={icon} style={styles.icon} />
          <Text>{title}</Text>
        </View>
        <BackArrow height={25} width={25} direction={directions.RIGHT} />
      </TouchableOpacity>
    ),
    [navigation],
  );

  return (
    <SafeAreaView style={styles.container} forceInset={{ bottom: 'never', top: 'always' }}>
      <Text style={styles.titleScreen}>{strings.SETTINGS_SCREEN.title}</Text>
      <FlatList
        keyExtractor={({ title }, index) => `${title}-${index}`}
        data={SETTINGS_SECTIONS}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        ListHeaderComponent={renderSeparator}
        ListFooterComponent={renderSeparator}
      />
      <TouchableText
        textStyle={styles.logOutButton}
        onPress={logoutRequest}
        text={strings.SETTINGS_SCREEN.logout}
      />
    </SafeAreaView>
  );
};

SettingsScreen.propTypes = {
  navigation: object.isRequired,
};

export default SettingsScreen;
