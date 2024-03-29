import React from 'react';
import Button from './Button';

export default {
    title: 'Example/Button',
    component: Button,
    tags:['autodocs']
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Button',
};