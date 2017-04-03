"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by kimi on 2017/3/30.
 */
var core_1 = require("@angular/core");
var ClickMeComponent = (function () {
    function ClickMeComponent() {
        this.clickMsg = '';
        this.values = '';
        this.values1 = '';
    }
    ClickMeComponent.prototype.onClickMe = function () {
        this.clickMsg = 'you are my hero';
    };
    ClickMeComponent.prototype.onKey = function (event) {
        this.values += event.target.value + ' | ';
    };
    ClickMeComponent.prototype.onKey1 = function (event) {
        this.values1 = event.target.value + ' | ';
    };
    ClickMeComponent.prototype.closeInput = function () {
        this.values1 = '';
    };
    ClickMeComponent.prototype.resetInput = function () {
        this.values1 = '';
    };
    return ClickMeComponent;
}());
ClickMeComponent = __decorate([
    core_1.Component({
        selector: 'click-me',
        template: "\n        <button (click)=\"onClickMe()\">Click me</button>\n        {{clickMsg}}\n        <input (keyup)=\"onKey($event)\">\n        <p>{{values}}</p>\n        <input (keyup)=\"onKey1($event)\" (close)=\"closeInput()\" (reset)=\"resetInput()\">\n        <p>{{values1}}</p>\n      "
    })
], ClickMeComponent);
exports.ClickMeComponent = ClickMeComponent;
//# sourceMappingURL=click-me.js.map