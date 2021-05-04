import { withTheme } from "./ThemeContext/withTheme";

const SetColor = props => (
  <div>
    <button onClick={() => props.themeContext.setColor("red")}>Red</button>
    <button onClick={() => props.themeContext.setColor("blue")}>Blue</button>
  </div>
);

export default withTheme(SetColor);