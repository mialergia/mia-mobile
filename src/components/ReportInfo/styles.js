import { StyleSheet } from 'react-native';

import { DARK_GREY, MEDIUM_GREY, SHADOW, WHITE } from 'constants/styles';

const styles = StyleSheet.create({
  container: translateY => ({
    transform: [{ translateY }],
    zIndex: 999,
  }),
  reportContainer: {
    ...SHADOW,
    flexDirection: 'row',
    alignItems: 'center',
    shadowRadius: 7,
    shadowColor: MEDIUM_GREY,
    shadowOpacity: 0.58,
    alignSelf: 'center',
    backgroundColor: WHITE,
    borderRadius: 18,
    width: '80%',
    height: 130,
    marginTop: -40,
    zIndex: 999,
  },
  title: {
    fontSize: 18,
    color: DARK_GREY,
    fontWeight: '500',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 15,
  },
  row: {
    fontSize: 14,
    color: DARK_GREY,
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 10,
    marginBottom: 2,
  },
  infoContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  alertContainer: opacity => ({
    opacity,
  }),
  background: backgroundColor => ({
    backgroundColor,
    width: '100%',
    height: 190,
    position: 'absolute',
    marginTop: -90,
  }),
  alert: backgroundColor => ({
    backgroundColor,
  }),
  alertIcon: backgroundColor => ({
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    backgroundColor,
    height: '100%',
    width: '25%',
  }),
  alertMessage: {
    position: 'absolute',
    left: 25,
    right: 25,
    top: 15,
  },
});

export default styles;
