import React from 'react';

import { Grommet, Box, Button, RadioButton } from 'grommet';
import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

const theme = deepMerge(grommet, {
  radioButton: {
    gap: 'xsmall',
    size: '18px',
    hover: {
      border: {
        color: 'dark-3',
      },
    },
    check: {
      color: {
        light: 'neutral-1',
      },
      background: {
        color: 'brand',
      },
    },
    icon: {
      size: '10px',
    },
    font: {
      weight: 500,
    },
  },
});

export const ThemeRadioButton = () => {
  const [selected, setSelected] = React.useState();

  return (
    <Grommet theme={theme}>
      <Box align="center" pad="large" gap="large">
        <RadioButton
          label="option 1"
          name="name"
          value="option 1"
          checked={selected === 'option 1'}
          onChange={(event) => setSelected(event.target.value)}
        />

        <Button label="clear" onClick={() => setSelected(undefined)} />
      </Box>
    </Grommet>
  );
};

ThemeRadioButton.storyName = 'Theme';

export default {
  title: 'Input/RadioButton/Custom Themed/Theme',
};
