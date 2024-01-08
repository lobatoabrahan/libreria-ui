// ThemeProvider.stories.jsx
import React from 'react';
import { ThemeProvider, useTheme } from './ThemeProvider';
import {defaultTheme} from '../theme/Theme';

export default {
    title: 'ThemeProvider',
    component: ThemeProvider,
};

const ThemeDisplay = () => {
    const theme = useTheme();

    return (
        <div style={{ color: theme.colors.primary, fontFamily: theme.fonts.main }} className="p-4 bg-gray-200">
            Primary color: {theme.colors.primary}
            <br />
            Main font: {theme.fonts.main}
        </div>
    );
};

const Template = (args) => <ThemeProvider {...args} />;

export const Default = Template.bind({});
Default.args = {
    theme: defaultTheme,
    children: <ThemeDisplay />,
};