import React from 'react';
import { useTheme } from '../themeProvider/ThemeProvider';

const Button = ({ children }) => {
    const theme = useTheme();
  
    return (
      <button style={{ 
        backgroundColor: theme.colors.primary, 
        fontFamily: theme.fonts.main 
      }} className='px-4 py-2 rounded-md flex items-center justify-center'>
        {children}
      </button>
    );
  };
  
  export default Button;