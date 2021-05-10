import { withTheme } from "./ThemeContext/withTheme";

const Menu = props => (
  <div style={{ backgroundColor: props.themeContext.color }}>
    Menu
  </div>
);

export default withTheme(Menu);