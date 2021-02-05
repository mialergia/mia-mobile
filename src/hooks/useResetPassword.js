import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useStatus, SUCCESS } from '@rootstrap/redux-tools';
import { useNavigation } from '@react-navigation/native';
import strings from 'locale';

import { resetPassword } from 'actions/userActions';
import { EMAIL_SENT_MODAL } from 'constants/screens';

const useResetPassword = ({ email }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { status } = useStatus(resetPassword);

  useEffect(() => {
    if (status === SUCCESS) {
      navigation.goBack();
      navigation.navigate(EMAIL_SENT_MODAL, {
        email,
        actionText: strings.RESET_PASSWORD.emailAction,
      });
      return () => dispatch(resetPassword.reset());
    }
  }, [dispatch, email, navigation, status]);
};

export default useResetPassword;
