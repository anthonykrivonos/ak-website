"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var angularfire2_1 = require("angularfire2");
var database_1 = require("angularfire2/database");
var ng2_scrollimate_1 = require("ng2-scrollimate");
var http_1 = require("@angular/http");
var animations_1 = require("@angular/platform-browser/animations");
var environment_1 = require("../environments/environment");
var app_component_1 = require("./app.component");
var logo_component_1 = require("./logo/logo.component");
var info_component_1 = require("./info/info.component");
var about_component_1 = require("./about/about.component");
var divider_component_1 = require("./divider/divider.component");
var proficiencies_component_1 = require("./proficiencies/proficiencies.component");
var proficiency_component_1 = require("./proficiency/proficiency.component");
var portfolio_component_1 = require("./portfolio/portfolio.component");
var project_component_1 = require("./project/project.component");
var resume_component_1 = require("./resume/resume.component");
var footer_component_1 = require("./footer/footer.component");
var contact_component_1 = require("./contact/contact.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            logo_component_1.LogoComponent,
            info_component_1.InfoComponent,
            about_component_1.AboutComponent,
            divider_component_1.DividerComponent,
            proficiencies_component_1.ProficienciesComponent,
            proficiency_component_1.ProficiencyComponent,
            portfolio_component_1.PortfolioComponent,
            project_component_1.ProjectComponent,
            resume_component_1.ResumeComponent,
            footer_component_1.FooterComponent,
            contact_component_1.ContactComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            animations_1.BrowserAnimationsModule,
            angularfire2_1.AngularFireModule.initializeApp(environment_1.environment.firebase),
            database_1.AngularFireDatabaseModule,
            ng2_scrollimate_1.Ng2ScrollimateModule
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
