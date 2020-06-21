import React, { FC } from "react";
import classNames from "classnames";

export interface LoadingProps {
  // 设置Loading大小
  size?: number;
  // 行内样式
  style?: object;
  className?: string;
  // 文案
  text?: string
}
/**
 * 封装一个最基本的Loading
 *
 */
const Loading: FC<LoadingProps> = (props) => {
  // 取出属性
  const { size, style, className, text, ...restProps } = props;
  // 计算className
  const styleClass = classNames("loading", className);
  return (
    <div {...restProps} className={styleClass}>
      <svg
        className="loading-circular"
        style={{
          ...style,
          width: size + "px",
          height: size + "px",
        }}
        viewBox="0 0 50 50"
      >
        <circle className="loading-path" cx="25" cy="25" r="20" fill="none" />
      </svg>
        {text && <p>{text}</p>}
    </div>
  );
};

Loading.defaultProps = {
  size: 40,
};

export default Loading;
