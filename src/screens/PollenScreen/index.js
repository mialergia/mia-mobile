import React, { useRef } from 'react';
import { View, RefreshControl, Animated } from 'react-native';
import PollenCircle from 'components/common/PollenCircle';
import { getLongFormattedDate } from 'utils/dateHelpers';
import Header from 'components/common/AnimatedHeader';
import useReports from 'hooks/useReports';
import Error from 'components/common/Error';
import { isEmpty } from 'lodash';
import ReportInfo from 'components/ReportInfo';
import styles from './styles';

const PollenScreen = () => {
  const { onGetReports, reports, error } = useReports();
  const scrollY = useRef(new Animated.Value(0)).current;
  const { alerta, alerta: { warningMessage } = {} } = reports || {};

  if (error) {
    return <Error errorMessage={error} backbutton={false} />;
  }

  return (
    !isEmpty(reports) && (
      <Animated.View style={styles.container}>
        <Header backButton={false} textStyle={styles.headerText} scrollY={scrollY} />
        <ReportInfo scrollY={scrollY} date={getLongFormattedDate(reports?.fecha)} alert={alerta} />
        <Animated.ScrollView
          style={styles.scrollView(warningMessage)}
          refreshControl={<RefreshControl refreshing={false} onRefresh={onGetReports} />}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
            useNativeDriver: false,
          })}
          showsVerticalScrollIndicator={false}>
          <View style={styles.pollenContainer(warningMessage)}>
            {reports.niveles.map(pollen => (
              <PollenCircle key={pollen.id} pollen={pollen} />
            ))}
          </View>
        </Animated.ScrollView>
      </Animated.View>
    )
  );
};

export default PollenScreen;
