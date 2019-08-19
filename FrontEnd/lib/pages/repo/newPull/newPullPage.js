'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _createClass = (function () { function defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }())

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _Button = require('@material-ui/core/Button')

var _Button2 = _interopRequireDefault(_Button)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

function _possibleConstructorReturn (self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === 'object' || typeof call === 'function') ? call : self }

function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

var NewPullPage = (function (_Component) {
  _inherits(NewPullPage, _Component)

  function NewPullPage () {
    _classCallCheck(this, NewPullPage)

    return _possibleConstructorReturn(this, (NewPullPage.__proto__ || Object.getPrototypeOf(NewPullPage)).apply(this, arguments))
  }

  _createClass(NewPullPage, [{
    key: 'render',
    value: function render () {
      return _react2.default.createElement(
        'div',
        { className: 'NewPullPage', style: { display: 'flex', flexDirection: 'column', alignItems: 'center' } },
        _react2.default.createElement(
          'div',
          { style: { width: '500px' } },
          _react2.default.createElement(
            'div',
            { style: { textAlign: 'center' } },
            _react2.default.createElement(
              'h1',
              null,
              'New Pull Request'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'NewPullForm' },
            _react2.default.createElement(
              'p',
              null,
              'Pull Request Title'
            ),
            _react2.default.createElement('input', { style: { width: '500px' } }),
            _react2.default.createElement(
              'div',
              { style: { display: 'flex', alignItems: 'center' } },
              _react2.default.createElement(
                'p',
                { style: { marginRight: '10px' } },
                'Source Branch:'
              ),
              _react2.default.createElement(
                'select',
                { className: 'SourceBranch' },
                _react2.default.createElement(
                  'option',
                  null,
                  'master'
                ),
                _react2.default.createElement(
                  'option',
                  null,
                  'branch1'
                ),
                _react2.default.createElement(
                  'option',
                  null,
                  'branch2'
                ),
                _react2.default.createElement(
                  'option',
                  null,
                  'otherbranch'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { style: { display: 'flex', alignItems: 'center' } },
              _react2.default.createElement(
                'p',
                { style: { marginRight: '10px' } },
                'Target Branch:'
              ),
              _react2.default.createElement(
                'select',
                { className: 'TargetBranch' },
                _react2.default.createElement(
                  'option',
                  null,
                  'master'
                ),
                _react2.default.createElement(
                  'option',
                  null,
                  'branch1'
                ),
                _react2.default.createElement(
                  'option',
                  null,
                  'branch2'
                ),
                _react2.default.createElement(
                  'option',
                  null,
                  'otherbranch'
                )
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              'Comment'
            ),
            _react2.default.createElement('textarea', { rows: '10', style: { width: '500px' } }),
            _react2.default.createElement(
              'div',
              { style: { display: 'flex', justifyContent: 'center' } },
              _react2.default.createElement(
                _Button2.default,
                { variant: 'outlined', style: { fontFamily: 'inherit', borderRadius: '25px', marginTop: '50px', marginBottom: '50px' } },
                'Submit'
              )
            )
          )
        )
      )
    }
  }])

  return NewPullPage
}(_react.Component))

exports.default = NewPullPage
