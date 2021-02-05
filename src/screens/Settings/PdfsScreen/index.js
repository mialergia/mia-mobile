import React, { useCallback, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-navigation';
import strings from 'locale';

import BackButton from 'components/common/BackButton';
import ExpandableItem from 'components/common/ExpandableItem';
import usePollenPdfs from 'hooks/usePollenPdfs';
import useReports from 'hooks/useReports';
import { PDF_VIEWER } from 'constants/screens';
import { pollenTypes, pollenNames } from 'constants/data';
import styles from './styles';

const PdfsScreen = () => {
  const navigation = useNavigation();
  const [groupId, setGroupId] = useState();
  const { pollens } = usePollenPdfs(groupId);
  const {
    reports: { niveles },
  } = useReports();

  const renderPdfName = useCallback(
    () =>
      pollens?.map(
        ({ id, nombreComun, pdfUrl }, index) =>
          pdfUrl && (
            <TouchableOpacity
              key={`${id}-${index}`}
              style={styles.rowContainer}
              onPress={() => navigation.navigate(PDF_VIEWER, { pdfUrl })}>
              <Text style={styles.pdfName}>{nombreComun}</Text>
            </TouchableOpacity>
          ),
      ),
    [pollens, navigation],
  );

  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      <Text style={styles.screenTitle}>{strings.SETTINGS_SCREEN.pdfsSection}</Text>
      {niveles?.map(({ id, name }, index) => (
        <ExpandableItem
          key={`${id}-${index}`}
          onPress={() => setGroupId(id)}
          title={name === pollenTypes.TREES ? pollenNames.TREES : name}
          renderDetails={renderPdfName}
          shouldHide={groupId !== id}
          lastItem={index === niveles.length - 1}
        />
      ))}
    </SafeAreaView>
  );
};

export default PdfsScreen;
