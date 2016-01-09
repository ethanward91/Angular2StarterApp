import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {AppComponent} from './app';
import {ContactsService} from './contacts/services/contacts-service';

bootstrap(AppComponent, [ContactsService, ROUTER_PROVIDERS]);