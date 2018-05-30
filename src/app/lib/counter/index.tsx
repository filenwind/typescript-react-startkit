import React from 'react';

export interface CounterProps {
  initialCount: number;
  onCountChange: (count: number) => void;
}

export interface CounterState {
  count: number;
}

class Counter extends React.PureComponent<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: props.initialCount,
    };
  }
  componentDidUpdate(prevProps: CounterProps, prevState: CounterState) {
    const { onCountChange } = this.props;

    if (this.state.count !== prevState.count) {
      onCountChange(this.state.count);
    }
  }
  private add = (): void => {
    this.setState({
      count: this.state.count + 1,
    });
  }
  private minus = (): void => {
    this.setState({
      count: this.state.count - 1,
    });
  }
  render() {
    return (
      <div>
        <div>
          {`count: ${this.state.count}`}
        </div>
        <button className="add" onClick={this.add}>add</button>
        <button className="minus" onClick={this.minus}>minus</button>
      </div>
    );
  }
}

export default Counter;
