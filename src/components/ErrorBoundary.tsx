import { Component } from "react";
import type { ReactNode } from "react";

export class ErrorBoundary extends Component<{children: ReactNode}, {error: string, info: string}> {
  state = {error: "", info: ""};

  static getDerivedStateFromError(error: any) {
    return {error: error.toString()};
  }

  componentDidCatch(_error: any, info: any) {
    this.setState({ info: info.componentStack });
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{color: "red", padding: "20px", background: "black", zIndex: 9999, position: "relative"}}>
          <h1>React Error</h1>
          <pre>{this.state.error}</pre>
          <pre style={{marginTop: "20px", fontSize: "12px"}}>{this.state.info}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}
