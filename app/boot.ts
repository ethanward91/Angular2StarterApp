import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app';

enableProdMode();

bootstrap(AppComponent, [ROUTER_PROVIDERS]);