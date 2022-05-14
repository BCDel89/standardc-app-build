"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_user-settings_user-settings_module_ts"],{

/***/ 5712:
/*!***************************************************************!*\
  !*** ./src/app/user-settings/user-settings-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSettingsPageRoutingModule": () => (/* binding */ UserSettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _user_settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-settings.page */ 1716);




const routes = [
    {
        path: '',
        component: _user_settings_page__WEBPACK_IMPORTED_MODULE_0__.UserSettingsPage
    }
];
let UserSettingsPageRoutingModule = class UserSettingsPageRoutingModule {
};
UserSettingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserSettingsPageRoutingModule);



/***/ }),

/***/ 7552:
/*!*******************************************************!*\
  !*** ./src/app/user-settings/user-settings.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSettingsPageModule": () => (/* binding */ UserSettingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _user_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-settings-routing.module */ 5712);
/* harmony import */ var _user_settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-settings.page */ 1716);







let UserSettingsPageModule = class UserSettingsPageModule {
};
UserSettingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _user_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserSettingsPageRoutingModule
        ],
        declarations: [_user_settings_page__WEBPACK_IMPORTED_MODULE_1__.UserSettingsPage]
    })
], UserSettingsPageModule);



/***/ }),

/***/ 1716:
/*!*****************************************************!*\
  !*** ./src/app/user-settings/user-settings.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSettingsPage": () => (/* binding */ UserSettingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _user_settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-settings.page.html?ngResource */ 8410);
/* harmony import */ var _user_settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-settings.page.scss?ngResource */ 4858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../session.service */ 4719);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);






let UserSettingsPage = class UserSettingsPage {
    constructor(session, http) {
        this.session = session;
        this.http = http;
        this.passwordConfirmation = null;
        this.person = { oldPassword: '', newPassword: '' };
    }
    ngOnInit() {
    }
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.person.oldPassword) {
                return window.alert('Please type in your old password!');
            }
            if (this.person.newPassword !== this.passwordConfirmation) {
                return window.alert('Passwords don\'t match!');
            }
            console.log('token: ', this.session.token);
            const result = yield this.http.post(this.session.apiUrl + 'api/Person/change-password?access_token=' + this.session.token.id, this.person).toPromise();
            console.log('result: ', result);
        });
    }
};
UserSettingsPage.ctorParameters = () => [
    { type: _session_service__WEBPACK_IMPORTED_MODULE_2__.SessionService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
UserSettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-user-settings',
        template: _user_settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_user_settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserSettingsPage);



/***/ }),

/***/ 4858:
/*!******************************************************************!*\
  !*** ./src/app/user-settings/user-settings.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXNldHRpbmdzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 8410:
/*!******************************************************************!*\
  !*** ./src/app/user-settings/user-settings.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>UserSettings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"app-web\">\n    <h3>Change your password?</h3>\n\n    <ion-item>\n      <ion-label position=\"floating\">Old Password</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"person.oldPassword\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">New Password</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"person.newPassword\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Confirm Password</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"passwordConfirmation\"></ion-input>\n    </ion-item>\n\n    <ion-button expand=\"full\" (click)=\"submit()\">Update Password</ion-button>\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_user-settings_user-settings_module_ts.js.map