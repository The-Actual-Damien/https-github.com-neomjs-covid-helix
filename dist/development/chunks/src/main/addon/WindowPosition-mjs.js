(self["webpackChunkcovid19_helix"] = self["webpackChunkcovid19_helix"] || []).push([["src/main/addon/WindowPosition-mjs"],{

/***/ "./node_modules/neo.mjs/src/main/addon/WindowPosition.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/neo.mjs/src/main/addon/WindowPosition.mjs ***!
  \****************************************************************/
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
 *
 * @class Neo.main.addon.WindowPosition
 * @extends Neo.core.Base
 * @singleton
 */
class WindowPosition extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.main.addon.WindowPosition'
         * @protected
         */
        className: 'Neo.main.addon.WindowPosition',
        /**
         * @member {String|null} intervalId=null
         */
        intervalId: null,
        /**
         * @member {Number} intervalTime=100
         */
        intervalTime: 20,
        /**
         * Remote method access for other workers
         * @member {Object} remote
         * @protected
         */
        remote: {
            app: [
                'registerWindow',
                'unregisterWindow'
            ]
        },
        /**
         * @member {Number|null} screenLeft=null
         */
        screenLeft: null,
        /**
         * @member {Number|null} screenTop=null
         */
        screenTop: null,
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true,
        /**
         * @member {Object} windows={}
         * @protected
         */
        windows: {}
    }}

    /**
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me  = this,
            win = window;

        me.screenLeft = win.screenLeft;
        me.screenTop  = win.screenTop;

        win.addEventListener('mouseout', me.onMouseOut.bind(me));
        win.addEventListener('resize',   me.onResize.bind(me));
    }

    /**
     *
     * @param {Object} data
     */
    adjustPositions(data) {
        let me = this,
            left, top;

        Object.entries(me.windows).forEach(([key, value]) => {
            switch (value.dock) {
                case 'bottom':
                    left = data.screenLeft;
                    top  = data.outerHeight  + data.screenTop - 50;
                    break;
                case 'left':
                    left = data.screenLeft - value.size;
                    top  = data.screenTop  + 28;
                    break;
                case 'right':
                    left = data.outerWidth + data.screenLeft;
                    top  = data.screenTop  + 28;
                    break;
                case 'top':
                    left = data.screenLeft;
                    top  = data.screenTop - value.size;
                    break;
            }

            Neo.Main.windowMoveTo({
                windowName: key,
                x         : left,
                y         : top
            });
        });
    }

    /**
     *
     */
    checkMovement() {
        let me         = this,
            Manager    = Neo.worker.Manager,
            win        = window,
            screenLeft = win.screenLeft,
            screenTop  = win.screenTop,
            winData;

        if (me.screenLeft !== screenLeft || me.screenTop !== screenTop) {
            winData = Neo.Main.getWindowData();

            me.adjustPositions(winData);

            Manager.sendMessage('app', {
                action: 'windowPositionChange',
                data  : {
                    appName: Manager.appName,
                    ...winData
                }
            });

            me.screenLeft = screenLeft;
            me.screenTop  = screenTop;
        }
    }

    /**
     *
     * @param {MouseEvent} event
     */
    onMouseOut(event) {
        let me = this;

        if (!event.toElement) {
            if (!me.intervalId) {
                me.intervalId = setInterval(me.checkMovement.bind(me), me.intervalTime);
            }
        } else if (me.intervalId) {
            clearInterval(me.intervalId);
            me.intervalId = null;
        }
    }

    /**
     *
     * @param {Object} event
     */
    onResize(event) {
        let me      = this,
            winData = Neo.Main.getWindowData(),
            height, width;

        Object.entries(me.windows).forEach(([key, value]) => {
            switch (value.dock) {
                case 'bottom':
                case 'top':
                    width = winData.outerWidth;
                    break;
                case 'left':
                case 'right':
                    height = winData.outerHeight - 28;
                    break;
            }

            Neo.Main.windowResizeTo({
                height    : height,
                width     : width,
                windowName: key
            });
        });

        me.adjustPositions(winData);
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.dock
     * @param {String} data.name
     * @param {Number} data.size
     */
    registerWindow(data) {
        this.windows[data.name] = data;
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.name
     */
    unregisterWindow(data) {
        delete this.windows[data.name];
    }
}

Neo.applyClassConfig(WindowPosition);

let instance = Neo.create(WindowPosition);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3ZpZDE5LWhlbGl4Ly4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vV2luZG93UG9zaXRpb24ubWpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1Qzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG1EQUFJO0FBQ2pDLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFdBQVc7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsaUVBQWUsUUFBUSxFIiwiZmlsZSI6ImNodW5rcy9zcmMvbWFpbi9hZGRvbi9XaW5kb3dQb3NpdGlvbi1tanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZSBmcm9tICcuLi8uLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKlxuICogQGNsYXNzIE5lby5tYWluLmFkZG9uLldpbmRvd1Bvc2l0aW9uXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIFdpbmRvd1Bvc2l0aW9uIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5tYWluLmFkZG9uLldpbmRvd1Bvc2l0aW9uJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubWFpbi5hZGRvbi5XaW5kb3dQb3NpdGlvbicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gaW50ZXJ2YWxJZD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBpbnRlcnZhbElkOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBpbnRlcnZhbFRpbWU9MTAwXG4gICAgICAgICAqL1xuICAgICAgICBpbnRlcnZhbFRpbWU6IDIwLFxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3RlIG1ldGhvZCBhY2Nlc3MgZm9yIG90aGVyIHdvcmtlcnNcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSByZW1vdGVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3RlOiB7XG4gICAgICAgICAgICBhcHA6IFtcbiAgICAgICAgICAgICAgICAncmVnaXN0ZXJXaW5kb3cnLFxuICAgICAgICAgICAgICAgICd1bnJlZ2lzdGVyV2luZG93J1xuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IHNjcmVlbkxlZnQ9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc2NyZWVuTGVmdDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxudWxsfSBzY3JlZW5Ub3A9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc2NyZWVuVG9wOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSB3aW5kb3dzPXt9XG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHdpbmRvd3M6IHt9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIHdpbiA9IHdpbmRvdztcblxuICAgICAgICBtZS5zY3JlZW5MZWZ0ID0gd2luLnNjcmVlbkxlZnQ7XG4gICAgICAgIG1lLnNjcmVlblRvcCAgPSB3aW4uc2NyZWVuVG9wO1xuXG4gICAgICAgIHdpbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIG1lLm9uTW91c2VPdXQuYmluZChtZSkpO1xuICAgICAgICB3aW4uYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgICBtZS5vblJlc2l6ZS5iaW5kKG1lKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIGFkanVzdFBvc2l0aW9ucyhkYXRhKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBsZWZ0LCB0b3A7XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMobWUud2luZG93cykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKHZhbHVlLmRvY2spIHtcbiAgICAgICAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gZGF0YS5zY3JlZW5MZWZ0O1xuICAgICAgICAgICAgICAgICAgICB0b3AgID0gZGF0YS5vdXRlckhlaWdodCAgKyBkYXRhLnNjcmVlblRvcCAtIDUwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGRhdGEuc2NyZWVuTGVmdCAtIHZhbHVlLnNpemU7XG4gICAgICAgICAgICAgICAgICAgIHRvcCAgPSBkYXRhLnNjcmVlblRvcCAgKyAyODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gZGF0YS5vdXRlcldpZHRoICsgZGF0YS5zY3JlZW5MZWZ0O1xuICAgICAgICAgICAgICAgICAgICB0b3AgID0gZGF0YS5zY3JlZW5Ub3AgICsgMjg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBkYXRhLnNjcmVlbkxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHRvcCAgPSBkYXRhLnNjcmVlblRvcCAtIHZhbHVlLnNpemU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBOZW8uTWFpbi53aW5kb3dNb3ZlVG8oe1xuICAgICAgICAgICAgICAgIHdpbmRvd05hbWU6IGtleSxcbiAgICAgICAgICAgICAgICB4ICAgICAgICAgOiBsZWZ0LFxuICAgICAgICAgICAgICAgIHkgICAgICAgICA6IHRvcFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgY2hlY2tNb3ZlbWVudCgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgTWFuYWdlciAgICA9IE5lby53b3JrZXIuTWFuYWdlcixcbiAgICAgICAgICAgIHdpbiAgICAgICAgPSB3aW5kb3csXG4gICAgICAgICAgICBzY3JlZW5MZWZ0ID0gd2luLnNjcmVlbkxlZnQsXG4gICAgICAgICAgICBzY3JlZW5Ub3AgID0gd2luLnNjcmVlblRvcCxcbiAgICAgICAgICAgIHdpbkRhdGE7XG5cbiAgICAgICAgaWYgKG1lLnNjcmVlbkxlZnQgIT09IHNjcmVlbkxlZnQgfHwgbWUuc2NyZWVuVG9wICE9PSBzY3JlZW5Ub3ApIHtcbiAgICAgICAgICAgIHdpbkRhdGEgPSBOZW8uTWFpbi5nZXRXaW5kb3dEYXRhKCk7XG5cbiAgICAgICAgICAgIG1lLmFkanVzdFBvc2l0aW9ucyh3aW5EYXRhKTtcblxuICAgICAgICAgICAgTWFuYWdlci5zZW5kTWVzc2FnZSgnYXBwJywge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ3dpbmRvd1Bvc2l0aW9uQ2hhbmdlJyxcbiAgICAgICAgICAgICAgICBkYXRhICA6IHtcbiAgICAgICAgICAgICAgICAgICAgYXBwTmFtZTogTWFuYWdlci5hcHBOYW1lLFxuICAgICAgICAgICAgICAgICAgICAuLi53aW5EYXRhXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1lLnNjcmVlbkxlZnQgPSBzY3JlZW5MZWZ0O1xuICAgICAgICAgICAgbWUuc2NyZWVuVG9wICA9IHNjcmVlblRvcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudFxuICAgICAqL1xuICAgIG9uTW91c2VPdXQoZXZlbnQpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAoIWV2ZW50LnRvRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKCFtZS5pbnRlcnZhbElkKSB7XG4gICAgICAgICAgICAgICAgbWUuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKG1lLmNoZWNrTW92ZW1lbnQuYmluZChtZSksIG1lLmludGVydmFsVGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobWUuaW50ZXJ2YWxJZCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChtZS5pbnRlcnZhbElkKTtcbiAgICAgICAgICAgIG1lLmludGVydmFsSWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvblJlc2l6ZShldmVudCkge1xuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB3aW5EYXRhID0gTmVvLk1haW4uZ2V0V2luZG93RGF0YSgpLFxuICAgICAgICAgICAgaGVpZ2h0LCB3aWR0aDtcblxuICAgICAgICBPYmplY3QuZW50cmllcyhtZS53aW5kb3dzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAodmFsdWUuZG9jaykge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB3aW5EYXRhLm91dGVyV2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gd2luRGF0YS5vdXRlckhlaWdodCAtIDI4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgTmVvLk1haW4ud2luZG93UmVzaXplVG8oe1xuICAgICAgICAgICAgICAgIGhlaWdodCAgICA6IGhlaWdodCxcbiAgICAgICAgICAgICAgICB3aWR0aCAgICAgOiB3aWR0aCxcbiAgICAgICAgICAgICAgICB3aW5kb3dOYW1lOiBrZXlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZS5hZGp1c3RQb3NpdGlvbnMod2luRGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmRvY2tcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5uYW1lXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEuc2l6ZVxuICAgICAqL1xuICAgIHJlZ2lzdGVyV2luZG93KGRhdGEpIHtcbiAgICAgICAgdGhpcy53aW5kb3dzW2RhdGEubmFtZV0gPSBkYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5uYW1lXG4gICAgICovXG4gICAgdW5yZWdpc3RlcldpbmRvdyhkYXRhKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLndpbmRvd3NbZGF0YS5uYW1lXTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFdpbmRvd1Bvc2l0aW9uKTtcblxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShXaW5kb3dQb3NpdGlvbik7XG5cbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTsiXSwic291cmNlUm9vdCI6IiJ9