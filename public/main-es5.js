function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthAuthComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Auth form</h1>\n<form (submit)=\"userLoginClick()\">\n  <input type=\"text\" [(ngModel)]=\"login\" name=\"login\" placeholder=\"Login\" class=\"form-control\"><br>\n  <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\" class=\"form-control\"><br>\n  <button class=\"btn btn-success\" type=\"submit\">Enter</button>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>Dashboard!</h3>\n<!--<button class=\"btn btn-warning\" (click)=\"logoutUser()\">Logout</button>-->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"container py-5\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" class=\"d-block mb-2\" role=\"img\" viewBox=\"0 0 24 24\" focusable=\"false\"><title>Product</title><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94\"></path></svg>\n      <small class=\"d-block mb-3 text-muted\">© 2017-2019</small>\n    </div>\n    <div class=\"col-6 col-md\">\n      <h5>Features</h5>\n      <ul class=\"list-unstyled text-small\">\n        <li><a class=\"text-muted\" href=\"#\">Cool stuff</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Random feature</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Team feature</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Stuff for developers</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Another one</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Last time</a></li>\n      </ul>\n    </div>\n    <div class=\"col-6 col-md\">\n      <h5>Resources</h5>\n      <ul class=\"list-unstyled text-small\">\n        <li><a class=\"text-muted\" href=\"#\">Resource</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Resource name</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Another resource</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Final resource</a></li>\n      </ul>\n    </div>\n    <div class=\"col-6 col-md\">\n      <h5>Resources</h5>\n      <ul class=\"list-unstyled text-small\">\n        <li><a class=\"text-muted\" href=\"#\">Business</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Education</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Government</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Gaming</a></li>\n      </ul>\n    </div>\n    <div class=\"col-6 col-md\">\n      <h5>About</h5>\n      <ul class=\"list-unstyled text-small\">\n        <li><a class=\"text-muted\" href=\"#\">Team</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Locations</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Privacy</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Terms</a></li>\n      </ul>\n    </div>\n  </div>\n</footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm\">\n  <h2 class=\"my-0 mr-md-auto font-weight-normal\" [routerLink]=\"['/']\">Site</h2>\n  <nav class=\"my-2 my-md-0 mr-md-3\">\n    <a class=\"p-2 text-dark\" [routerLink]=\"['/']\">Home</a>\n  </nav>\n  <a *ngIf=\"authService.isLoggedIn()\" class=\"btn btn-outline-warning mr-3\" [routerLink]=\"['/dashboard']\">User account</a>\n  <a *ngIf=\"authService.isLoggedIn()\" class=\"btn btn-warning\" (click)=\"logoutUser()\">Logout</a>\n  <a *ngIf=\"!authService.isLoggedIn()\" class=\"btn btn-outline-primary mr-3\" [routerLink]=\"['/auth']\">Login</a>\n  <a *ngIf=\"!authService.isLoggedIn()\" class=\"btn btn-outline-primary\" [routerLink]=\"['/reg']\">Register</a>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light\">\n  <div class=\"col-md-5 p-lg-5 mx-auto my-5\">\n    <h1 class=\"display-4 font-weight-normal\">Punny headline</h1>\n    <p class=\"lead font-weight-normal\">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>\n    <a class=\"btn btn-outline-secondary\" href=\"#\">Coming soon</a>\n  </div>\n  <div class=\"product-device shadow-sm d-none d-md-block\"></div>\n  <div class=\"product-device product-device-2 shadow-sm d-none d-md-block\"></div>\n</div>\n<div class=\"d-md-flex flex-md-equal w-100 my-md-3 pl-md-3\">\n  <div class=\"bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden\">\n    <div class=\"my-3 py-3\">\n      <h2 class=\"display-5\">Another headline</h2>\n      <p class=\"lead\">And an even wittier subheading.</p>\n    </div>\n    <div class=\"bg-light shadow-sm mx-auto\" style=\"width: 80%; height: 300px; border-radius: 21px 21px 0 0;\"></div>\n  </div>\n  <div class=\"bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden\">\n    <div class=\"my-3 p-3\">\n      <h2 class=\"display-5\">Another headline</h2>\n      <p class=\"lead\">And an even wittier subheading.</p>\n    </div>\n    <div class=\"bg-dark shadow-sm mx-auto\" style=\"width: 80%; height: 300px; border-radius: 21px 21px 0 0;\"></div>\n  </div>\n</div>\n<div class=\"d-md-flex flex-md-equal w-100 my-md-3 pl-md-3\">\n  <div class=\"bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden\">\n    <div class=\"my-3 p-3\">\n      <h2 class=\"display-5\">Another headline</h2>\n      <p class=\"lead\">And an even wittier subheading.</p>\n    </div>\n    <div class=\"bg-dark shadow-sm mx-auto\" style=\"width: 80%; height: 300px; border-radius: 21px 21px 0 0;\"></div>\n  </div>\n  <div class=\"bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden\">\n    <div class=\"my-3 py-3\">\n      <h2 class=\"display-5\">Another headline</h2>\n      <p class=\"lead\">And an even wittier subheading.</p>\n    </div>\n    <div class=\"bg-light shadow-sm mx-auto\" style=\"width: 80%; height: 300px; border-radius: 21px 21px 0 0;\"></div>\n  </div>\n</div>\n<div class=\"d-md-flex flex-md-equal w-100 my-md-3 pl-md-3\">\n  <div class=\"bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden\">\n    <div class=\"my-3 p-3\">\n      <h2 class=\"display-5\">Another headline</h2>\n      <p class=\"lead\">And an even wittier subheading.</p>\n    </div>\n    <div class=\"bg-white shadow-sm mx-auto\" style=\"width: 80%; height: 300px; border-radius: 21px 21px 0 0;\"></div>\n  </div>\n  <div class=\"bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden\">\n    <div class=\"my-3 py-3\">\n      <h2 class=\"display-5\">Another headline</h2>\n      <p class=\"lead\">And an even wittier subheading.</p>\n    </div>\n    <div class=\"bg-white shadow-sm mx-auto\" style=\"width: 80%; height: 300px; border-radius: 21px 21px 0 0;\"></div>\n  </div>\n</div>\n<div class=\"d-md-flex flex-md-equal w-100 my-md-3 pl-md-3\">\n  <div class=\"bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden\">\n    <div class=\"my-3 p-3\">\n      <h2 class=\"display-5\">Another headline</h2>\n      <p class=\"lead\">And an even wittier subheading.</p>\n    </div>\n    <div class=\"bg-white shadow-sm mx-auto\" style=\"width: 80%; height: 300px; border-radius: 21px 21px 0 0;\"></div>\n  </div>\n  <div class=\"bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden\">\n    <div class=\"my-3 py-3\">\n      <h2 class=\"display-5\">Another headline</h2>\n      <p class=\"lead\">And an even wittier subheading.</p>\n    </div>\n    <div class=\"bg-white shadow-sm mx-auto\" style=\"width: 80%; height: 300px; border-radius: 21px 21px 0 0;\"></div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/reg/reg.component.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reg/reg.component.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegRegComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Reg form</h1>\n<form (submit)=\"userRegisterClick()\">\n  <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Name\" class=\"form-control\"><br>\n  <input type=\"text\" [(ngModel)]=\"login\" name=\"login\" placeholder=\"Login\" class=\"form-control\"><br>\n  <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\" class=\"form-control\"><br>\n  <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\" class=\"form-control\"><br>\n  <button class=\"btn btn-success\" type=\"submit\">Register</button>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
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
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

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
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
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
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'front-end-app';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _reg_reg_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./reg/reg.component */
    "./src/app/reg/reg.component.ts");
    /* harmony import */


    var _auth_auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./auth/auth.component */
    "./src/app/auth/auth.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _check_form_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./check-form.service */
    "./src/app/check-form.service.ts");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_14___default =
    /*#__PURE__*/
    __webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var _isLogged_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./isLogged.guard */
    "./src/app/isLogged.guard.ts");

    var appRoute = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]
    }, {
      path: 'reg',
      component: _reg_reg_component__WEBPACK_IMPORTED_MODULE_6__["RegComponent"]
    }, {
      path: 'auth',
      component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"]
    }, {
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
      canActivate: [_isLogged_guard__WEBPACK_IMPORTED_MODULE_17__["IsLoggedIn"]]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _reg_reg_component__WEBPACK_IMPORTED_MODULE_6__["RegComponent"], _auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(appRoute), _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_14__["FlashMessagesModule"].forRoot(), _angular_http__WEBPACK_IMPORTED_MODULE_16__["HttpModule"]],
      providers: [_check_form_service__WEBPACK_IMPORTED_MODULE_13__["CheckFormService"], _auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _isLogged_guard__WEBPACK_IMPORTED_MODULE_17__["IsLoggedIn"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth.service.ts":
  /*!*********************************!*\
    !*** ./src/app/auth.service.ts ***!
    \*********************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var angular2_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular2-jwt */
    "./node_modules/angular2-jwt/angular2-jwt.js");
    /* harmony import */


    var angular2_jwt__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_4__);

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
      }

      _createClass(AuthService, [{
        key: "registerUser",
        value: function registerUser(user) {
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
          headers.append('Content-Type', 'application/json');
          return this.http.post('account/reg', user, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.json();
          }));
        }
      }, {
        key: "authUser",
        value: function authUser(user) {
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
          headers.append('Content-Type', 'application/json');
          return this.http.post('account/login', user, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.json();
          }));
        }
      }, {
        key: "storeUser",
        value: function storeUser(token, user) {
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
          this.token = token;
          this.user = user;
        }
      }, {
        key: "logout",
        value: function logout() {
          this.token = null;
          this.user = null;
          localStorage.clear();
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_4__["tokenNotExpired"])();
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/auth/auth.component.css":
  /*!*****************************************!*\
    !*** ./src/app/auth/auth.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthAuthComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/auth/auth.component.ts":
  /*!****************************************!*\
    !*** ./src/app/auth/auth.component.ts ***!
    \****************************************/

  /*! exports provided: AuthComponent */

  /***/
  function srcAppAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
      return AuthComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");

    var AuthComponent =
    /*#__PURE__*/
    function () {
      function AuthComponent(flashMessages, router, authService) {
        _classCallCheck(this, AuthComponent);

        this.flashMessages = flashMessages;
        this.router = router;
        this.authService = authService;
      }

      _createClass(AuthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "userLoginClick",
        value: function userLoginClick() {
          var _this = this;

          var user = {
            login: this.login,
            password: this.password
          };

          if (!user.password) {
            this.flashMessages.show('Enter the password, please...', {
              cssClass: 'alert-danger',
              timeout: 1000
            });
            return false;
          }

          this.authService.authUser(user).subscribe(function (data) {
            if (!data.success) {
              _this.flashMessages.show(data.msg, {
                cssClass: 'alert-danger',
                timeout: 1000
              });
            } else {
              _this.flashMessages.show('Success authorization', {
                cssClass: 'alert-success',
                timeout: 500
              });

              _this.router.navigate(['dashboard']);

              _this.authService.storeUser(data.token, data.user);
            }
          });
        }
      }]);

      return AuthComponent;
    }();

    AuthComponent.ctorParameters = function () {
      return [{
        type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auth',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auth.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./auth.component.css */
      "./src/app/auth/auth.component.css")).default]
    })], AuthComponent);
    /***/
  },

  /***/
  "./src/app/check-form.service.ts":
  /*!***************************************!*\
    !*** ./src/app/check-form.service.ts ***!
    \***************************************/

  /*! exports provided: CheckFormService */

  /***/
  function srcAppCheckFormServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckFormService", function () {
      return CheckFormService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CheckFormService =
    /*#__PURE__*/
    function () {
      function CheckFormService() {
        _classCallCheck(this, CheckFormService);
      }

      _createClass(CheckFormService, [{
        key: "checkName",
        value: function checkName(name) {
          return name ? true : false;
        }
      }, {
        key: "checkLogin",
        value: function checkLogin(login) {
          return login ? true : false;
        }
      }, {
        key: "checkEmail",
        value: function checkEmail(email) {
          return email ? true : false;
        }
      }, {
        key: "checkPassword",
        value: function checkPassword(password) {
          return password ? true : false;
        }
      }]);

      return CheckFormService;
    }();

    CheckFormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CheckFormService);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.css":
  /*!***************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent() // private flashMessages: FlashMessagesService,
      // private router: Router,
      // private authService: AuthService
      {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/dashboard/dashboard.component.css")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.css":
  /*!*********************************************!*\
    !*** ./src/app/footer/footer.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h2:hover {\r\n  cursor: pointer;\r\n}\r\nh2 {\r\n  border: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDI6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5oMiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(flashMessages, router, authService) {
        _classCallCheck(this, HeaderComponent);

        this.flashMessages = flashMessages;
        this.router = router;
        this.authService = authService;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logoutUser",
        value: function logoutUser() {
          this.authService.logout();
          this.flashMessages.show('Exited from Account!', {
            cssClass: 'alert-warning',
            timeout: 3000
          });
          this.router.navigate(['auth']);
          return false;
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/isLogged.guard.ts":
  /*!***********************************!*\
    !*** ./src/app/isLogged.guard.ts ***!
    \***********************************/

  /*! exports provided: IsLoggedIn */

  /***/
  function srcAppIsLoggedGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsLoggedIn", function () {
      return IsLoggedIn;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth.service.ts");

    var IsLoggedIn =
    /*#__PURE__*/
    function () {
      function IsLoggedIn(authService, router) {
        _classCallCheck(this, IsLoggedIn);

        this.authService = authService;
        this.router = router;
      }

      _createClass(IsLoggedIn, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.authService.isLoggedIn()) {
            return true;
          } else {
            this.router.navigate(['auth']);
            return false;
          }
        }
      }]);

      return IsLoggedIn;
    }();

    IsLoggedIn.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    IsLoggedIn = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], IsLoggedIn);
    /***/
  },

  /***/
  "./src/app/reg/reg.component.css":
  /*!***************************************!*\
    !*** ./src/app/reg/reg.component.css ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegRegComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZy9yZWcuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/reg/reg.component.ts":
  /*!**************************************!*\
    !*** ./src/app/reg/reg.component.ts ***!
    \**************************************/

  /*! exports provided: RegComponent */

  /***/
  function srcAppRegRegComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegComponent", function () {
      return RegComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _check_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../check-form.service */
    "./src/app/check-form.service.ts");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");

    var RegComponent =
    /*#__PURE__*/
    function () {
      function RegComponent(checkForm, flashMessages, router, authService) {
        _classCallCheck(this, RegComponent);

        this.checkForm = checkForm;
        this.flashMessages = flashMessages;
        this.router = router;
        this.authService = authService;
      }

      _createClass(RegComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "userRegisterClick",
        value: function userRegisterClick() {
          var _this2 = this;

          var user = {
            name: this.name,
            email: this.email,
            login: this.login,
            password: this.password
          };

          if (!this.checkForm.checkName(user.name)) {
            this.flashMessages.show('Name is empty...', {
              cssClass: 'alert-danger',
              timeout: 1000
            });
            return false;
          } else if (!this.checkForm.checkLogin(user.login)) {
            this.flashMessages.show('Login is empty...', {
              cssClass: 'alert-danger',
              timeout: 1000
            });
            return false;
          } else if (!this.checkForm.checkEmail(user.email)) {
            this.flashMessages.show('Email is empty...', {
              cssClass: 'alert-danger',
              timeout: 1000
            });
            return false;
          } else if (!this.checkForm.checkPassword(user.password)) {
            this.flashMessages.show('Password is empty...', {
              cssClass: 'alert-danger',
              timeout: 1000
            });
            return false;
          }

          this.authService.registerUser(user).subscribe(function (data) {
            if (!data.success) {
              _this2.flashMessages.show(data.msg, {
                cssClass: 'alert-danger',
                timeout: 1000
              });

              _this2.router.navigate(['/reg']);
            } else {
              _this2.flashMessages.show(data.msg, {
                cssClass: 'alert-success',
                timeout: 500
              });

              _this2.router.navigate(['/auth']);
            }
          });
        }
      }]);

      return RegComponent;
    }();

    RegComponent.ctorParameters = function () {
      return [{
        type: _check_form_service__WEBPACK_IMPORTED_MODULE_2__["CheckFormService"]
      }, {
        type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }];
    };

    RegComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reg',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reg.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/reg/reg.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reg.component.css */
      "./src/app/reg/reg.component.css")).default]
    })], RegComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Portfolio\MEAN\front-end-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map