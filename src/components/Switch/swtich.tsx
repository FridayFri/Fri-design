import React, { FC, useState } from "react";
import classNames from "classnames";
import _ from "lodash";

export interface SwitchProps {
  className?: string;
  style?: object;
  type?: string;
  disabled?: boolean;
  on?: string;
  off?: string;
  checked: boolean;
  onChange?: (e: React.MouseEvent) => void;
}

const Switch: FC<SwitchProps> = (props) => {
  const { className, style, on, off, disabled, type, ...restProps } = props;
  // const { checked, setChecked } = useState(props.checked);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // if (!disabled) {
    //   setChecked(e.target.checked);
    // }
  };
  return (
    <input
      {...restProps}
      className={classNames("switch", className)}
      style={style}
      // data-text={checked ? on : off}
      onChange={handleChange}
    />
  );
};
Switch.defaultProps = {
  type: "default",
  on: "",
  off: "",
  onChange: _.noop,
};

export default Switch;
