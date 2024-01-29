import { Button, ColorPicker, ConfigProvider, ThemeConfig, theme } from "antd";
import { useEffect } from "react";
import ToggleTheme, { ColorMode } from "./ToggleTheme";
import { useDark } from "./useDark";
import { useLocalStorageState } from "ahooks";

const PRIMARY_COLOR_KEY = "app_primary_color";
const COLOR_MODE_KEY = "app_color_mode";

function App() {
  const [primaryColor, setPrimaryColor] = useLocalStorageState(
    PRIMARY_COLOR_KEY,
    {
      defaultValue: "#01bfff",
      serializer: (v) => v,
      deserializer: (v) => v,
    }
  );

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--primary-color",
      primaryColor!
    );
  }, [primaryColor]);

  const [mode, setMode] = useLocalStorageState<ColorMode>(COLOR_MODE_KEY, {
    defaultValue: "auto",
    serializer: (v) => v,
    deserializer: (v) => v as ColorMode,
  });

  const isDark = useDark(mode!);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const antdTheme: ThemeConfig = {
    token: { colorPrimary: primaryColor },
    algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
  };

  return (
    <ConfigProvider theme={antdTheme}>
      <div className="p-4 flex items-center gap-x-3 mb-4">
        <ColorPicker
          value={primaryColor}
          onChange={(_, c) => setPrimaryColor(c)}
        />

        <span className="p-2 text-primary border border-primary">
          {primaryColor}
        </span>

        <Button type="primary">123</Button>
        <Button>zzz</Button>

        <ToggleTheme mode={mode!} onChange={(m) => setMode(m)} />
      </div>

      <h1 className="dark:text-yellow m-4 text-10">Light or dark</h1>
    </ConfigProvider>
  );
}

export default App;
