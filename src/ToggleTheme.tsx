import { Popover } from "antd";
import classnames from "classnames";

function upperFirst(str: string) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

export type ColorMode = "light" | "dark" | "auto";

const iconMap = {
  light: <div className="i-material-symbols:light-mode-outline" />,
  dark: <div className="i-material-symbols:dark-mode-outline" />,
  auto: <div className="i-material-symbols:desktop-windows-outline-rounded" />,
};

const modes = ["light", "dark", "auto"] as const;

interface Props {
  mode: ColorMode;
  onChange: (mode: ColorMode) => void;
}

function ToggleTheme({ mode, onChange }: Props) {
  const modeList = (
    <ul>
      {modes.map((m) => (
        <li
          key={m}
          // 这里使用了 shortcut `btn`
          className={classnames("btn flex items-center", {
            "text-primary": m === mode,
          })}
          onClick={() => onChange(m)}
        >
          {iconMap[m]}
          <span className="ml-2">{upperFirst(m)}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <Popover
      placement="bottom"
      arrow={false}
      content={modeList}
      trigger="click"
    >
      {/* 这里使用了 shortcut `btn` */}
      <a className="btn">{iconMap[mode!]}</a>
    </Popover>
  );
}

export default ToggleTheme;
