import React from 'react';
import { string } from 'prop-types';
import { View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Pdf from 'react-native-pdf';

import BackButton from 'components/common/BackButton';
import { routeShape } from 'constants/shapes';
import styles from './styles';

const PdfViewer = ({
  route: {
    params: { pdfUrl },
  },
}) => (
  <SafeAreaView style={styles.container} forceInset={{ bottom: 'never' }}>
    <BackButton />
    <View style={styles.pdfContainer}>
      <Pdf source={{ uri: pdfUrl }} style={styles.pdf} />
    </View>
  </SafeAreaView>
);

PdfViewer.propTypes = {
  route: routeShape({ pdfUrl: string.isRequired }),
};

export default PdfViewer;
