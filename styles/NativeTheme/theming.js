"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeStyles = exports.useTheme = exports.ThemeProvider = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ThemeContext = _react.default.createContext({});

const theming = (0, _reactJss.createTheming)(ThemeContext);
const {
  ThemeProvider,
  useTheme
} = theming;
exports.useTheme = useTheme;
exports.ThemeProvider = ThemeProvider;

const makeStyles = (styles, options) => {
  const useStyles = (0, _reactJss.createUseStyles)(styles);
  return props => {
    const theme = useTheme();
    return useStyles(_objectSpread({}, props, {
      theme
    }));
  };
};

exports.makeStyles = makeStyles;
var _default = theming;
exports.default = _default;