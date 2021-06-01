import React from "react";

export const ThemeContext = React.createContext(
// default values digunakan oleh Consumer ketika tidak ada  
// yang cocok dengan Provider yang berada diatasnya
  {
    themeContext: {
       color: 'blue',
       setColor: () => {}
    }
  }
)