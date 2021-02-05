import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { bool, func, string } from 'prop-types';

import BackArrow from 'components/common/Icons/BackArrow';
import Separator from 'components/common/Separator';
import { capitalizeFirstLetter, directions } from 'utils/helpers';
import styles from './styles';

const ExpandableItem = ({
  onPress,
  title,
  renderDetails,
  shouldHide = false,
  lastItem = false,
}) => {
  const [showPdfs, setShowPdfs] = useState(false);

  useEffect(() => {
    if (shouldHide) {
      setShowPdfs(false);
    }
  }, [shouldHide]);

  return (
    <>
      <Separator />
      <TouchableOpacity
        style={styles.rowContainer}
        onPress={() => {
          onPress();
          setShowPdfs(!showPdfs);
        }}>
        <Text style={styles.title}>{capitalizeFirstLetter(title)}</Text>
        <BackArrow height={25} width={25} direction={showPdfs ? directions.UP : directions.DOWN} />
      </TouchableOpacity>
      {showPdfs && renderDetails()}
      {lastItem && <Separator />}
    </>
  );
};

ExpandableItem.propTypes = {
  onPress: func,
  title: string.isRequired,
  renderDetails: func.isRequired,
  shouldHide: bool,
  lastItem: bool,
};

export default ExpandableItem;
