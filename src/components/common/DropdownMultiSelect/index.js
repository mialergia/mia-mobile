import React from 'react';
import MultiSelect from 'react-native-multiple-select';

import strings from 'locale';
import { GREEN, VERY_LIGHT_GREY, BLACK } from 'constants/styles';
import styles from './styles';

const DropdownMultiSelect = ({ inputName, items, selectedItems, handleValueChange }) => {
  const onSelectedItemsChange = selectedItems => {
    handleValueChange(inputName, selectedItems);
  };

  return (
    <MultiSelect
      hideTags
      items={items}
      uniqueKey="id"
      onSelectedItemsChange={onSelectedItemsChange}
      selectedItems={selectedItems}
      selectText={strings.PERSONAL_INFO.alergiasTitle}
      fontSize={15}
      styleTextDropdown={styles.placeholder}
      searchInputStyle={styles.placeholder}
      searchInputPlaceholderText={strings.PERSONAL_INFO.alergiasSearch}
      tagRemoveIconColor={VERY_LIGHT_GREY}
      tagBorderColor={VERY_LIGHT_GREY}
      tagTextColor={VERY_LIGHT_GREY}
      selectedItemTextColor={VERY_LIGHT_GREY}
      selectedItemIconColor={GREEN}
      itemTextColor={BLACK}
      displayKey={strings.PERSONAL_INFO.alergiasDisplayKey}
      styleDropdownMenu={styles.container}
      styleInputGroup={styles.container}
      styleDropdownMenuSubsection={styles.containerSubsection}
      hideSubmitButton="true"
      hideDropdown="true"
      itemFontSize={16}
      textInputProps={{ autoFocus: false }}
    />
  );
};

export default DropdownMultiSelect;
