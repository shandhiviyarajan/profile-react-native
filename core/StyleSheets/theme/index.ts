import {COLORS_DARK} from './dark';
import {COLORS_LIGHT} from './light';
import {useColorScheme} from 'react-native';

export const AppColors = () => {
  let colorScheme = useColorScheme();
  if (colorScheme === 'light') {
    return COLORS_DARK;
  } else {
    return COLORS_LIGHT;
  }
};
