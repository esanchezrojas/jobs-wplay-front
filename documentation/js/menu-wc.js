'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">jobs-wplay documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-646ee63d2c8389d39ff263e7a34a7161352a89bb9ba6251c2e77e8c8fdd696318b0a7aa62c2316329c3460d8c9b9a0eeeace1e3aae83190cc32cc7af87970525"' : 'data-target="#xs-components-links-module-AppModule-646ee63d2c8389d39ff263e7a34a7161352a89bb9ba6251c2e77e8c8fdd696318b0a7aa62c2316329c3460d8c9b9a0eeeace1e3aae83190cc32cc7af87970525"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-646ee63d2c8389d39ff263e7a34a7161352a89bb9ba6251c2e77e8c8fdd696318b0a7aa62c2316329c3460d8c9b9a0eeeace1e3aae83190cc32cc7af87970525"' :
                                            'id="xs-components-links-module-AppModule-646ee63d2c8389d39ff263e7a34a7161352a89bb9ba6251c2e77e8c8fdd696318b0a7aa62c2316329c3460d8c9b9a0eeeace1e3aae83190cc32cc7af87970525"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ApplyFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApplyFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItemDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ItemDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VacantesListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VacantesListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-646ee63d2c8389d39ff263e7a34a7161352a89bb9ba6251c2e77e8c8fdd696318b0a7aa62c2316329c3460d8c9b9a0eeeace1e3aae83190cc32cc7af87970525"' : 'data-target="#xs-pipes-links-module-AppModule-646ee63d2c8389d39ff263e7a34a7161352a89bb9ba6251c2e77e8c8fdd696318b0a7aa62c2316329c3460d8c9b9a0eeeace1e3aae83190cc32cc7af87970525"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-646ee63d2c8389d39ff263e7a34a7161352a89bb9ba6251c2e77e8c8fdd696318b0a7aa62c2316329c3460d8c9b9a0eeeace1e3aae83190cc32cc7af87970525"' :
                                            'id="xs-pipes-links-module-AppModule-646ee63d2c8389d39ff263e7a34a7161352a89bb9ba6251c2e77e8c8fdd696318b0a7aa62c2316329c3460d8c9b9a0eeeace1e3aae83190cc32cc7af87970525"' }>
                                            <li class="link">
                                                <a href="pipes/FilterCityPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterCityPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FilterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Datos.html" data-type="entity-link" >Datos</a>
                            </li>
                            <li class="link">
                                <a href="classes/DatosBasicos.html" data-type="entity-link" >DatosBasicos</a>
                            </li>
                            <li class="link">
                                <a href="classes/ModeloExperiencia.html" data-type="entity-link" >ModeloExperiencia</a>
                            </li>
                            <li class="link">
                                <a href="classes/ModeloFormacion.html" data-type="entity-link" >ModeloFormacion</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegistroVanteModel.html" data-type="entity-link" >RegistroVanteModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/SpecialFunctions.html" data-type="entity-link" >SpecialFunctions</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/DataModalsService.html" data-type="entity-link" >DataModalsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataService.html" data-type="entity-link" >DataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RegistroVacanteService.html" data-type="entity-link" >RegistroVacanteService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});