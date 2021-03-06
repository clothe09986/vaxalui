"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  button: {
    cursor: 'pointer',
    minWidth: 160,
    height: 50,
    textAlign: 'center',
    backgroundColor: '#64703f',
    border: 'none',
    borderRadius: 22,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    '&:hover': {
      backgroundColor: '#c0c823'
    }
  },
  disabledButton: {
    color: '#ffffff',
    cursor: 'not-allowed',
    backgroundColor: '#444343',
    '&:hover': {
      backgroundColor: '#444343'
    }
  }
};

class GreenButton extends _react.default.PureComponent {
  render() {
    const {
      classes,
      width,
      height,
      text,
      disabled = false,
      onClick = () => {}
    } = this.props;
    return _react.default.createElement("button", {
      disabled: true,
      onClick: onClick,
      className: (0, _clsx.default)(classes.button, {
        [classes.disabledButton]: disabled
      }),
      style: {
        width,
        height
      }
    }, text);
  }

}

var _default = (0, _styles.withStyles)(styles)(GreenButton);

exports.default = _default;