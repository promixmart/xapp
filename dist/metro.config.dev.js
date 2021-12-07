"use strict";

/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
var path = require('path');

var exclusionList = require('metro-config/src/defaults/exclusionList');

module.exports = {
  resolver: {
    blockList: exclusionList([// This stops "react-native run-windows" from causing the metro server to crash if its already running
    new RegExp("".concat(path.resolve(__dirname, 'windows').replace(/[/\\]/g, '/'), ".*")), // This prevents "react-native run-windows" from hitting: EBUSY: resource busy or locked, open msbuild.ProjectImports.zip
    /.*\.ProjectImports\.zip/])
  },
  transformer: {
    getTransformOptions: function getTransformOptions() {
      return regeneratorRuntime.async(function getTransformOptions$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", {
                transform: {
                  experimentalImportSupport: false,
                  inlineRequires: true
                }
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }
};