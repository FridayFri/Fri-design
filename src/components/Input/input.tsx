import React, { FC, ReactElement, InputHTMLAttributes } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import classNames from "classnames";
import Icon from "../Icon/icon";

type InputSize = "lg" | "sm";
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
  //   是否禁用
  disabled?: boolean;
  // 设置Input大小
  size?: InputSize;
  // 是否添加图标
  icon?: IconProp;
  // 是否添加前缀
  prepend?: string | ReactElement;
  // 是否添加后缀
  append?: string | ReactElement;
}
/**
 * 封装一个最基本的表单
 *
 */
export const Input: FC<InputProps> = (props) => {
  // 取出属性
  const { disabled, size, icon, prepend, append, style, ...restProps } = props;
  // 计算className
  const styleClass = classNames("input-wrapper", {
    [`input-size-${size}`]: size,
    "is-disabled": disabled,
    "input-group": prepend || append,
    "input-group-append": !!append,
    "input-group-prepend": !!prepend,
  });
  const fixControlledValue = (value: any) => {
    if (typeof value === 'undefined' || value === null) {
      return ''
    }
    return value
  }
  if ("value" in props) {
    delete restProps.defaultValue;
    restProps.value = fixControlledValue(props.value)
  }

  return (
    <div className={styleClass} style={style}>
      {prepend && <div className="input-group-prepend">{prepend}</div>}
      {icon && (
        <div className="icon-wrapper">
          <Icon icon={icon} title={`title-${icon}`} />
        </div>
      )}
      <input disabled={disabled} className={styleClass} {...restProps} />
      {append && <div className="input-group-append">{append}</div>}
    </div>
  );
};
