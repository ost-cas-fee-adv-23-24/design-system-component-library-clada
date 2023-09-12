import type { Meta, Story } from '@storybook/react';

import Button from '../components/button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

export const Primary = () =>  <Button />;