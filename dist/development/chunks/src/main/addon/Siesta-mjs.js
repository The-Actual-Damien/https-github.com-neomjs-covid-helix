(self["webpackChunkcovid19_helix"] = self["webpackChunkcovid19_helix"] || []).push([["src/main/addon/Siesta-mjs"],{

/***/ "./node_modules/neo.mjs/src/main/addon/Siesta.mjs":
/*!********************************************************!*\
  !*** ./node_modules/neo.mjs/src/main/addon/Siesta.mjs ***!
  \********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * Required when running Neo Apps inside the Siesta browser harness (iframe)
 * @class Neo.main.addon.Siesta
 * @extends Neo.core.Base
 * @singleton
 */
class Siesta extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.main.addon.Siesta'
         * @protected
         */
        className: 'Neo.main.addon.Siesta',
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true
    }}

    /**
     * @param {Object} config
     */
    constructor(config) {
        super(config);
        this.adjustSiestaEnvironment();
    }

    /**
     *
     * @protected
     */
    adjustSiestaEnvironment() {
        let i   = 0,
            len = document.styleSheets.length,
            sheet;

        document.body.classList.add('neo-body', 'neo-body-viewport');

        for (; i < len; i++) {
            sheet = document.styleSheets[i];
            if (sheet.href && sheet.href.includes('highlightjs')) {
                sheet.ownerNode.id = 'hljs-theme';
            }
        }
    }
}

Neo.applyClassConfig(Siesta);

let instance = Neo.create(Siesta);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3ZpZDE5LWhlbGl4Ly4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vU2llc3RhLm1qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtREFBSTtBQUN6Qix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsaUVBQWUsUUFBUSxFIiwiZmlsZSI6ImNodW5rcy9zcmMvbWFpbi9hZGRvbi9TaWVzdGEtbWpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2UgZnJvbSAnLi4vLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogUmVxdWlyZWQgd2hlbiBydW5uaW5nIE5lbyBBcHBzIGluc2lkZSB0aGUgU2llc3RhIGJyb3dzZXIgaGFybmVzcyAoaWZyYW1lKVxuICogQGNsYXNzIE5lby5tYWluLmFkZG9uLlNpZXN0YVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBTaWVzdGEgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1haW4uYWRkb24uU2llc3RhJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubWFpbi5hZGRvbi5TaWVzdGEnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcbiAgICAgICAgdGhpcy5hZGp1c3RTaWVzdGFFbnZpcm9ubWVudCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFkanVzdFNpZXN0YUVudmlyb25tZW50KCkge1xuICAgICAgICBsZXQgaSAgID0gMCxcbiAgICAgICAgICAgIGxlbiA9IGRvY3VtZW50LnN0eWxlU2hlZXRzLmxlbmd0aCxcbiAgICAgICAgICAgIHNoZWV0O1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbmVvLWJvZHknLCAnbmVvLWJvZHktdmlld3BvcnQnKTtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBzaGVldCA9IGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldO1xuICAgICAgICAgICAgaWYgKHNoZWV0LmhyZWYgJiYgc2hlZXQuaHJlZi5pbmNsdWRlcygnaGlnaGxpZ2h0anMnKSkge1xuICAgICAgICAgICAgICAgIHNoZWV0Lm93bmVyTm9kZS5pZCA9ICdobGpzLXRoZW1lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoU2llc3RhKTtcblxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShTaWVzdGEpO1xuXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7Il0sInNvdXJjZVJvb3QiOiIifQ==