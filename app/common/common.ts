/**
 * @module
 * @description
 * Application library for common components.
 */
import {ViewHeaderComponent} from './components/view-header-component';
import {HoverBlurrDirective} from './directives/on-hover-directive';
import {PaddingDirective} from './directives/padding-directive';
import {SearchBoxComponent} from './components/search-box-component';
import {FilterPipe as Filter} from './pipes/filter-pipe';
import {ImagePipe as Image} from './pipes/image-pipe';

export var ViewHeader = ViewHeaderComponent;
export var HoverBlurr = HoverBlurrDirective;
export var Padding = PaddingDirective;
export var SearchBox = SearchBoxComponent;
export var FilterPipe = Filter;
export var ImagePipe = Image;
export var COMMON_APP_DIRECTIVES = [ViewHeaderComponent, HoverBlurrDirective, PaddingDirective, SearchBoxComponent];
export var COMMON_APP_PIPES = [FilterPipe, ImagePipe];