"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./routes/index.routes"));

var _tasks = _interopRequireDefault(require("./routes/tasks.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)(); // routes

// settings
app.set('port', process.env.PORT || 3000); // middlewares

app.use(_express.default.json()); // Routes

app.use(_index.default); // antes de ejecutar este enrutador le voy a decir que le precede /tasks

app.use('/tasks', _tasks.default);
var _default = app;
exports.default = _default;