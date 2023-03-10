import React, { Component } from "react";

class ConfigPanelText extends Component {
  getTextValue() {
    return this.refs.input.value;
  }

  render() {
    return (
      <div className="configPanelText">
        <label>{this.props.label}: </label>
        <input
          ref="input"
          type="text"
          defaultValue={this.props.value}
          onChange={() => {
            this.props.onChange(this.getTextValue());
          }}
        />
        <div className="instructions">{this.props.instructions}</div>
      </div>
    );
  }
}

export default ConfigPanelText;
