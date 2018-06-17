webpackJsonp([2],{

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPageModule", function() { return SummaryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__summary__ = __webpack_require__(409);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SummaryPageModule = /** @class */ (function () {
    function SummaryPageModule() {
    }
    SummaryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__summary__["a" /* SummaryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__summary__["a" /* SummaryPage */]),
            ],
        })
    ], SummaryPageModule);
    return SummaryPageModule;
}());

//# sourceMappingURL=summary.module.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pss_api_pss_api__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_machines_machines__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SummaryPage = /** @class */ (function () {
    function SummaryPage(navCtrl, pssApi, navParams, auth, machinesInfo) {
        this.navCtrl = navCtrl;
        this.pssApi = pssApi;
        this.navParams = navParams;
        this.auth = auth;
        this.machinesInfo = machinesInfo;
        this.problems = [];
    }
    SummaryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SummaryPage');
        this.pssApi.getProblems().subscribe(function (result) {
            if (result == null) {
                return;
            }
            _this.problems = result.body.data;
        });
    };
    SummaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-summary',template:/*ion-inline-start:"/Users/agoldma/git/github/techapp/techapp_frontend/src/pages/summary/summary.html"*/'<!--\n  Generated template for the SummaryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Summary</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <div text-center>\n    <ion-chip padding-left padding-right>\n      <b>Total Problems : {{problems.length}}</b>\n    </ion-chip>\n  </div>\n  <ion-grid>\n    <ion-row>\n      <ng-container *ngFor="let problem of problems">\n        <ion-col col-12 col-sm col-lg-3 *ngIf="problem.resolved==false">      \n          <ion-card>\n            <ion-card-header>\n              {{machinesInfo.getMachine(problem.machine_id).machine_name}}\n              <hr>\n              {{machinesInfo.getMachine(problem.machine_id).machine_location}}\n            </ion-card-header>\n            <ion-card-content >          \n              {{problem.problem_type}} reported by {{auth.getUsername(problem.user_id)}}\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ng-container>\n    </ion-row>\n  </ion-grid>\n  <ion-fab bottom right #fab>\n    <button color="primary" ion-fab>\n      <ion-icon name="cog" ></ion-icon>\n    </button>\n    <ion-fab-list side="top">   \n      <button ion-fab [navPush]="\'HomePage\'" [navParams]="{mode:\'backup\'}"><ion-icon name="walk"></ion-icon></button>\n      <button ion-fab [navPush]="\'HomePage\'"><ion-icon name="build"></ion-icon></button>      \n      <button ion-fab [navPush]="\'SummaryPage\'"><ion-icon name="apps"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/agoldma/git/github/techapp/techapp_frontend/src/pages/summary/summary.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_pss_api_pss_api__["a" /* PssApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_pss_api_pss_api__["a" /* PssApiProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_machines_machines__["a" /* MachinesProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_machines_machines__["a" /* MachinesProvider */]) === "function" && _e || Object])
    ], SummaryPage);
    return SummaryPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=summary.js.map

/***/ })

});
//# sourceMappingURL=2.js.map