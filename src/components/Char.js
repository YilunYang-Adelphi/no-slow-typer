import React, { Component } from "react";
import PropTypes from "prop-types";

class Char extends Component {
  /**
   * React component constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      expected: this.props.expected,
      input: this.props.input,
      isActive: this.props.isActive,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.input !== prevState.input ||
      nextProps.isActive !== prevState.isActive
    ) {
      return {
        input: nextProps.input,
        isActive: nextProps.isActive,
      };
    }
    return null;
  }

  getClassNames() {
    let res = "typer-char ";

    if (this.state.isActive) {
      res += "letter-active";
    } else if (this.state.input) {
      if (this.state.input === this.state.expected) {
        res += "letter-correct";
      } else {
        res += "letter-incorrect";
      }
    } else {
      res += "letter-not-entered";
    }

    return res;
  }

  /**
   * React render function.
   *
   * Preconditions:
   *   - Status of the component is updated.
   * Postconditions:
   *   - Component is rendered on page with latest data.
   */
  render() {
    return (
      <div className={this.getClassNames()}>
        {/*{this.state.input && this.state.input !== this.state.expected &&
          <e className="wrong-animation">
            {this.state.input}
          </e>
        */}
        {this.state.expected}
      </div>
    );
  }
}

Char.defaultProps = {
  input: null,
};

Char.propTypes = {
  isActive: PropTypes.bool,
  expected: PropTypes.string.isRequired,
  input: PropTypes.string,
};

export default Char;
