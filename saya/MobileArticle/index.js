"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _BreakAllContentText = _interopRequireDefault(require("../BreakAllContentText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    width: '100%',
    color: '#000000'
  },
  container: {
    width: 310
  },
  title: {
    textAlign: 'left',
    fontSize: 55
  },
  paragraph: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 0
  },
  image: {
    marginTop: 40,
    marginBottom: 40
  }
}));

var _default = props => {
  const {
    data
  } = props;
  const classes = useStyles();

  const renderContent = (content, key) => {
    if (content.type === 'paragraph') {
      return _react.default.createElement("div", {
        key: key,
        className: classes.paragraph
      }, _react.default.createElement(_BreakAllContentText.default, {
        style: {
          fontFamily: 'FilsonSoftRegular',
          lineHeight: 1.5
        }
      }, content.text));
    } else if (content.type === 'image') {
      return _react.default.createElement("div", {
        className: classes.image
      }, _react.default.createElement("img", {
        width: "100%",
        src: content.src
      }));
    }

    return null;
  };

  return _react.default.createElement(_ImageContainer.default, {
    className: classes.root
  }, _react.default.createElement("div", {
    className: classes.container
  }, (data.content || []).map(renderContent)));
};

exports.default = _default;