webpackJsonp([0],{

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemEditPageModule", function() { return ProblemEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__problem_edit__ = __webpack_require__(408);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProblemEditPageModule = /** @class */ (function () {
    function ProblemEditPageModule() {
    }
    ProblemEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__problem_edit__["a" /* ProblemEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__problem_edit__["a" /* ProblemEditPage */]),
            ],
        })
    ], ProblemEditPageModule);
    return ProblemEditPageModule;
}());

//# sourceMappingURL=problem-edit.module.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemModelBuilder; });
/* unused harmony export ProblemModel */
var ProblemModelBuilder = /** @class */ (function () {
    function ProblemModelBuilder() {
        this.machine_id = null;
        this.problem_type = null;
        this.description = null;
        this.resolved = false;
        this.problem_id = null;
        this.user_id = null;
    }
    ProblemModelBuilder.prototype.setMachineId = function (value) {
        this.machine_id = value;
        return this;
    };
    ProblemModelBuilder.prototype.setProblemType = function (value) {
        this.problem_type = value;
        return this;
    };
    ProblemModelBuilder.prototype.setDescription = function (value) {
        this.description = value;
        return this;
    };
    ProblemModelBuilder.prototype.setResolved = function (value) {
        this.resolved = value;
        return this;
    };
    ProblemModelBuilder.prototype.setUserId = function (value) {
        this.user_id = value;
        return this;
    };
    ProblemModelBuilder.prototype.buildFromJson = function (value) {
        this.machine_id = value['first_name'];
        this.problem_id = value['problem_id'];
        this.problem_type = value['problem_type'];
        this.description = value['description'];
        this.resolved = value['resolved'];
        this.user_id = value['user_id'];
        return this;
    };
    ProblemModelBuilder.prototype.build = function () {
        return new ProblemModel(this);
    };
    return ProblemModelBuilder;
}());

var ProblemModel = /** @class */ (function () {
    function ProblemModel(problemModelBuilder) {
        this.machine_id = null;
        this.problem_type = null;
        this.description = null;
        this.resolved = false;
        this.problem_id = null;
        this.user_id = null;
        this.machine_id = problemModelBuilder.machine_id;
        this.problem_id = problemModelBuilder.problem_id;
        this.problem_type = problemModelBuilder.problem_type;
        this.description = problemModelBuilder.description;
        this.resolved = problemModelBuilder.resolved;
        this.user_id = problemModelBuilder.user_id;
    }
    return ProblemModel;
}());

//# sourceMappingURL=problem.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_problem__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pss_api_pss_api__ = __webpack_require__(67);
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
 * Generated class for the ProblemEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProblemEditPage = /** @class */ (function () {
    function ProblemEditPage(navCtrl, navParams, alertCtrl, pssApi, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.pssApi = pssApi;
        this.auth = auth;
        this.currentProblem = new __WEBPACK_IMPORTED_MODULE_2__models_problem__["a" /* ProblemModelBuilder */]().build();
    }
    ProblemEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProblemEditPage');
        if (this.navParams.get('live') == null) {
            this.navCtrl.push('HomePage');
            return;
        }
        this.currentProblem = this.navParams.get('problemType');
    };
    ProblemEditPage.prototype.submitProblem = function () {
        var _this = this;
        this.pssApi.editProblem(this.currentProblem).subscribe(function (result) {
            _this.openSuccessDialog();
        });
    };
    ProblemEditPage.prototype.openSuccessDialog = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Problem Edited',
            subTitle: 'Changes to problem succesfully saved'
        });
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                _this.navCtrl.push('HomePage', { machineId: _this.currentProblem.machine_id });
            }
        });
        alert.present();
    };
    ProblemEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-problem-edit',template:/*ion-inline-start:"/Users/agoldma/git/github/techapp/techapp_frontend/src/pages/problem-edit/problem-edit.html"*/'<!--\n  Generated template for the ProblemEditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit Problem</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #problemForm="ngForm">\n  <ion-list>\n    \n  <ion-item>\n    <ion-label floating>Problem Type</ion-label>\n    <ion-input [(ngModel)]="currentProblem.problem_type" name="problem_type" type="text" [disabled]="true"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>User</ion-label>\n    <ion-input name="user_id" type="text" [value]="auth.getUsername(currentProblem.user_id)" [disabled]="true"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-textarea [(ngModel)]="currentProblem.description" name="description" placeholder="Enter Description Here"></ion-textarea>\n  </ion-item>  \n  <ion-item>\n    <ion-label>Resolved</ion-label>\n    <ion-checkbox name="resolved" [(ngModel)]="currentProblem.resolved"></ion-checkbox>\n  </ion-item>\n\n  </ion-list>\n\n<div padding text-center>\n  <button (click)="submitProblem()" [disabled]="!problemForm.form.valid" ion-button>Save Changes</button>\n</div>\n</form>\n\n  <ion-fab bottom right #fab>\n    <button color="primary" ion-fab>\n      <ion-icon name="cog" ></ion-icon>\n    </button>\n    <ion-fab-list side="top">   \n      <button ion-fab [navPush]="\'HomePage\'" [navParams]="{mode:\'backup\'}"><ion-icon name="walk"></ion-icon></button>\n      <button ion-fab [navPush]="\'HomePage\'"><ion-icon name="build"></ion-icon></button>      \n      <button ion-fab [navPush]="\'SummaryPage\'"><ion-icon name="apps"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/agoldma/git/github/techapp/techapp_frontend/src/pages/problem-edit/problem-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_pss_api_pss_api__["a" /* PssApiProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]])
    ], ProblemEditPage);
    return ProblemEditPage;
}());

//# sourceMappingURL=problem-edit.js.map

/***/ })

});
//# sourceMappingURL=0.js.map