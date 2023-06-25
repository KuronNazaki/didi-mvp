import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useHeaderHeight } from '@react-navigation/elements';

const useNavigationHeight = () => {
  const headerHeight = useHeaderHeight();
  const tabBarHeight = useBottomTabBarHeight();

  return {
    headerHeight,
    tabBarHeight,
  };
};

export default useNavigationHeight;
