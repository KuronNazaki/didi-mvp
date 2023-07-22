import BoxSvg from './../assets/box-1.svg';
import CalendarSvg from './../assets/calendar-2.svg';
import ProfileSvg from './../assets/profile.svg';
import RouteSquare from './../assets/route-square.svg';
import PeopleSvg from './../assets/people.svg';
import SettingSvg from './../assets/setting-2.svg';

const Svg = {
  Home: (size, color) => <BoxSvg width={size} height={size} color={color} />,
  Planner: (size, color) => (
    <CalendarSvg width={size} height={size} color={color} />
  ),
  Profile: (size, color) => (
    <ProfileSvg width={size} height={size} color={color} />
  ),
  Community: (size, color) => (
    <PeopleSvg width={size} height={size} color={color} />
  ),
  Setting: (size, color) => (
    <SettingSvg width={size} height={size} color={color} />
  ),
  Route: () => {
    return <RouteSquare />;
  },
};

export default Svg;
