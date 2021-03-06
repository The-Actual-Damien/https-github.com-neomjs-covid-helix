(self["webpackChunkcovid19_helix"] = self["webpackChunkcovid19_helix"] || []).push([["src/draggable/tab/header/toolbar/SortZone-mjs.js"],{

/***/ "./node_modules/neo.mjs/src/draggable/tab/header/toolbar/SortZone.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/neo.mjs/src/draggable/tab/header/toolbar/SortZone.mjs ***!
  \****************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ SortZone
/* harmony export */ });
/* harmony import */ var _toolbar_SortZone_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../toolbar/SortZone.mjs */ "./node_modules/neo.mjs/src/draggable/toolbar/SortZone.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class Neo.draggable.tab.header.toolbar.SortZone
 * @extends Neo.draggable.toolbar.SortZone
 */
class SortZone extends _toolbar_SortZone_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.draggable.tab.header.toolbar.SortZone'
         * @protected
         */
        className: 'Neo.draggable.tab.header.toolbar.SortZone',
        /**
         * @member {String} ntype='tab-header-toolbar-sortzone'
         * @protected
         */
        ntype: 'tab-header-toolbar-sortzone',
        /**
         * @member {Object|null} dragProxyConfig
         */
        dragProxyConfig: {
            cls: ['neo-tab-header-toolbar', 'neo-toolbar']
        }
    }}

    /**
     * Override this method for class extensions (e.g. tab.header.Toolbar)
     * @param {Number} fromIndex
     * @param {Number} toIndex
     */
    moveTo(fromIndex, toIndex) {
        this.owner.up().moveTo(fromIndex, toIndex);
    }

    /**
     *
     * @param {Object} data
     */
    onDragEnd(data) {
        super.onDragEnd(data);

        setTimeout(() => {
            let me    = this,
                owner = me.owner,
                cls   = owner.cls || [];

            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__.default.remove(cls, 'neo-no-animation');
            owner.cls = cls;
        }, 300);
    }

    /**
     *
     * @param {Object} data
     */
    onDragStart(data) {
        let me    = this,
            owner = me.owner,
            cls   = owner.cls || [];

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__.default.add(cls, 'neo-no-animation');
        owner.cls = cls;

        super.onDragStart(data);
    }
}

Neo.applyClassConfig(SortZone);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3ZpZDE5LWhlbGl4Ly4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2RyYWdnYWJsZS90YWIvaGVhZGVyL3Rvb2xiYXIvU29ydFpvbmUubWpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDSDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMERBQVk7QUFDbkMsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSwyREFBZTtBQUMzQjtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSx3REFBWTtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiY2h1bmtzL3NyYy9kcmFnZ2FibGUvdGFiL2hlYWRlci90b29sYmFyL1NvcnRab25lLW1qcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlU29ydFpvbmUgZnJvbSAnLi4vLi4vLi4vdG9vbGJhci9Tb3J0Wm9uZS5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICAgICBmcm9tICcuLi8uLi8uLi8uLi91dGlsL0FycmF5Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5kcmFnZ2FibGUudGFiLmhlYWRlci50b29sYmFyLlNvcnRab25lXG4gKiBAZXh0ZW5kcyBOZW8uZHJhZ2dhYmxlLnRvb2xiYXIuU29ydFpvbmVcbiAqL1xuY2xhc3MgU29ydFpvbmUgZXh0ZW5kcyBCYXNlU29ydFpvbmUge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZHJhZ2dhYmxlLnRhYi5oZWFkZXIudG9vbGJhci5Tb3J0Wm9uZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmRyYWdnYWJsZS50YWIuaGVhZGVyLnRvb2xiYXIuU29ydFpvbmUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ndGFiLWhlYWRlci10b29sYmFyLXNvcnR6b25lJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3RhYi1oZWFkZXItdG9vbGJhci1zb3J0em9uZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gZHJhZ1Byb3h5Q29uZmlnXG4gICAgICAgICAqL1xuICAgICAgICBkcmFnUHJveHlDb25maWc6IHtcbiAgICAgICAgICAgIGNsczogWyduZW8tdGFiLWhlYWRlci10b29sYmFyJywgJ25lby10b29sYmFyJ11cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCBmb3IgY2xhc3MgZXh0ZW5zaW9ucyAoZS5nLiB0YWIuaGVhZGVyLlRvb2xiYXIpXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGZyb21JbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB0b0luZGV4XG4gICAgICovXG4gICAgbW92ZVRvKGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgICAgICB0aGlzLm93bmVyLnVwKCkubW92ZVRvKGZyb21JbmRleCwgdG9JbmRleCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uRHJhZ0VuZChkYXRhKSB7XG4gICAgICAgIHN1cGVyLm9uRHJhZ0VuZChkYXRhKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGxldCBtZSAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgb3duZXIgPSBtZS5vd25lcixcbiAgICAgICAgICAgICAgICBjbHMgICA9IG93bmVyLmNscyB8fCBbXTtcblxuICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgJ25lby1uby1hbmltYXRpb24nKTtcbiAgICAgICAgICAgIG93bmVyLmNscyA9IGNscztcbiAgICAgICAgfSwgMzAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25EcmFnU3RhcnQoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgb3duZXIgPSBtZS5vd25lcixcbiAgICAgICAgICAgIGNscyAgID0gb3duZXIuY2xzIHx8IFtdO1xuXG4gICAgICAgIE5lb0FycmF5LmFkZChjbHMsICduZW8tbm8tYW5pbWF0aW9uJyk7XG4gICAgICAgIG93bmVyLmNscyA9IGNscztcblxuICAgICAgICBzdXBlci5vbkRyYWdTdGFydChkYXRhKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFNvcnRab25lKTtcblxuZXhwb3J0IHtTb3J0Wm9uZSBhcyBkZWZhdWx0fTsiXSwic291cmNlUm9vdCI6IiJ9