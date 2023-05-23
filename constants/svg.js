import BoxSvg from './../assets/box-1.svg';
import CalendarSvg from './../assets/calendar-2.svg';
import ProfileSvg from './../assets/profile.svg';

const Svg = {
  Home: (size, color) => <BoxSvg width={size} height={size} color={color} />,
  Planner: (size, color) => (
    <CalendarSvg width={size} height={size} color={color} />
  ),
  Profile: (size, color) => (
    <ProfileSvg width={size} height={size} color={color} />
  ),
};

export default Svg;
