import { Image } from 'react-native';

const defaultUri = '../assets/avatar.png';
export const DEFAULT_IMAGE = Image.resolveAssetSource(require(defaultUri)).uri;

const defaultAvatarUri = '../assets/anotherAvatar.jpg';
export const DEFAULT_AVATAR_IMAGE = Image.resolveAssetSource(
  require(defaultAvatarUri)
).uri;
