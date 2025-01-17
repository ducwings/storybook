import { create } from '@storybook/theming/create';
import { addons } from '@storybook/addons';

addons.setConfig({
  isFullscreen: false,
  showAddonsPanel: true,
  showSearchBox: false,
  panelPosition: 'right',
  enableShortcuts: true,
  theme: create({
    base: 'light',
    brandTitle: 'CRA Kitchen Sink',
    brandUrl: 'https://github.com/storybookjs/storybook/tree/master/examples/cra-kitchen-sink',
    gridCellSize: 12,
  }),
});
