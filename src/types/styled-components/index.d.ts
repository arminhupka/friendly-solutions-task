import 'styled-components';

import { ThemeInterface } from '../../style/theme/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}
