import { MAIN_SCREEN } from 'constants/screens';
import PollenScreen from 'screens/PollenScreen';

import { renderWithNavigation, configureAuthenticatedStore } from '../helpers';

describe('<PollenScreen />', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = configureAuthenticatedStore();
    wrapper = renderWithNavigation(PollenScreen, store);
  });

  it('should render the main screen', () => {
    expect(wrapper.queryByTestId(MAIN_SCREEN)).toBeTruthy();
  });

  it('should render the logout', () => {
    expect(wrapper.queryByTestId('logout-button')).toBeTruthy();
  });

  it('should render the welcome message in screen', () => {
    expect(wrapper.queryByText("Hey example@rootstrap.com, you're logged in!")).toBeTruthy();
  });
});
