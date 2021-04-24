import { useSelector } from 'react-redux';

const useSession = () =>
  useSelector(({ session: { user, info, onesignalPlayerId } }) => ({
    user: user || {},
    info,
    onesignalPlayerId,
  }));

export default useSession;
