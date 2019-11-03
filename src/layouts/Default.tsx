import * as React from "react";
import Menu from "../components/common/Menu";
import "./Default.styl";

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  children: any;
}

const DefaultLayout = (props: DefaultLayoutProps) => (
  <div className="jsm-default-layout dark">
    <Menu />
    {props.children}
  </div>
);

export default DefaultLayout;
