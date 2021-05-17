import React, { useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import { object } from 'prop-types';
import strings from 'locale';

import Header from 'components/common/AnimatedHeader';
import Button from 'components/common/Button';
import { SYMPTOMS_SURVEY } from 'constants/screens';
import DiaryButton from 'components/common/DiaryButton';
import useDiaryEntries from 'hooks/useDiaryEntries';
import Error from 'components/common/Error';
import Loading from 'components/common/Loading';
import EmptyState from 'components/common/EmptyState';
import styles from './styles';

const SymptomsScreen = ({ navigation }) => {
  const { diaryEntries, loading, error } = useDiaryEntries();

  const renderMonthSections = useCallback(
    ({ item: { date, entries } }) => (
      <>
        <Text style={styles.sectionTitle}>{date}</Text>
        <FlatList
          keyExtractor={({ fecha }, index) => `${index}-${fecha}`}
          style={styles.buttonsContainer}
          data={entries}
          renderItem={({ item }) => <DiaryButton diaryEntry={item} />}
        />
      </>
    ),
    [],
  );

  if (error) {
    return <Error errorMessage={error} backbutton={false} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header title={strings.DIARY_ENTRY.headerTitle} />
      <View style={styles.container}>
        {diaryEntries.length ? (
          <FlatList
            keyExtractor={({ date }, index) => `${index}-${date}`}
            contentContainerStyle={styles.sectionContainer}
            data={diaryEntries}
            renderItem={renderMonthSections}
          />
        ) : (
          <EmptyState emptyMessage={strings.DIARY_ENTRY.emptyText} />
        )}
        <Button
          title="Añadir nuevo"
          onPress={() => navigation.navigate(SYMPTOMS_SURVEY)}
          roundIcon
        />
      </View>
    </>
  );
};

SymptomsScreen.navigationOptions = {
  title: strings.SYMPTOMS_SCREEN.title,
};

SymptomsScreen.propTypes = {
  navigation: object.isRequired,
};

export default SymptomsScreen;
