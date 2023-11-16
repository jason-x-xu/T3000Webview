"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
let exports = {};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = void 0;
var exec = function (_a) {
  var model = _a.model,
    args = _a.args,
    _b = _a.func,
    func = _b === void 0 ? "findMany" : _b;
  return fetch("https://user-lib.temcocontrols.com/prisma", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model: model, args: args, func: func }),
  }).then(function (res) {
    return __awaiter(void 0, void 0, void 0, function () {
      var json;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, res.json()];
          case 1:
            json = _a.sent();
            if (res.status !== 200)
              throw new Error(
                (json === null || json === void 0 ? void 0 : json.error) || ""
              );
            return [2 /*return*/, json];
        }
      });
    });
  });
};
exports.exec = exec;
var generateClient = function (model) {
  return {
    aggregate: function (args) {
      return (0, exports.exec)({ func: "aggregate", model: model, args: args });
    },
    count: function (args) {
      return (0, exports.exec)({ func: "count", model: model, args: args });
    },
    create: function (args) {
      return (0, exports.exec)({ func: "create", model: model, args: args });
    },
    delete: function (args) {
      return (0, exports.exec)({ func: "delete", model: model, args: args });
    },
    deleteMany: function (args) {
      return (0, exports.exec)({
        func: "deleteMany",
        model: model,
        args: args,
      });
    },
    findFirst: function (args) {
      return (0, exports.exec)({ func: "findFirst", model: model, args: args });
    },
    findFirstOrThrow: function (args) {
      return (0, exports.exec)({
        func: "findFirstOrThrow",
        model: model,
        args: args,
      });
    },
    findMany: function (args) {
      return (0, exports.exec)({ func: "findMany", model: model, args: args });
    },
    findUnique: function (args) {
      return (0, exports.exec)({
        func: "findUnique",
        model: model,
        args: args,
      });
    },
    findUniqueOrThrow: function (args) {
      return (0, exports.exec)({
        func: "findUniqueOrThrow",
        model: model,
        args: args,
      });
    },
    groupBy: function (args) {
      return (0, exports.exec)({ func: "groupBy", model: model, args: args });
    },
    update: function (args) {
      return (0, exports.exec)({ func: "update", model: model, args: args });
    },
    updateMany: function (args) {
      return (0, exports.exec)({
        func: "updateMany",
        model: model,
        args: args,
      });
    },
    upsert: function (args) {
      return (0, exports.exec)({ func: "upsert", model: model, args: args });
    },
  };
};
var userClient = generateClient("user");
var fileClient = generateClient("file");
var hvacObjectClient = generateClient("hvacObject");
var bridg = {
  user: userClient,
  file: fileClient,
  hvacObject: hvacObjectClient,
};
exports.default = bridg; //kekw
export default bridg;
