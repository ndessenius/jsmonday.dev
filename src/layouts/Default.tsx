import * as React from "react";
import Menu from "../components/commons/Menu";
import "./Default.styl";

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  children: any;
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  public render() {
    console.log(this.props);
    return (
      <div className="jsm-default-layout dark">
        <Menu />
        {this.props.children}
      </div>
    );
  }
}

export default DefaultLayout;
