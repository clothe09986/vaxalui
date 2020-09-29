"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _GreenButton = _interopRequireDefault(require("./GreenButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    height: 590,
    color: '#000000'
  },
  section: {
    width: 940,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 88
  },
  breadCrumbs: {
    color: '#FFFFFF',
    width: 'fit-content',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.31
  },
  firstLine: {
    height: 1,
    border: '1px solid #FFFFFF',
    marginTop: 2
  },
  title: {
    width: 920,
    color: '#FFFFFF',
    fontSize: 72,
    fontWeight: 300,
    fontStretch: 'normal',
    fontFamily: 'FilsonSoft',
    lineHeight: 1,
    paddingTop: 45,
    whiteSpace: 'pre-line'
  },
  subTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold',
    paddingTop: 24
  },
  button: {
    marginTop: 48
  },
  space: {
    height: 12
  }
};

class Section extends _react.default.PureComponent {
  render() {
    const {
      classes,
      backgroundImage,
      onClick,
      showButton = true,
      breadCrumbs,
      title,
      subTitle,
      height = 590
    } = this.props;
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ImageContainer.default, {
      className: classes.root,
      image: backgroundImage,
      style: {
        height
      }
    }, _react.default.createElement("div", {
      className: classes.section
    }, _react.default.createElement("div", {
      className: classes.breadCrumbs
    }, breadCrumbs, _react.default.createElement("div", {
      className: classes.firstLine
    })), _react.default.createElement("div", {
      className: classes.title
    }, title), _react.default.createElement("div", {
      className: classes.subTitle
    }, subTitle), showButton && _react.default.createElement("div", {
      className: classes.button
    }, _react.default.createElement(_GreenButton.default, {
      text: "Read More",
      onClick: onClick
    })))), _react.default.createElement("div", {
      className: classes.space
    }));
  }

}

var _default = (0, _styles.withStyles)(styles)(Section);

exports.default = _default;