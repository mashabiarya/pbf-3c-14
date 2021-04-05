import ThemeProvider from "./ThemeContext/ThemeProvider";
import Menu from "./Menu";
import SetColor from "./SetColor";

export default function App () {
  return (
    <ThemeProvider>
      <Menu />
      <br />
      <SetColor />
    </ThemeProvider>
  )
}