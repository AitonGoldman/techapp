webpackJsonp([1],{

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(407);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

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

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pss_api_pss_api__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_machines_machines__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_problem_type_problem_type__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_problem__ = __webpack_require__(406);
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
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, pssApi, alertCtrl, auth, problemTypes, machinesInfo) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pssApi = pssApi;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.problemTypes = problemTypes;
        this.machinesInfo = machinesInfo;
        //
        // get list of machines
        // launch dialog 
        // 
        // 
        this.eventId = 1;
        this.loggedIn = false;
        this.machines = [];
        this.filteredMachines = [];
        this.mode = "tech";
        this.backupMachineEra = null;
        this.currentMachine = null;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.machines = this.machinesInfo.getMachinesList();
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad HomePage');
        this.loggedIn = this.auth.isLoggedIn();
        if (this.navParams.get('mode') == 'backup') {
            this.mode = 'backup';
        }
        if (this.navParams.get('machineId') != null) {
            this.pssApi.getMachine(this.navParams.get('machineId')).subscribe(function (result) {
                if (result == null) {
                    return;
                }
                _this.currentMachine = result.body.data;
            });
            return;
        }
    };
    HomePage.prototype.getMachine = function (machine) {
        var _this = this;
        this.filteredMachines = [];
        this.pssApi.getMachine(machine.machine_id).subscribe(function (result) {
            if (result == null) {
                return;
            }
            _this.currentMachine = result.body.data;
        });
    };
    HomePage.prototype.switchMode = function (mode, fab) {
        fab.close();
        this.mode = mode;
    };
    HomePage.prototype.logout = function (fab) {
        fab.close();
        this.auth.logout();
        this.loggedIn = false;
    };
    HomePage.prototype.login = function (fab) {
        fab.close();
        console.log(this.auth.getUsersList());
        this.openLoginDialog(this.auth.getUsersList());
    };
    HomePage.prototype.machineLookup = function (ev) {
        this.currentMachine = null;
        var val = Number(ev.target.value);
        if (val > 999 && val < 10000) {
            this.filteredMachines = this.machines.filter(function (item) {
                return item.machine_four_digit_id == val;
            });
        }
    };
    HomePage.prototype.openProblemDialog = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Problem');
        for (var _i = 0, _a = this.problemTypes.getProblemTypes(); _i < _a.length; _i++) {
            var problemType = _a[_i];
            alert.addInput({
                type: 'radio',
                label: problemType,
                value: problemType,
                checked: false
            });
        }
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                var problem = new __WEBPACK_IMPORTED_MODULE_6__models_problem__["a" /* ProblemModelBuilder */]().setProblemType(data).setMachineId(_this.currentMachine.machine_id).setUserId(_this.auth.getUserId()).build();
                _this.pssApi.addProblem(problem).subscribe(function (result) {
                    _this.currentMachine.problems.unshift(problem);
                });
            }
        });
        alert.present();
    };
    HomePage.prototype.openLoginDialog = function (users) {
        var _this = this;
        console.log(users);
        var alert = this.alertCtrl.create();
        alert.setTitle('Login');
        for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
            var user = users_1[_i];
            alert.addInput({
                type: 'radio',
                label: user.username,
                value: user,
                checked: false
            });
        }
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                _this.auth.login(data);
                _this.loggedIn = _this.auth.isLoggedIn();
                _this.currentMachine = null;
            }
        });
        alert.present();
    };
    HomePage.prototype.openMachineLocationDialog = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Login');
        for (var _i = 0, _a = this.machinesInfo.getMachineLocations(); _i < _a.length; _i++) {
            var machineLocation = _a[_i];
            alert.addInput({
                type: 'radio',
                label: machineLocation,
                value: machineLocation,
                checked: false
            });
        }
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                _this.currentMachine.machine_location = data;
                _this.pssApi.editMachine(_this.currentMachine).subscribe(function (result) {
                    if (result == null) {
                        return;
                    }
                });
            }
        });
        alert.present();
    };
    HomePage.prototype.selectbackupMachine = function (machine_era_type) {
        var _this = this;
        this.pssApi.selectBackupMachine({ machine_era_type: machine_era_type }).subscribe(function (result) {
            if (result == null) {
                return;
            }
            _this.openBackupMachineSuccessDialog(result.body.data.machine_name);
        });
    };
    HomePage.prototype.openBackupMachineSuccessDialog = function (machineName) {
        var alert = this.alertCtrl.create({
            title: 'Backup Machine',
            subTitle: 'Backup machine ' + machineName + ' selected.'
        });
        alert.addButton({ text: 'OK' });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/agoldma/git/github/techapp/techapp_frontend/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div *ngIf="loggedIn==true && mode==\'backup\'">\n    <ion-list radio-group [(ngModel)]="backupMachineEra">\n      <ion-list-header>\n        Select Backup Machine Era\n      </ion-list-header>    \n      <ion-item *ngFor=\'let era of [{eraId:1,eraName:"DMD"},{eraId:2,eraName:"Early Solid State"},{eraId:3,eraName:"Late Solid State"},{eraId:4,eraName:"EM"}]\'>\n        <ion-label>{{era.eraName}}</ion-label>\n        <ion-radio value="{{era.eraId}}"></ion-radio>\n      </ion-item>        \n    </ion-list>\n    <button ion-button (click)="selectbackupMachine(backupMachineEra)" [disabled]="backupMachineEra==null"> Select Backup Machine</button>\n  </div>\n  <div  *ngIf="loggedIn==true && mode==\'tech\'">\n  <ion-searchbar placeholder="Enter Machine 4 Digit Code" (ionInput)="machineLookup($event)"></ion-searchbar>    \n  <div text-center *ngIf="currentMachine!=null">  \n    <h1><b>{{currentMachine.machine_name}}</b></h1>\n    <b margin-bottom><a (click)="openMachineLocationDialog()">{{currentMachine.machine_location}}</a></b>\n    <ion-list margin-top >\n      <button ion-item detail-none (click)="openProblemDialog()">\n        Report New Problem\n        <ion-icon item-end name="add-circle-outline"></ion-icon>        \n      </button>      \n      <button ion-item  [color]="problem.resolved==true?\'secondary\':\'danger\'" [navPush]="\'ProblemEditPage\'" [navParams]="{problemType:problem,live:true}" *ngFor="let problem of currentMachine.problems">\n        {{problem.problem_type}}\n      </button>\n    </ion-list>    \n  </div>\n  <ion-list>\n    <button ion-item (click)="getMachine(machine)" *ngFor="let machine of filteredMachines">\n      {{machine.machine_name}}\n    </button>\n  </ion-list>\n  </div>\n  <ion-fab bottom right #fab>\n    <button color="primary" ion-fab>\n      <ion-icon name="cog" ></ion-icon>\n    </button>\n    <ion-fab-list side="top">   \n      <button ion-fab [navPush]="\'SummaryPage\'"><ion-icon name="apps"></ion-icon></button>\n      <button ion-fab (click)="switchMode(\'backup\', fab)"><ion-icon name="walk"></ion-icon></button>\n      <button ion-fab (click)="switchMode(\'tech\', fab)"><ion-icon name="build"></ion-icon></button>\n      <button color="secondary"  ion-fab (click)="login(fab)" *ngIf="loggedIn==false">\n        <ion-icon name="person"></ion-icon>\n      </button>\n      <button color="danger"  ion-fab (click)="logout(fab)" *ngIf="loggedIn==true">\n        <ion-icon name="person"></ion-icon>\n      </button>          \n      \n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/agoldma/git/github/techapp/techapp_frontend/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_pss_api_pss_api__["a" /* PssApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_problem_type_problem_type__["a" /* ProblemTypeProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_machines_machines__["a" /* MachinesProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=1.js.map