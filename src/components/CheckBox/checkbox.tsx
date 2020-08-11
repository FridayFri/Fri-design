import React, { ChangeEvent, FC, useState } from "react";
import classNames from "classnames";

interface CheckboxProps {
  /* 当前项的值 */
  value: string;
  /* 当前项的name */
  name?: string;
  /* 当前项label的htmlFor */
  id?: string;
  /* 选中态 */
  checked?: boolean;
  /* 默认选中态 */
  defaultChecked?: boolean;
  /* 禁用态 */
  disabled?: boolean;
  /* 半选态 */
  indeterminate?: boolean;
  /**
   * change回调。
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox: FC<CheckboxProps> = (props) => {
  const {
    disabled,
    name,
    value,
    id,
    children,
    indeterminate,
    onChange,
  } = props;
  const [checked, setChecked] = useState(props.checked ?? true);
  const _handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (disabled) {
      return;
    }
    setChecked(event.target.checked);
    onChange && onChange(event);
  };
  return (
    <label className={classNames("checkbox-wrapper", { disabled })}>
      <span
        className={classNames("checkbox", {
          checked,
          indeterminate: !checked && indeterminate,
        })}
      >
        <input
          id={id ?? name ?? ""}
          name={name}
          value={value}
          disabled={disabled}
          checked={checked}
          type="checkbox"
          className="checkbox-input"
          onChange={_handleChange}
        />
        <span className="checkbox-inner" />
      </span>
      <span> {children} </span>
    </label>
  );
};

export default CheckBox;
