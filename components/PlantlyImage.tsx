import {
  Image as ReactNativeImage,
  useWindowDimensions,
  ImageProps as ReactNativeImageProps,
} from 'react-native';

type PlantlyImageProps = ReactNativeImageProps & {
  size?: number;
  uri?: string;
};

export function PlantlyImage(props: PlantlyImageProps) {
  const { size, style, uri, ...other } = props;
  const { width } = useWindowDimensions();

  const imageSize = size ?? Math.min(width / 1.5, 400);

  return (
    <ReactNativeImage
      source={uri ? { uri } : require('@/assets/plantly.png')}
      style={[{ width: imageSize, height: imageSize, borderRadius: 16 }, style]}
      {...other}
    />
  );
}
