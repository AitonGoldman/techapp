webpackJsonp([3],{

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pss_api_pss_api__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthProvider = /** @class */ (function () {
    function AuthProvider(pssApi, _cookieService) {
        this.pssApi = pssApi;
        this._cookieService = _cookieService;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]();
        this.userList = {};
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.loadLoginInfoFromCookies = function () {
        if (this._cookieService.getObject("loggedInUser") != null) {
            this.user = this._cookieService.getObject("loggedInUser");
            this.user.loggedIn = true;
        }
    };
    AuthProvider.prototype.logout = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]();
        this._cookieService.remove("loggedInUser");
    };
    AuthProvider.prototype.login = function (userJson) {
        this.user.userName = userJson['username'];
        this.user.loggedIn = true;
        this.user.userId = userJson['user_id'];
        this._cookieService.putObject("loggedInUser", this.user);
    };
    AuthProvider.prototype.isLoggedIn = function () {
        return this.user.loggedIn;
    };
    AuthProvider.prototype.getUserId = function () {
        return this.user.userId;
    };
    AuthProvider.prototype.saveUsersList = function (userList) {
        this.userList = userList;
    };
    AuthProvider.prototype.getUsersList = function () {
        return this.userList;
    };
    AuthProvider.prototype.getUsername = function (userId) {
        var userList = {};
        for (var _i = 0, _a = this.userList; _i < _a.length; _i++) {
            var user = _a[_i];
            userList[user['user_id']] = user;
        }
        if (userList[userId] == null) {
            return "";
        }
        return userList[userId]['username'];
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__pss_api_pss_api__["a" /* PssApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__["b" /* CookieService */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MachinesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the MachinesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MachinesProvider = /** @class */ (function () {
    function MachinesProvider(http) {
        this.http = http;
        this.machines = [];
        this.machineLocations = [];
        console.log('Hello MachinesProvider Provider');
    }
    MachinesProvider.prototype.saveMachinesList = function (machinesList) {
        this.machines = machinesList;
    };
    MachinesProvider.prototype.getMachinesList = function () {
        return this.machines;
    };
    MachinesProvider.prototype.saveMachineLocations = function (machineLocations) {
        this.machineLocations = machineLocations;
    };
    MachinesProvider.prototype.getMachineLocations = function () {
        return this.machineLocations;
    };
    MachinesProvider.prototype.getMachine = function (machineId) {
        return this.machines.filter(function (machine) {
            return machine.machine_id == machineId;
        })[0];
    };
    MachinesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], MachinesProvider);
    return MachinesProvider;
    var _a;
}());

//# sourceMappingURL=machines.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemTypeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ProblemTypeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProblemTypeProvider = /** @class */ (function () {
    function ProblemTypeProvider(http) {
        this.http = http;
        this.problemTypes = [];
        console.log('Hello ProblemTypeProvider Provider');
    }
    ProblemTypeProvider.prototype.setProblemTypes = function (problemTypes) {
        this.problemTypes = problemTypes;
    };
    ProblemTypeProvider.prototype.getProblemTypes = function () {
        return this.problemTypes;
    };
    ProblemTypeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProblemTypeProvider);
    return ProblemTypeProvider;
}());

//# sourceMappingURL=problem-type.js.map

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 140;

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		403,
		1
	],
	"../pages/problem-edit/problem-edit.module": [
		404,
		0
	],
	"../pages/summary/summary.module": [
		405,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 184;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpLoadingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the HttpLoadingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HttpLoadingProvider = /** @class */ (function () {
    function HttpLoadingProvider(http, loadingCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.queue = [];
        this.dialogContent = { message: '', loading: '' };
        this.loadingDialogInstance = null;
        console.log('Hello HttpLoadingProvider Provider');
    }
    HttpLoadingProvider.prototype.getDialogContentString = function () {
        return this.dialogContent.message + '<br>' + this.dialogContent.loading;
    };
    HttpLoadingProvider.prototype.updateLoadingDialogMessage = function (message, loading) {
        if (message != null) {
            this.dialogContent['message'] = message;
        }
        if (loading != null) {
            if (loading == "100% loaded...") {
                this.dialogContent['loading'] = "";
            }
            else {
                this.dialogContent['loading'] = loading;
            }
        }
        this.loadingDialogInstance.data.content = this.getDialogContentString();
    };
    HttpLoadingProvider.prototype.openLoadingDialog = function (message) {
        this.queue.push(message);
        if (this.loadingDialogInstance == null) {
            this.loadingDialogInstance = this.loadingCtrl.create({
                content: ""
            });
            this.updateLoadingDialogMessage(message, null);
            this.loadingDialogInstance.present();
        }
        else {
            this.updateLoadingDialogMessage(message, null);
            //this.loadingDialogInstance.data.content=message+'<br> poop';
        }
    };
    HttpLoadingProvider.prototype.closeLoadingDialog = function () {
        var _this = this;
        setTimeout(function () {
            _this.queue.pop();
            if (_this.queue.length == 0) {
                _this.loadingDialogInstance.dismiss();
                _this.loadingDialogInstance = null;
            }
        }, 500);
    };
    HttpLoadingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]])
    ], HttpLoadingProvider);
    return HttpLoadingProvider;
}());

//# sourceMappingURL=http-loading.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(254);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_cookie__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_pss_api_pss_api__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_problem_type_problem_type__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_http_loading_http_loading__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_machines_machines__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/problem-edit/problem-edit.module#ProblemEditPageModule', name: 'ProblemEditPage', segment: 'problem-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/summary/summary.module#SummaryPageModule', name: 'SummaryPage', segment: 'summary', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_cookie__["a" /* CookieModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_pss_api_pss_api__["a" /* PssApiProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_problem_type_problem_type__["a" /* ProblemTypeProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_http_loading_http_loading__["a" /* HttpLoadingProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_machines_machines__["a" /* MachinesProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.userName = null;
        this.loggedIn = false;
        this.userId = null;
        console.log('Hello AuthProvider Provider');
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pss_api_pss_api__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_machines_machines__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_problem_type_problem_type__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, pssApi, auth, problemType, machinesInfo) {
        var _this = this;
        this.pssApi = pssApi;
        this.auth = auth;
        this.problemType = problemType;
        this.machinesInfo = machinesInfo;
        this.auth.loadLoginInfoFromCookies();
        this.pssApi.getProblemTypes().subscribe(function (result) {
            if (result == null) {
                return;
            }
            problemType.setProblemTypes(result.body.data);
        });
        this.pssApi.getUsers().subscribe(function (result) {
            if (result == null) {
                return;
            }
            console.log(result.body.data);
            _this.auth.saveUsersList(result.body.data);
        });
        this.pssApi.getMachines().subscribe(function (result) {
            if (result == null) {
                return;
            }
            _this.machinesInfo.saveMachinesList(result.body.data);
        });
        this.pssApi.getMachineLocations().subscribe(function (result) {
            if (result == null) {
                return;
            }
            _this.machinesInfo.saveMachineLocations(result.body.data);
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/agoldma/git/github/techapp/techapp_frontend/src/app/app.html"*/'<ion-nav [root]="\'HomePage\'"></ion-nav>\n'/*ion-inline-end:"/Users/agoldma/git/github/techapp/techapp_frontend/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__providers_pss_api_pss_api__["a" /* PssApiProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_problem_type_problem_type__["a" /* ProblemTypeProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_machines_machines__["a" /* MachinesProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PssApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__http_loading_http_loading__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the PssApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PssApiProvider = /** @class */ (function () {
    function PssApiProvider(http, loadingCtrl, httpLoading) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.httpLoading = httpLoading;
        this.pssHostUrl = 'http://0.0.0.0:8000';
        this.loading_instance = null;
        this.timeoutInMs = 10000;
        this.backendVersion = 3;
        //completeTicketPurchase = this.generate_api_call('completeTicketPurchase',this.getApiUrl()+"/:arg/prereg-token/:arg",'put');
        this.addProblem = this.generate_api_call('Saving Problem', this.getApiUrl() + "/problem", 'post');
        this.editMachine = this.generate_api_call('Saving machine', this.getApiUrl() + "/machine", 'put');
        this.editProblem = this.generate_api_call('Saving Problem', this.getApiUrl() + "/problem", 'put');
        this.getMachine = this.generate_api_call('Getting Machine', this.getApiUrl() + "/machine/:arg", 'get');
        this.getMachines = this.generate_api_call('Getting Machines', this.getApiUrl() + "/machines", 'get');
        this.getMachineLocations = this.generate_api_call('Getting Machine Locations', this.getApiUrl() + "/machine_locations", 'get');
        this.getProblems = this.generate_api_call('Getting Problems', this.getApiUrl() + "/problems", 'get');
        this.getProblemTypes = this.generate_api_call('Getting Problem Types', this.getApiUrl() + "/problem_types", 'get');
        this.getUsers = this.generate_api_call('Gettin Users', this.getApiUrl() + "/users", 'get');
        this.selectBackupMachine = this.generate_api_call('Getting backup machine', this.getApiUrl() + "/backup_machine", 'put');
        console.log('Hello PssApiProvider Provider');
    }
    PssApiProvider.prototype.getApiUrl = function () {
        return this.pssHostUrl + '/api';
    };
    PssApiProvider.prototype.getBackendHost = function () {
        return this.pssHostUrl;
    };
    PssApiProvider.prototype.makeHot = function (cold) {
        var subject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        cold.subscribe(subject);
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) { return subject.subscribe(observer); });
    };
    PssApiProvider.prototype.generate_api_call = function (apiName, url, method, hideLoading) {
        var _this = this;
        return function () {
            var restOfArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                restOfArgs[_i] = arguments[_i];
            }
            var localUrl = url;
            var postObject = null;
            if (method == "post" || method == "put" || method == "delete") {
                postObject = restOfArgs.shift();
            }
            var localMatches = localUrl.match(/\:arg/g);
            if (restOfArgs != null && localMatches != null && localMatches.length != restOfArgs.length) {
                throw new Error("Oops - number of args in url and args given do not match");
            }
            if (hideLoading == null) {
                //this.loading_instance = this.loadingCtrl.create({
                //    content: 'Please wait...'                
                //});
                //this.loading_instance.present();
                _this.httpLoading.openLoadingDialog(apiName);
            }
            while (localUrl.indexOf(':arg') >= 0) {
                var newUrl = localUrl.replace(":arg", restOfArgs.shift());
                localUrl = newUrl;
            }
            var requestArgs = { reportProgress: true, withCredentials: true, body: postObject };
            localUrl = localUrl + '?event_id=1';
            var req = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpRequest */](method, localUrl, requestArgs);
            var request = _this.http.request(req).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (event) { return _this.getEventMessage(event); }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["tap"])(function (message) { return console.log('PROGRESS IS ' + message); }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["last"])(), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["timeout"])(10000), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["catchError"])(_this.handleError(apiName, null)));
            // let request =  this.http.request(method,localUrl,requestArgs).pipe(
            //     //map(event  => this.getEventMessage(event as HttpEvent<any>)),
            //     // tap(message => console.log('PROGRESS IS '+message)),
            //     last(),
            //     timeout(10000),
            //     catchError(this.handleError(apiName,null))                    
            // )
            var result_observable = _this.makeHot(request);
            //result_observable.subscribe(()=>{if(hideLoading==null){this.loading_instance.dismiss()}});
            result_observable.subscribe(function () { if (hideLoading == null) {
                _this.httpLoading.closeLoadingDialog();
            } });
            return result_observable;
        };
    };
    PssApiProvider.prototype.getEventMessage = function (event) {
        switch (event.type) {
            case __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpEventType */].Sent:
                return "Http Request Sending";
            case __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpEventType */].DownloadProgress:
                // Compute and show the % done:
                var percentDone = Math.round(100 * event.loaded / event.total);
                this.httpLoading.updateLoadingDialogMessage(null, percentDone + '% loaded...');
                return "Http Request is " + percentDone + "% uploaded.";
            case __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpEventType */].Response:
                return event;
            default:
                return "surprising upload event: " + event.type + ".";
        }
    };
    PssApiProvider.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            if (error.constructor.name == "TimeoutError") {
                console.log('TIMEOUT IS HAPPENING...');
                //console.log(error)
                error.status = -1;
                error.error = { message: "Operation Timed Out.  Please Try Again. " };
            }
            console.error(error); // log to console instead                
            if (error.status != 404) {
                var error_message = "";
                if (error.status == 0) {
                    error_message = "Internal server error.  Please try again.";
                }
                else {
                    error_message = error.error.message;
                }
                //this.httpLoading.closeLoadingDialog();
                alert("error message is ... " + error_message);
                //this.pssToast.showToast(error_message,7000,"dangerToast");                    
            }
            if (error.status == 404) {
                console.log('found 404...');
                result = { data: null };
            }
            return Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])(result);
        };
    };
    PssApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__http_loading_http_loading__["a" /* HttpLoadingProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__http_loading_http_loading__["a" /* HttpLoadingProvider */]) === "function" && _c || Object])
    ], PssApiProvider);
    return PssApiProvider;
    var _a, _b, _c;
}());

//# sourceMappingURL=pss-api.js.map

/***/ })

},[246]);
//# sourceMappingURL=main.js.map