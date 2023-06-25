import { Image } from "react-native";

const defaultUri = '../assets/avatar.png';
export const DEFAULT_IMAGE = Image.resolveAssetSource(require(defaultUri)).uri;
