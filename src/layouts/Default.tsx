import * as React from "react";
import "./Default.styl";

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  children: any;
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  public render() {
    return (
      <div className="jsm-default-layout">
        <div> Menu will be here </div>
        {this.props.children}
      </div>
    );
  }
}

export default DefaultLayout;
