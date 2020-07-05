import React, { FC } from "react";
import classNames from "classnames";

export interface MaskProps {
  className?: string;
  style?: object;
  opacity?: number;
}

const Mask: FC<MaskProps> = (props) => {
  const { className, style, opacity, ...restProps } = props;

  return (
    <div
      {...restProps}
      className={classNames("mask", className)}
      style={Object.assign(
        {
            background: `rgba(0,0,0, ${opacity})`
        },
        style
      )}
    />
  );
};

export default Mask;
