import { h, JSX, ComponentChildren } from "preact";
import { css as gooberCss } from "goober";

export type BoxProps<T extends keyof JSX.IntrinsicElements> = {
  children?: ComponentChildren;
  as?: keyof JSX.IntrinsicElements;
  css?: Parameters<typeof gooberCss>[0];
} & T;

export default function Box({
  children,
  as: Component = "div",
  css,
  ...otherProps
}: BoxProps<typeof Component>) {
  return (
    <Component className={css && gooberCss(css)} {...otherProps}>
      {children}
    </Component>
  );
}
