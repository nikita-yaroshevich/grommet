"use strict";

exports.__esModule = true;
exports.GrommetSharedUtils = void 0;

var _utils = require("./utils");

var _StyledBox = require("./components/Box/StyledBox");

// import { roundStyle } from './utils/styles';
var GrommetSharedUtils = {
  alignContentStyle: _utils.alignContentStyle,
  alignStyle: _utils.alignStyle,
  backgroundStyle: _utils.backgroundStyle,
  borderStyle: _utils.borderStyle,
  breakpointStyle: _utils.breakpointStyle,
  edgeStyle: _utils.edgeStyle,
  fillStyle: _utils.fillStyle,
  focusStyle: _utils.focusStyle,
  genericStyles: _utils.genericStyles,
  getBreakpointStyle: _utils.getBreakpointStyle,
  getHoverIndicatorStyle: _utils.getHoverIndicatorStyle,
  heightStyle: _utils.heightStyle,
  overflowStyle: _utils.overflowStyle,
  parseMetricToNum: _utils.parseMetricToNum,
  responsiveBorderStyle: _utils.responsiveBorderStyle,
  widthStyle: _utils.widthStyle,
  roundStyle: _utils.roundStyle,
  gapStyle: _StyledBox.gapStyle,
  directionStyle: _StyledBox.directionStyle,
  StyledBoxGap: StyledBoxGap
};
exports.GrommetSharedUtils = GrommetSharedUtils;