(self["webpackChunkcovid19_helix"] = self["webpackChunkcovid19_helix"] || []).push([["src/main/addon/DragDrop-mjs"],{

/***/ "./node_modules/neo.mjs/src/main/addon/DragDrop.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/neo.mjs/src/main/addon/DragDrop.mjs ***!
  \**********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.e, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DomAccess.mjs */ "./node_modules/neo.mjs/src/main/DomAccess.mjs");
/* harmony import */ var _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DomEvents.mjs */ "./node_modules/neo.mjs/src/main/DomEvents.mjs");




/**
 * @class Neo.main.addon.DragDrop
 * @extends Neo.core.Base
 * @singleton
 */
class DragDrop extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.main.addon.DragDrop'
         * @protected
         */
        className: 'Neo.main.addon.DragDrop',
        /**
         * @member {Boolean} alwaysFireDragMove=false
         */
        alwaysFireDragMove: false,
        /**
         * @member {DOMRect|null} scrollContainerRect=null
         */
        boundaryContainerRect: null,
        /**
         * @member {Number} clientX=0
         */
        clientX: 0,
        /**
         * @member {Number} clientY=0
         */
        clientY: 0,
        /**
         * @member {String|null} dragElementRootId=null
         */
        dragElementRootId: null,
        /**
         * @member {String} dragProxyCls='neo-dragproxy'
         */
        dragProxyCls: 'neo-dragproxy',
        /**
         * @member {HTMLElement|null} dragProxyElement=null
         * @protected
         */
        dragProxyElement: null,
        /**
         * @member {DOMRect|null} dragProxyRect=null
         */
        dragProxyRect: null,
        /**
         * @member {String|null} dragZoneId=null
         */
        dragZoneId: null,
        /**
         * You can either pass an array of (dom) ids or cls rules or both
         * @example
         * dropZoneIdentifier: {
         *     ids: ['foo','bar']
         * }
         * @example
         * dropZoneIdentifier: {
         *     cls: ['my-class-1','my-class-2']
         * }
         * @example
         * dropZoneIdentifier: {
         *     cls: ['my-class-1','my-class-2'],
         *     ids: ['foo','bar']
         * }
         * @member {Object|null} dropZoneIdentifier=null
         */
        dropZoneIdentifier: null,
        /**
         * @member {Number} initialScrollLeft=0
         */
        initialScrollLeft: 0,
        /**
         * @member {Number} initialScrollTop=0
         */
        initialScrollTop: 0,
        /**
         * @member {Boolean} moveHorizontal=true
         */
        moveHorizontal: true,
        /**
         * @member {Boolean} moveVertical=true
         */
        moveVertical: true,
        /**
         * @member {Number} offsetX=0
         */
        offsetX: 0,
        /**
         * @member {Number} offsetY=0
         */
        offsetY: 0,
        /**
         * Remote method access for other workers
         * @member {Object} remote
         * @protected
         */
        remote: {
            app: [
                'setConfigs',
                'setDragProxyElement'
            ]
        },
        /**
         * @member {HTMLElement|null} scrollContainerElement=null
         */
        scrollContainerElement: null,
        /**
         * @member {DOMRect|null} scrollContainerRect=null
         */
        scrollContainerRect: null,
        /**
         * @member {Number} scrollFactorLeft=1
         */
        scrollFactorLeft: 1,
        /**
         * @member {Number} scrollFactorTop=1
         */
        scrollFactorTop: 1,
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

        let me      = this,
            imports = [];

        _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__.default.on({
            mouseEnter: me.onMouseEnter,
            mouseLeave: me.onMouseLeave,
            scope     : me
        });

        me.addGlobalEventListeners();

        if (Neo.config.hasTouchEvents) {
            imports.push(__webpack_require__.e(/*! import() | src/main/draggable/sensor/Touch.mjs */ "src/main/draggable/sensor/Touch.mjs").then(__webpack_require__.bind(__webpack_require__, /*! ../draggable/sensor/Touch.mjs */ "./node_modules/neo.mjs/src/main/draggable/sensor/Touch.mjs")));
        } else {
            imports.push(__webpack_require__.e(/*! import() | src/main/draggable/sensor/Mouse.mjs */ "src/main/draggable/sensor/Mouse.mjs").then(__webpack_require__.bind(__webpack_require__, /*! ../draggable/sensor/Mouse.mjs */ "./node_modules/neo.mjs/src/main/draggable/sensor/Mouse.mjs")));
        }

        Promise.all(imports).then(modules => {
            // create the Touch or MouseSensor
            Neo.create({
                module: modules[0].default
            });
        });
    }

    /**
     *
     */
    addGlobalEventListeners() {
        let me = this;

        document.addEventListener('drag:end',   me.onDragEnd  .bind(me), true);
        document.addEventListener('drag:move',  me.onDragMove .bind(me), true);
        document.addEventListener('drag:start', me.onDragStart.bind(me), true);
    }

    /**
     *
     * @param {Event} event
     * @returns {Object}
     */
    getEventData(event) {
        const path = event.path || event.composedPath();

        const e = {
            ..._DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__.default.getEventData(event.detail.originalEvent),
            clientX: event.detail.clientX,
            clientY: event.detail.clientY
        };

        if (event.detail.eventPath) {
            e.targetPath = event.detail.eventPath.map(e => _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__.default.getTargetData(e));
        } else {
            e.targetPath = e.path || e.composedPath();
        }

        e.path = path.map(e => _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__.default.getTargetData(e));

        return e;
    }

    /**
     *
     * @param {Object} event
     */
    onDragEnd(event) {
        let me          = this,
            parsedEvent = me.getEventData(event),
            isDrop      = me.pathIncludesDropZone(parsedEvent.targetPath);

        _DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__.default.setBodyCls({
            remove: ['neo-unselectable']
        });

        _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__.default.sendMessageToApp({
            ...parsedEvent,
            isDrop: isDrop,
            type  : 'drag:end'
        });

        if (isDrop) {
            _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__.default.sendMessageToApp({
                ..._DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__.default.getMouseEventData(event.detail.originalEvent),
                dragZoneId: me.dragZoneId,
                type      : 'drop'
            });
        }

        Object.assign(me, {
            alwaysFireDragMove    : false,
            boundaryContainerRect : null,
            dragElementRootId     : null,
            dragElementRootRect   : null,
            dragProxyCls          : 'neo-dragproxy',
            dragProxyElement      : null,
            dragZoneId            : null,
            dropZoneIdentifier    : null,
            initialScrollLeft     : 0,
            initialScrollTop      : 0,
            moveHorizontal        : true,
            moveVertical          : true,
            scrollContainerElement: null,
            scrollContainerRect   : null,
            setScrollFactorLeft   : 1,
            scrollFactorTop       : 1
        });
    }

    /**
     *
     * @param {Object} event
     */
    onDragMove(event) {
        let me        = this,
            proxyRect = me.dragProxyRect,
            rect      = me.boundaryContainerRect,
            data, left, top;

        if (me.scrollContainerElement) {
            data = me.scrollContainer({
                clientX: event.detail.clientX,
                clientY: event.detail.clientY
            });

            event.detail.clientX = data.clientX;
            event.detail.clientY = data.clientY;
        }

        if (me.dragProxyElement) {
            left = event.detail.clientX - me.offsetX;
            top  = event.detail.clientY - me.offsetY;

            if (rect) {
                if (left < rect.left) {
                    left = rect.left;
                } else if (left > rect.right - proxyRect.width) {
                    left = rect.right - proxyRect.width;
                }

                if (top < rect.top) {
                    top = rect.top;
                } else if (top > rect.bottom - proxyRect.height) {
                    top = rect.bottom - proxyRect.height
                }
            }

            if (!me.moveHorizontal) {
                left = me.dragProxyRect.x;
            }

            me.dragProxyElement.style.left = `${left}px`;

            if (!me.moveVertical) {
                top = me.dragProxyRect.y;
            }

            me.dragProxyElement.style.top = `${top}px`;
        }

        if (!me.dragProxyElement || me.alwaysFireDragMove) {
            _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__.default.sendMessageToApp({
                ...me.getEventData(event),
                type: 'drag:move'
            });
        }
    }

    /**
     *
     * @param {Object} event
     */
    onDragStart(event) {
        let me   = this,
            rect = event.target.getBoundingClientRect();

        _DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__.default.setBodyCls({
            add: ['neo-unselectable']
        });

        Object.assign(me, {
            dragProxyRect: rect,
            offsetX      : event.detail.clientX - rect.left,
            offsetY      : event.detail.clientY - rect.top
        });

        _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__.default.sendMessageToApp({
            ...this.getEventData(event),
            type: 'drag:start'
        });
    }

    /**
     *
     * @param {Object} event
     */
    onMouseEnter(event) {
        let me = this;

        if (me.pathIncludesDropZone(event.path)) {
            _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__.default.sendMessageToApp({
                ...event,
                dragZoneId: me.dragZoneId,
                type      : 'drop:enter'
            });
        }
    }

    /**
     *
     * @param {Object} event
     */
    onMouseLeave(event) {
        let me = this;

        if (me.pathIncludesDropZone(event.path)) {
            _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__.default.sendMessageToApp({
                ...event,
                dragZoneId: me.dragZoneId,
                type      : 'drop:leave'
            });
        }
    }

    /**
     *
     * @param {Array} path
     * @returns {Boolean}
     */
    pathIncludesDropZone(path) {
        let me         = this,
            hasMatch   = true,
            identifier = me.dropZoneIdentifier,
            cls, ids;

        if (identifier) {
            cls = identifier.cls;
            ids = identifier.ids;

            for (const item of path) {
                if (cls) {
                    hasMatch = false;

                    for (const targetCls of item.cls) {
                        if (cls.includes(targetCls)) {
                            hasMatch = true;
                            break;
                        }
                    }
                }

                if (hasMatch && ids && !ids.includes(item.id)) {
                    hasMatch = false;
                }

                if (hasMatch) {
                    return true;
                }
            }
        }

        return false;
    }

    /**
     *
     * @param {Object} data
     * @param {Number} data.clientX
     * @param {Number} data.clientY
     * @returns {Object}
     */
    scrollContainer(data) {
        let me     = this,
            deltaX = data.clientX - me.clientX,
            deltaY = data.clientY - me.clientY,
            el     = me.scrollContainerElement,
            gap    = 250,
            rect   = me.scrollContainerRect;

        me.clientX =  data.clientX;
        me.clientY =  data.clientY;

        if (
            (deltaX < 0 && data.clientX < rect.left  + gap) ||
            (deltaX > 0 && data.clientX > rect.right - gap)
        ) {
            el.scrollLeft += (deltaX * me.scrollFactorLeft);
        }

        if (
            (deltaY < 0 && data.clientY < rect.top    + gap) ||
            (deltaY > 0 && data.clientY > rect.bottom - gap)
        ) {
            el.scrollTop += (deltaY * me.scrollFactorTop);
        }

        return {
            clientX: me.clientX + el.scrollLeft - me.initialScrollLeft,
            clientY: me.clientY + el.scrollTop  - me.initialScrollTop
        };
    }

    /**
     *
     * @param {Object}  data
     * @param {Boolean} data.alwaysFireDragMove
     * @param {String}  data.boundaryContainerId
     * @param {String}  data.scrollContainerId
     * @param {Number}  data.scrollFactorLeft
     * @param {Number}  data.scrollFactorTop
     */
    setConfigs(data) {
        let me = this,
            node;

        if (data.boundaryContainerId) {
            node = _DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__.default.getElementOrBody(data.boundaryContainerId);
            me.boundaryContainerRect = node.getBoundingClientRect();
        }

        delete data.boundaryContainerId;

        if (data.scrollContainerId) {
            node = _DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__.default.getElementOrBody(data.scrollContainerId);

            Object.assign(me, {
                scrollContainerElement: node,
                scrollContainerRect   : node.getBoundingClientRect(),
                initialScrollLeft     : node.scrollLeft,
                initialScrollTop      : node.scrollTop
            });
        }

        delete data.scrollContainerId;

        Object.entries(data).forEach(([key, value]) => {
            if (me.hasOwnProperty(key)) {
                me[key] = value;
            } else {
                console.error('unknown key passed inside setConfigs()', key);
            }
        });
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.id
     */
    setDragProxyElement(data) {
        this.dragProxyElement = document.getElementById(data.id);
    }
}

Neo.applyClassConfig(DragDrop);

let instance = Neo.create(DragDrop);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3ZpZDE5LWhlbGl4Ly4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vRHJhZ0Ryb3AubWpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0g7QUFDQTs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtREFBSTtBQUMzQix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNB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OztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixvRUFBMEI7QUFDN0M7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG1CQUFtQixvRUFBMEI7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxpRUFBZSxRQUFRLEUiLCJmaWxlIjoiY2h1bmtzL3NyYy9tYWluL2FkZG9uL0RyYWdEcm9wLW1qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlICAgICAgZnJvbSAnLi4vLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgRG9tQWNjZXNzIGZyb20gJy4uL0RvbUFjY2Vzcy5tanMnO1xuaW1wb3J0IERvbUV2ZW50cyBmcm9tICcuLi9Eb21FdmVudHMubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLm1haW4uYWRkb24uRHJhZ0Ryb3BcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgRHJhZ0Ryb3AgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1haW4uYWRkb24uRHJhZ0Ryb3AnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5tYWluLmFkZG9uLkRyYWdEcm9wJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGFsd2F5c0ZpcmVEcmFnTW92ZT1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgYWx3YXlzRmlyZURyYWdNb3ZlOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0RPTVJlY3R8bnVsbH0gc2Nyb2xsQ29udGFpbmVyUmVjdD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBib3VuZGFyeUNvbnRhaW5lclJlY3Q6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGNsaWVudFg9MFxuICAgICAgICAgKi9cbiAgICAgICAgY2xpZW50WDogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gY2xpZW50WT0wXG4gICAgICAgICAqL1xuICAgICAgICBjbGllbnRZOiAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGRyYWdFbGVtZW50Um9vdElkPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGRyYWdFbGVtZW50Um9vdElkOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBkcmFnUHJveHlDbHM9J25lby1kcmFncHJveHknXG4gICAgICAgICAqL1xuICAgICAgICBkcmFnUHJveHlDbHM6ICduZW8tZHJhZ3Byb3h5JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0hUTUxFbGVtZW50fG51bGx9IGRyYWdQcm94eUVsZW1lbnQ9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBkcmFnUHJveHlFbGVtZW50OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7RE9NUmVjdHxudWxsfSBkcmFnUHJveHlSZWN0PW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGRyYWdQcm94eVJlY3Q6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gZHJhZ1pvbmVJZD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBkcmFnWm9uZUlkOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogWW91IGNhbiBlaXRoZXIgcGFzcyBhbiBhcnJheSBvZiAoZG9tKSBpZHMgb3IgY2xzIHJ1bGVzIG9yIGJvdGhcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogZHJvcFpvbmVJZGVudGlmaWVyOiB7XG4gICAgICAgICAqICAgICBpZHM6IFsnZm9vJywnYmFyJ11cbiAgICAgICAgICogfVxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBkcm9wWm9uZUlkZW50aWZpZXI6IHtcbiAgICAgICAgICogICAgIGNsczogWydteS1jbGFzcy0xJywnbXktY2xhc3MtMiddXG4gICAgICAgICAqIH1cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogZHJvcFpvbmVJZGVudGlmaWVyOiB7XG4gICAgICAgICAqICAgICBjbHM6IFsnbXktY2xhc3MtMScsJ215LWNsYXNzLTInXSxcbiAgICAgICAgICogICAgIGlkczogWydmb28nLCdiYXInXVxuICAgICAgICAgKiB9XG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBkcm9wWm9uZUlkZW50aWZpZXI9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZHJvcFpvbmVJZGVudGlmaWVyOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBpbml0aWFsU2Nyb2xsTGVmdD0wXG4gICAgICAgICAqL1xuICAgICAgICBpbml0aWFsU2Nyb2xsTGVmdDogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gaW5pdGlhbFNjcm9sbFRvcD0wXG4gICAgICAgICAqL1xuICAgICAgICBpbml0aWFsU2Nyb2xsVG9wOiAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbW92ZUhvcml6b250YWw9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgbW92ZUhvcml6b250YWw6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBtb3ZlVmVydGljYWw9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgbW92ZVZlcnRpY2FsOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBvZmZzZXRYPTBcbiAgICAgICAgICovXG4gICAgICAgIG9mZnNldFg6IDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IG9mZnNldFk9MFxuICAgICAgICAgKi9cbiAgICAgICAgb2Zmc2V0WTogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW90ZSBtZXRob2QgYWNjZXNzIGZvciBvdGhlciB3b3JrZXJzXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gcmVtb3RlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlbW90ZToge1xuICAgICAgICAgICAgYXBwOiBbXG4gICAgICAgICAgICAgICAgJ3NldENvbmZpZ3MnLFxuICAgICAgICAgICAgICAgICdzZXREcmFnUHJveHlFbGVtZW50J1xuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7SFRNTEVsZW1lbnR8bnVsbH0gc2Nyb2xsQ29udGFpbmVyRWxlbWVudD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzY3JvbGxDb250YWluZXJFbGVtZW50OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7RE9NUmVjdHxudWxsfSBzY3JvbGxDb250YWluZXJSZWN0PW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHNjcm9sbENvbnRhaW5lclJlY3Q6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHNjcm9sbEZhY3RvckxlZnQ9MVxuICAgICAgICAgKi9cbiAgICAgICAgc2Nyb2xsRmFjdG9yTGVmdDogMSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gc2Nyb2xsRmFjdG9yVG9wPTFcbiAgICAgICAgICovXG4gICAgICAgIHNjcm9sbEZhY3RvclRvcDogMSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaW1wb3J0cyA9IFtdO1xuXG4gICAgICAgIERvbUV2ZW50cy5vbih7XG4gICAgICAgICAgICBtb3VzZUVudGVyOiBtZS5vbk1vdXNlRW50ZXIsXG4gICAgICAgICAgICBtb3VzZUxlYXZlOiBtZS5vbk1vdXNlTGVhdmUsXG4gICAgICAgICAgICBzY29wZSAgICAgOiBtZVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5hZGRHbG9iYWxFdmVudExpc3RlbmVycygpO1xuXG4gICAgICAgIGlmIChOZW8uY29uZmlnLmhhc1RvdWNoRXZlbnRzKSB7XG4gICAgICAgICAgICBpbXBvcnRzLnB1c2goaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdzcmMvbWFpbi9kcmFnZ2FibGUvc2Vuc29yL1RvdWNoLm1qcycgKi8gJy4uL2RyYWdnYWJsZS9zZW5zb3IvVG91Y2gubWpzJykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW1wb3J0cy5wdXNoKGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnc3JjL21haW4vZHJhZ2dhYmxlL3NlbnNvci9Nb3VzZS5tanMnICovICcuLi9kcmFnZ2FibGUvc2Vuc29yL01vdXNlLm1qcycpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFByb21pc2UuYWxsKGltcG9ydHMpLnRoZW4obW9kdWxlcyA9PiB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgdGhlIFRvdWNoIG9yIE1vdXNlU2Vuc29yXG4gICAgICAgICAgICBOZW8uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICBtb2R1bGU6IG1vZHVsZXNbMF0uZGVmYXVsdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZzplbmQnLCAgIG1lLm9uRHJhZ0VuZCAgLmJpbmQobWUpLCB0cnVlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZzptb3ZlJywgIG1lLm9uRHJhZ01vdmUgLmJpbmQobWUpLCB0cnVlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZzpzdGFydCcsIG1lLm9uRHJhZ1N0YXJ0LmJpbmQobWUpLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXRFdmVudERhdGEoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IGV2ZW50LnBhdGggfHwgZXZlbnQuY29tcG9zZWRQYXRoKCk7XG5cbiAgICAgICAgY29uc3QgZSA9IHtcbiAgICAgICAgICAgIC4uLkRvbUV2ZW50cy5nZXRFdmVudERhdGEoZXZlbnQuZGV0YWlsLm9yaWdpbmFsRXZlbnQpLFxuICAgICAgICAgICAgY2xpZW50WDogZXZlbnQuZGV0YWlsLmNsaWVudFgsXG4gICAgICAgICAgICBjbGllbnRZOiBldmVudC5kZXRhaWwuY2xpZW50WVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChldmVudC5kZXRhaWwuZXZlbnRQYXRoKSB7XG4gICAgICAgICAgICBlLnRhcmdldFBhdGggPSBldmVudC5kZXRhaWwuZXZlbnRQYXRoLm1hcChlID0+IERvbUV2ZW50cy5nZXRUYXJnZXREYXRhKGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUudGFyZ2V0UGF0aCA9IGUucGF0aCB8fCBlLmNvbXBvc2VkUGF0aCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5wYXRoID0gcGF0aC5tYXAoZSA9PiBEb21FdmVudHMuZ2V0VGFyZ2V0RGF0YShlKSk7XG5cbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbkRyYWdFbmQoZXZlbnQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHBhcnNlZEV2ZW50ID0gbWUuZ2V0RXZlbnREYXRhKGV2ZW50KSxcbiAgICAgICAgICAgIGlzRHJvcCAgICAgID0gbWUucGF0aEluY2x1ZGVzRHJvcFpvbmUocGFyc2VkRXZlbnQudGFyZ2V0UGF0aCk7XG5cbiAgICAgICAgRG9tQWNjZXNzLnNldEJvZHlDbHMoe1xuICAgICAgICAgICAgcmVtb3ZlOiBbJ25lby11bnNlbGVjdGFibGUnXVxuICAgICAgICB9KTtcblxuICAgICAgICBEb21FdmVudHMuc2VuZE1lc3NhZ2VUb0FwcCh7XG4gICAgICAgICAgICAuLi5wYXJzZWRFdmVudCxcbiAgICAgICAgICAgIGlzRHJvcDogaXNEcm9wLFxuICAgICAgICAgICAgdHlwZSAgOiAnZHJhZzplbmQnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChpc0Ryb3ApIHtcbiAgICAgICAgICAgIERvbUV2ZW50cy5zZW5kTWVzc2FnZVRvQXBwKHtcbiAgICAgICAgICAgICAgICAuLi5Eb21FdmVudHMuZ2V0TW91c2VFdmVudERhdGEoZXZlbnQuZGV0YWlsLm9yaWdpbmFsRXZlbnQpLFxuICAgICAgICAgICAgICAgIGRyYWdab25lSWQ6IG1lLmRyYWdab25lSWQsXG4gICAgICAgICAgICAgICAgdHlwZSAgICAgIDogJ2Ryb3AnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5hc3NpZ24obWUsIHtcbiAgICAgICAgICAgIGFsd2F5c0ZpcmVEcmFnTW92ZSAgICA6IGZhbHNlLFxuICAgICAgICAgICAgYm91bmRhcnlDb250YWluZXJSZWN0IDogbnVsbCxcbiAgICAgICAgICAgIGRyYWdFbGVtZW50Um9vdElkICAgICA6IG51bGwsXG4gICAgICAgICAgICBkcmFnRWxlbWVudFJvb3RSZWN0ICAgOiBudWxsLFxuICAgICAgICAgICAgZHJhZ1Byb3h5Q2xzICAgICAgICAgIDogJ25lby1kcmFncHJveHknLFxuICAgICAgICAgICAgZHJhZ1Byb3h5RWxlbWVudCAgICAgIDogbnVsbCxcbiAgICAgICAgICAgIGRyYWdab25lSWQgICAgICAgICAgICA6IG51bGwsXG4gICAgICAgICAgICBkcm9wWm9uZUlkZW50aWZpZXIgICAgOiBudWxsLFxuICAgICAgICAgICAgaW5pdGlhbFNjcm9sbExlZnQgICAgIDogMCxcbiAgICAgICAgICAgIGluaXRpYWxTY3JvbGxUb3AgICAgICA6IDAsXG4gICAgICAgICAgICBtb3ZlSG9yaXpvbnRhbCAgICAgICAgOiB0cnVlLFxuICAgICAgICAgICAgbW92ZVZlcnRpY2FsICAgICAgICAgIDogdHJ1ZSxcbiAgICAgICAgICAgIHNjcm9sbENvbnRhaW5lckVsZW1lbnQ6IG51bGwsXG4gICAgICAgICAgICBzY3JvbGxDb250YWluZXJSZWN0ICAgOiBudWxsLFxuICAgICAgICAgICAgc2V0U2Nyb2xsRmFjdG9yTGVmdCAgIDogMSxcbiAgICAgICAgICAgIHNjcm9sbEZhY3RvclRvcCAgICAgICA6IDFcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbkRyYWdNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgcHJveHlSZWN0ID0gbWUuZHJhZ1Byb3h5UmVjdCxcbiAgICAgICAgICAgIHJlY3QgICAgICA9IG1lLmJvdW5kYXJ5Q29udGFpbmVyUmVjdCxcbiAgICAgICAgICAgIGRhdGEsIGxlZnQsIHRvcDtcblxuICAgICAgICBpZiAobWUuc2Nyb2xsQ29udGFpbmVyRWxlbWVudCkge1xuICAgICAgICAgICAgZGF0YSA9IG1lLnNjcm9sbENvbnRhaW5lcih7XG4gICAgICAgICAgICAgICAgY2xpZW50WDogZXZlbnQuZGV0YWlsLmNsaWVudFgsXG4gICAgICAgICAgICAgICAgY2xpZW50WTogZXZlbnQuZGV0YWlsLmNsaWVudFlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBldmVudC5kZXRhaWwuY2xpZW50WCA9IGRhdGEuY2xpZW50WDtcbiAgICAgICAgICAgIGV2ZW50LmRldGFpbC5jbGllbnRZID0gZGF0YS5jbGllbnRZO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lLmRyYWdQcm94eUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxlZnQgPSBldmVudC5kZXRhaWwuY2xpZW50WCAtIG1lLm9mZnNldFg7XG4gICAgICAgICAgICB0b3AgID0gZXZlbnQuZGV0YWlsLmNsaWVudFkgLSBtZS5vZmZzZXRZO1xuXG4gICAgICAgICAgICBpZiAocmVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChsZWZ0IDwgcmVjdC5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSByZWN0LmxlZnQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsZWZ0ID4gcmVjdC5yaWdodCAtIHByb3h5UmVjdC53aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gcmVjdC5yaWdodCAtIHByb3h5UmVjdC53aWR0aDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodG9wIDwgcmVjdC50b3ApIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gcmVjdC50b3A7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0b3AgPiByZWN0LmJvdHRvbSAtIHByb3h5UmVjdC5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gcmVjdC5ib3R0b20gLSBwcm94eVJlY3QuaGVpZ2h0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIW1lLm1vdmVIb3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgICAgbGVmdCA9IG1lLmRyYWdQcm94eVJlY3QueDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWUuZHJhZ1Byb3h5RWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7bGVmdH1weGA7XG5cbiAgICAgICAgICAgIGlmICghbWUubW92ZVZlcnRpY2FsKSB7XG4gICAgICAgICAgICAgICAgdG9wID0gbWUuZHJhZ1Byb3h5UmVjdC55O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZS5kcmFnUHJveHlFbGVtZW50LnN0eWxlLnRvcCA9IGAke3RvcH1weGA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW1lLmRyYWdQcm94eUVsZW1lbnQgfHwgbWUuYWx3YXlzRmlyZURyYWdNb3ZlKSB7XG4gICAgICAgICAgICBEb21FdmVudHMuc2VuZE1lc3NhZ2VUb0FwcCh7XG4gICAgICAgICAgICAgICAgLi4ubWUuZ2V0RXZlbnREYXRhKGV2ZW50KSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnZHJhZzptb3ZlJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uRHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHJlY3QgPSBldmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgRG9tQWNjZXNzLnNldEJvZHlDbHMoe1xuICAgICAgICAgICAgYWRkOiBbJ25lby11bnNlbGVjdGFibGUnXVxuICAgICAgICB9KTtcblxuICAgICAgICBPYmplY3QuYXNzaWduKG1lLCB7XG4gICAgICAgICAgICBkcmFnUHJveHlSZWN0OiByZWN0LFxuICAgICAgICAgICAgb2Zmc2V0WCAgICAgIDogZXZlbnQuZGV0YWlsLmNsaWVudFggLSByZWN0LmxlZnQsXG4gICAgICAgICAgICBvZmZzZXRZICAgICAgOiBldmVudC5kZXRhaWwuY2xpZW50WSAtIHJlY3QudG9wXG4gICAgICAgIH0pO1xuXG4gICAgICAgIERvbUV2ZW50cy5zZW5kTWVzc2FnZVRvQXBwKHtcbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0RXZlbnREYXRhKGV2ZW50KSxcbiAgICAgICAgICAgIHR5cGU6ICdkcmFnOnN0YXJ0J1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uTW91c2VFbnRlcihldmVudCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5wYXRoSW5jbHVkZXNEcm9wWm9uZShldmVudC5wYXRoKSkge1xuICAgICAgICAgICAgRG9tRXZlbnRzLnNlbmRNZXNzYWdlVG9BcHAoe1xuICAgICAgICAgICAgICAgIC4uLmV2ZW50LFxuICAgICAgICAgICAgICAgIGRyYWdab25lSWQ6IG1lLmRyYWdab25lSWQsXG4gICAgICAgICAgICAgICAgdHlwZSAgICAgIDogJ2Ryb3A6ZW50ZXInXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgb25Nb3VzZUxlYXZlKGV2ZW50KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLnBhdGhJbmNsdWRlc0Ryb3Bab25lKGV2ZW50LnBhdGgpKSB7XG4gICAgICAgICAgICBEb21FdmVudHMuc2VuZE1lc3NhZ2VUb0FwcCh7XG4gICAgICAgICAgICAgICAgLi4uZXZlbnQsXG4gICAgICAgICAgICAgICAgZHJhZ1pvbmVJZDogbWUuZHJhZ1pvbmVJZCxcbiAgICAgICAgICAgICAgICB0eXBlICAgICAgOiAnZHJvcDpsZWF2ZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBwYXRoXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgcGF0aEluY2x1ZGVzRHJvcFpvbmUocGF0aCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBoYXNNYXRjaCAgID0gdHJ1ZSxcbiAgICAgICAgICAgIGlkZW50aWZpZXIgPSBtZS5kcm9wWm9uZUlkZW50aWZpZXIsXG4gICAgICAgICAgICBjbHMsIGlkcztcblxuICAgICAgICBpZiAoaWRlbnRpZmllcikge1xuICAgICAgICAgICAgY2xzID0gaWRlbnRpZmllci5jbHM7XG4gICAgICAgICAgICBpZHMgPSBpZGVudGlmaWVyLmlkcztcblxuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHBhdGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2xzKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc01hdGNoID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB0YXJnZXRDbHMgb2YgaXRlbS5jbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbHMuaW5jbHVkZXModGFyZ2V0Q2xzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc01hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChoYXNNYXRjaCAmJiBpZHMgJiYgIWlkcy5pbmNsdWRlcyhpdGVtLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChoYXNNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLmNsaWVudFhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS5jbGllbnRZXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBzY3JvbGxDb250YWluZXIoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRlbHRhWCA9IGRhdGEuY2xpZW50WCAtIG1lLmNsaWVudFgsXG4gICAgICAgICAgICBkZWx0YVkgPSBkYXRhLmNsaWVudFkgLSBtZS5jbGllbnRZLFxuICAgICAgICAgICAgZWwgICAgID0gbWUuc2Nyb2xsQ29udGFpbmVyRWxlbWVudCxcbiAgICAgICAgICAgIGdhcCAgICA9IDI1MCxcbiAgICAgICAgICAgIHJlY3QgICA9IG1lLnNjcm9sbENvbnRhaW5lclJlY3Q7XG5cbiAgICAgICAgbWUuY2xpZW50WCA9ICBkYXRhLmNsaWVudFg7XG4gICAgICAgIG1lLmNsaWVudFkgPSAgZGF0YS5jbGllbnRZO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChkZWx0YVggPCAwICYmIGRhdGEuY2xpZW50WCA8IHJlY3QubGVmdCAgKyBnYXApIHx8XG4gICAgICAgICAgICAoZGVsdGFYID4gMCAmJiBkYXRhLmNsaWVudFggPiByZWN0LnJpZ2h0IC0gZ2FwKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGVsLnNjcm9sbExlZnQgKz0gKGRlbHRhWCAqIG1lLnNjcm9sbEZhY3RvckxlZnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKGRlbHRhWSA8IDAgJiYgZGF0YS5jbGllbnRZIDwgcmVjdC50b3AgICAgKyBnYXApIHx8XG4gICAgICAgICAgICAoZGVsdGFZID4gMCAmJiBkYXRhLmNsaWVudFkgPiByZWN0LmJvdHRvbSAtIGdhcClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBlbC5zY3JvbGxUb3AgKz0gKGRlbHRhWSAqIG1lLnNjcm9sbEZhY3RvclRvcCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xpZW50WDogbWUuY2xpZW50WCArIGVsLnNjcm9sbExlZnQgLSBtZS5pbml0aWFsU2Nyb2xsTGVmdCxcbiAgICAgICAgICAgIGNsaWVudFk6IG1lLmNsaWVudFkgKyBlbC5zY3JvbGxUb3AgIC0gbWUuaW5pdGlhbFNjcm9sbFRvcFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICBkYXRhXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBkYXRhLmFsd2F5c0ZpcmVEcmFnTW92ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSAgZGF0YS5ib3VuZGFyeUNvbnRhaW5lcklkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9ICBkYXRhLnNjcm9sbENvbnRhaW5lcklkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9ICBkYXRhLnNjcm9sbEZhY3RvckxlZnRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gIGRhdGEuc2Nyb2xsRmFjdG9yVG9wXG4gICAgICovXG4gICAgc2V0Q29uZmlncyhkYXRhKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBub2RlO1xuXG4gICAgICAgIGlmIChkYXRhLmJvdW5kYXJ5Q29udGFpbmVySWQpIHtcbiAgICAgICAgICAgIG5vZGUgPSBEb21BY2Nlc3MuZ2V0RWxlbWVudE9yQm9keShkYXRhLmJvdW5kYXJ5Q29udGFpbmVySWQpO1xuICAgICAgICAgICAgbWUuYm91bmRhcnlDb250YWluZXJSZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBkYXRhLmJvdW5kYXJ5Q29udGFpbmVySWQ7XG5cbiAgICAgICAgaWYgKGRhdGEuc2Nyb2xsQ29udGFpbmVySWQpIHtcbiAgICAgICAgICAgIG5vZGUgPSBEb21BY2Nlc3MuZ2V0RWxlbWVudE9yQm9keShkYXRhLnNjcm9sbENvbnRhaW5lcklkKTtcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihtZSwge1xuICAgICAgICAgICAgICAgIHNjcm9sbENvbnRhaW5lckVsZW1lbnQ6IG5vZGUsXG4gICAgICAgICAgICAgICAgc2Nyb2xsQ29udGFpbmVyUmVjdCAgIDogbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgICAgICBpbml0aWFsU2Nyb2xsTGVmdCAgICAgOiBub2RlLnNjcm9sbExlZnQsXG4gICAgICAgICAgICAgICAgaW5pdGlhbFNjcm9sbFRvcCAgICAgIDogbm9kZS5zY3JvbGxUb3BcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIGRhdGEuc2Nyb2xsQ29udGFpbmVySWQ7XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoZGF0YSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICBpZiAobWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIG1lW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcigndW5rbm93biBrZXkgcGFzc2VkIGluc2lkZSBzZXRDb25maWdzKCknLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuaWRcbiAgICAgKi9cbiAgICBzZXREcmFnUHJveHlFbGVtZW50KGRhdGEpIHtcbiAgICAgICAgdGhpcy5kcmFnUHJveHlFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YS5pZCk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhEcmFnRHJvcCk7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoRHJhZ0Ryb3ApO1xuXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7Il0sInNvdXJjZVJvb3QiOiIifQ==