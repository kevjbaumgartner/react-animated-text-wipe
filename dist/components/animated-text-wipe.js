"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.object.assign.js");

var _react = _interopRequireDefault(require("react"));

require("./styles/AnimatedTextWipe.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AnimatedTextWipe = props => {
  const id = props.id;
  const className = props.className;
  const firstColor = props.firstColor;
  const secondColor = props.secondColor;
  const textColor = props.textColor;
  const difference = props.difference;
  const antialiasing = props.antialiasing;
  const direction = props.direction;
  const speed = props.speed;
  const styles = {
    AnimatedTextWipeOuter: {
      'background': 'linear-gradient(to right, #' + firstColor + ' 0%, #' + firstColor + ' 33%, #' + secondColor + ' 33%, #' + secondColor + ' 66%, #' + firstColor + ' 66%, #' + firstColor + ' 100%)',
      'backgroundSize': '303% 100%',
      'width': 'fit-content'
    },
    AnimatedTextWipeInner: {
      'color': '#' + textColor
    },
    MBM: {
      'mixBlendMode': difference === 'true' ? 'difference' : 'unset'
    },
    AA: {
      'backgroundColor': '#' + textColor,
      'WebkitBackgroundClip': 'text',
      'WebkitTextFillColor': 'transparent'
    },
    Animation: {
      'animation': direction + ' ' + speed + 's linear 0s infinite normal'
    }
  };
  return /*#__PURE__*/_react.default.createElement("span", {
    id: id,
    className: className,
    style: Object.assign({}, styles.AnimatedTextWipeOuter, styles.Animation)
  }, /*#__PURE__*/_react.default.createElement("span", {
    style: Object.assign({}, styles.AnimatedTextWipeInner, difference === 'true' ? styles.MBM : '', antialiasing === 'true' ? styles.AA : '')
  }, props.children));
};

var _default = AnimatedTextWipe;
exports.default = _default;