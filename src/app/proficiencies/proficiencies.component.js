"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var database_1 = require("angularfire2/database");
var translateY_1 = require("./../../animations/translateY");
var ProficienciesComponent = (function () {
    function ProficienciesComponent(db) {
        this.scrollimateOptions = {
            componentScroll: {
                currentState: "false",
                states: [{
                        method: "percentTotal",
                        value: 95,
                        state: "true",
                    },
                    {
                        method: "default",
                        state: "false"
                    }
                ]
            },
        };
        this.items = db.list('/proficiencies', {
            query: {
                orderByKey: true
            }
        });
    }
    ProficienciesComponent.prototype.ngAfterViewInit = function () {
    };
    ProficienciesComponent.prototype.elementInView = function (el) {
        alert("found");
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;
        while (el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }
        return (top < (window.pageYOffset + window.innerHeight) &&
            left < (window.pageXOffset + window.innerWidth) &&
            (top + height) > window.pageYOffset &&
            (left + width) > window.pageXOffset);
    };
    return ProficienciesComponent;
}());
__decorate([
    core_1.ViewChild('proficiencies'),
    __metadata("design:type", Object)
], ProficienciesComponent.prototype, "proficiencies", void 0);
ProficienciesComponent = __decorate([
    core_1.Component({
        selector: 'app-proficiencies',
        templateUrl: './proficiencies.component.html',
        styleUrls: ['./proficiencies.component.scss'],
        animations: [translateY_1.translateY(900, 500, 0)]
    }),
    __metadata("design:paramtypes", [database_1.AngularFireDatabase])
], ProficienciesComponent);
exports.ProficienciesComponent = ProficienciesComponent;
