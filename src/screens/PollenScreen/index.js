import React from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';

import strings from 'locale';
import PollenCircle from 'components/common/PollenCircle';
import { getLongFormattedDate } from 'utils/dateHelpers';
import Header from 'components/common/Header';
import useReports from 'hooks/useReports';
import Error from 'components/common/Error';
import { isEmpty } from 'lodash';
import AllergyAlert from 'components/common/AllergyAlert';
import styles from './styles';

const PollenScreen = () => {
  const { onGetReports, reports, error } = useReports();

  if (error) {
    return <Error errorMessage={error} backbutton={false} />;
  }

  return (
    !isEmpty(reports) && (
      <>
        <Header
          title={strings.formatString(
            strings.POLLEN_SCREEN.headerTitle,
            getLongFormattedDate(reports?.fecha),
          )}
          backButton={false}
          textStyle={styles.headerText}
        />
        <ScrollView refreshControl={<RefreshControl refreshing={false} onRefresh={onGetReports} />}>
          <View style={styles.container}>
            {reports.alerta?.warningMessage && <AllergyAlert alert={reports?.alerta} />}
            {reports.niveles.map(pollen => (
              <PollenCircle key={pollen.id} pollen={pollen} />
            ))}
          </View>
        </ScrollView>
      </>
    )
  );
};

export default PollenScreen;
