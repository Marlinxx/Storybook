import React from 'react';
import { useState } from 'react';

import Pagination from './pagination';

export default {
  title: 'Pagination',
  component: Pagination
};

const Template = (args) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 20;
    return <Pagination {...args} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages}/>
}
;

export const Basic = Template.bind({});
Basic.args = {}

Basic.storyName = 'Pagniation';