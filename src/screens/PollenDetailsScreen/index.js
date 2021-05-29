import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { string, shape, object } from 'prop-types';
import strings from 'locale';

import { getLevelColor, getGroupTitle } from 'utils/helpers';
import Header from 'components/common/Header';
import paperClipIcon from 'images/paperClip.png';
import usePollenDetails from 'hooks/usePollenDetails';
import Loading from 'components/common/Loading';
import Error from 'components/common/Error';
import { PDF_VIEWER } from 'constants/screens';
import { WHITE } from 'constants/styles';
import { getStyles } from './styles';

const PollenDetailsScreen = ({
  navigation,
  route: {
    params: { id, tipo },
  },
}) => {
  const styles = getStyles();
  const { loading, reports, error } = usePollenDetails(id);

  if (error) {
    return <Error errorMessage={error} backbutton />;
  }

  return loading || !reports ? (
    <Loading />
  ) : (
    <>
      <Header title={getGroupTitle(tipo).title} textStyle={styles.headerText} arrowColor={WHITE} />
      <ScrollView contentContainerStyle={styles.container}>
        {reports.niveles?.map(({ nombreComun, nivel, id, pdfUrl }) => {
          const level = nivel;
          const borderColor = getLevelColor(level);

          return (
            <View key={id} style={[styles.answerContainer, { borderColor }]}>
              <Text style={styles.question}>{`${nombreComun}`}</Text>
              <Text style={styles.answer}>{strings.POLLEN_CIRCLE.nivel + level}</Text>
              {pdfUrl && (
                <TouchableOpacity
                  style={styles.pdfContainer}
                  onPress={() => navigation.navigate(PDF_VIEWER, { pdfUrl })}>
                  <Image style={styles.pdfIcon} source={paperClipIcon} />
                  <Text style={styles.pdfTitle}>{strings.POLLEN_CIRCLE.showPdf}</Text>
                </TouchableOpacity>
              )}
            </View>
          );
        })}
      </ScrollView>
    </>
  );
};

PollenDetailsScreen.propTypes = {
  navigation: object.isRequired,
  route: shape({
    params: shape({
      id: string.isRequired,
      tipo: string.isRequired,
    }),
  }),
};

export default PollenDetailsScreen;
