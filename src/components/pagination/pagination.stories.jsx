import React from 'react';

import Pagination from './pagination.jsx';

export default {
  title: 'Pagination',
  component: Pagination
};

const Template = (args) => <Pagination {...args} />;

export const Basic = Template.bind({});
Basic.args = {}

Basic.storyName = 'Pagniation';