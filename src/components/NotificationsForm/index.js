import React, { useCallback } from 'react';
import { arrayOf, func, number, shape, string } from 'prop-types';
import { View, FlatList, Text, Switch, Alert } from 'react-native';
import { useStatus, LOADING } from '@rootstrap/redux-tools';
import strings from 'locale';
import { isEqual } from 'lodash';

import Button from 'components/common/Button';
import ErrorView from 'components/common/ErrorView';
import Separator from 'components/common/Separator';
import { updateUserInfo } from 'actions/userActions';
import useForm from 'hooks/useForm';
import styles from './styles';

const NotificationsForm = ({ notificationsList, initialData, onSubmit, askForPermission }) => {
  const { error, status } = useStatus(updateUserInfo);

  const initialValues = {};
  notificationsList.forEach(({ id }) => {
    initialValues[id] = initialData.includes(id);
  });

  const { values, errors, handleValueChange, handleSubmit } = useForm(
    {
      onSubmit,
      validateOnBlur: false,
      initialValues,
    },
    [onSubmit],
  );

  const switchValue = useCallback(
    async (id, isChecked) => {
      try {
        let isPermissionAllowed = false;

        if (isChecked) {
          const status = await askForPermission();
          isPermissionAllowed = status === 'granted';
          if (isPermissionAllowed) {
            handleValueChange(id, isChecked);
          }
        } else {
          handleValueChange(id, isChecked);
        }
      } catch (err) {
        Alert.alert(strings.COMMON.error, strings.DIARY_ENTRY.currentLocationError, [
          strings.COMMON.error,
          strings.COMMON.somethingWentWrong,
          { text: strings.COMMON.accept },
        ]);
      }
    },
    [askForPermission, handleValueChange],
  );

  const renderItem = useCallback(
    ({ item: { texto, id } }) => {
      const isChecked = values[id];

      return (
        <View style={styles.rowContainer}>
          <Text style={styles.rowTitle}>{texto}</Text>
          <Switch onValueChange={() => switchValue(id, !isChecked)} value={isChecked} />
        </View>
      );
    },
    [switchValue, values],
  );

  const renderSeparator = useCallback(() => <Separator />, []);

  return (
    <>
      <FlatList
        data={notificationsList}
        keyExtractor={({ id }, index) => `${id}-${index}`}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        ListHeaderComponent={renderSeparator}
        ListFooterComponent={renderSeparator}
      />
      <ErrorView errors={{ ...errors, error }} />
      <Button
        title={strings.COMMON.save}
        onPress={handleSubmit}
        loading={status === LOADING}
        disabled={isEqual(values, initialValues)}
      />
    </>
  );
};

NotificationsForm.propTypes = {
  onSubmit: func.isRequired,
  notificationsList: arrayOf(
    shape({
      id: number.isRequired,
      texto: string.isRequired,
    }),
  ),
  initialData: arrayOf(number),
  askForPermission: func.isRequired,
};

export default NotificationsForm;
