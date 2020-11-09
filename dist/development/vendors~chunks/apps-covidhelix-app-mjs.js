self["webpackChunk"](["vendors~chunks/apps-covidhelix-app-mjs"],{

/***/ "./node_modules/neo.mjs/src/component/Helix.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/component/Helix.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Helix; });
/* harmony import */ var _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/ClassSystem.mjs */ "./node_modules/neo.mjs/src/util/ClassSystem.mjs");
/* harmony import */ var _collection_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../collection/Base.mjs */ "./node_modules/neo.mjs/src/collection/Base.mjs");
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _selection_HelixModel_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../selection/HelixModel.mjs */ "./node_modules/neo.mjs/src/selection/HelixModel.mjs");
/* harmony import */ var _util_Matrix_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Matrix.mjs */ "./node_modules/neo.mjs/src/util/Matrix.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _data_Store_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");








const itemsMounted = Symbol.for('itemsMounted');
const lockWheel    = Symbol.for('lockWheel'); // we can not use itemsMounted, since it is connected to onSort()

/**
 * @class Neo.component.Helix
 * @extends Neo.component.Base
 */
class Helix extends _Base_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.component.Helix'
         * @protected
         */
        className: 'Neo.component.Helix',
        /**
         * @member {String} ntype='helix'
         * @protected
         */
        ntype: 'helix',
        /**
         * The background color of the helix container
         * @member {String} backgroundColor_='#000000'
         */
        backgroundColor_: '#000000',
        /**
         * The background image of the helix container
         * @member {String} backgroundImage_=''
         */
        backgroundImage_: '',
        /**
         * The ids of expanded items will get stored here
         * @member {Array} clonedItems=[]
         * @protected
         */
        clonedItems: [],
        /**
         * @member {String[]} cls=['neo-helix']
         */
        cls: ['neo-helix'],
        /**
         * The vertical delta between each helix item (increasing this value will create a spiral)
         * @member {Number} deltaY_=1.5
         */
        deltaY_: 1.5,
        /**
         * Multiselections will reduce the opacity and set this flag to true
         * @member {Boolean} dimmed_=false
         */
        dimmed_: false,
        /**
         * Multiselections will reduce the opacity and set this flag to true
         * @member {Number} dimmedMaxOpacity_=0.3
         */
        dimmedMaxOpacity_: 0.3,
        /**
         * Multiselections will reduce the opacity and set this flag to true
         * @member {Number} dimmedMinOpacity_=0.2
         */
        dimmedMinOpacity_: 0.2,
        disableSelection : false,
        /**
         * Flip images by 180° for a not mirrored inner view
         * @member {Boolean} flipped_=false
         */
        flipped_: false,
        /**
         * True to rotate the helix when using keynav, so that the selected items stays in front
         * @member {Boolean} followSelection_=false
         */
        followSelection_: false,
        /**
         * The record field containing the image data.
         * Nested fields are supported (e.g. author.image)
         * @member {String} imageField='image'
         */
        imageField: 'image',
        /**
         * The path to the images folder
         * Will get set inside the ctor to avoid issues inside the webpack builds
         * @member {String|null} imageSource=Neo.config.resourcesPath + 'examples/'
         */
        imageSource: null,
        /**
         * Amount of items per row (circle) -> 360° / 10 = 36
         * @member {Number} itemAngle_=8
         */
        itemAngle_: 8,
        /**
         * @member {Object} itemTpl_
         */
        itemTpl_: {
            cls     : ['surface', 'neo-helix-item'],
            style   : {},
            tabIndex: '-1',
            cn: [{
                tag: 'img',
                cls: ['contact-item']
            }]
        },
        /**
         * The unique record field containing the id.
         * @member {String} keyProperty='id'
         */
        keyProperty: 'id',
        /**
         * Additional used keys for the selection model
         * @member {Object} keys
         */
        keys: {
            'Enter': 'onKeyDownEnter',
            'Space': 'onKeyDownSpace'
        },
        /**
         * We store one instance of the matrix here to avoid creating new ones on each refresh operation
         * @member {Neo.util.Matrix|null} matrix=null
         * @protected
         */
        matrix: null,
        /**
         * The max amount of store items to show
         * @member {Number} maxItems_=300
         */
        maxItems_: 300,
        /**
         * The max opacity for items inside the foreground
         * @member {Number} maxOpacity_=0.8
         */
        maxOpacity_: 0.8,
        /**
         * The max opacity for items inside the background
         * @member {Number} minOpacity_=0.3
         */
        minOpacity_: 0.3,
        /**
         * The zooming factor which replaces the default wheelDelta.
         * @member {Number} mouseWheelDeltaX=5
         */
        mouseWheelDeltaX: 5,
        /**
         * The zooming factor which replaces the default wheelDelta.
         * @member {Number} mouseWheelDeltaY=50
         */
        mouseWheelDeltaY: 50,
        /**
         * Specifies whether the mouse wheel should change the translateZ value for zooming
         * @member {Boolean} mouseWheelEnabled_=true
         */
        mouseWheelEnabled_: true,
        /**
         * The DOM element offsetHeight of the top level div.
         * Gets fetched after the helix got mounted.
         * @member {Boolean} mouseWheelEnabled=true
         * @protected
         */
        offsetHeight: null,
        /**
         * The DOM element offsetWidth of the top level div.
         * Gets fetched after the helix got mounted.
         * @member {Boolean} mouseWheelEnabled=true
         * @protected
         */
        offsetWidth: null,
        /**
         * The perspective of the Helix view in px
         * @member {Number} perspective_=800
         */
        perspective_: 800,
        /**
         * The radius of the Helix in px
         * @member {Number} radius_=1500
         */
        radius_: 1500,
        /**
         * The rotationAngle of the Helix in degrees
         * @member {Number} rotationAngle_=780
         */
        rotationAngle_: 780,
        /**
         * We store one instance of the rotation matrix here to avoid creating new ones on each refresh operation
         * @member {Neo.util.Matrix|null} rotationMatrix=null
         * @protected
         */
        rotationMatrix: null,
        /**
         * True displays the first & last name record fields below an expanded item
         * @member {Boolean} showCloneInfo=true
         */
        showCloneInfo: true,
        /**
         * The name of the CSS rule for selected items
         * @member {String} selectedItemCls='neo-selected'
         */
        selectedItemCls: 'neo-selected',
        /**
         * uses the selection.HelixModel by default
         * @member {Neo.selection.HelixModel|null} selectionModel_=null
         */
        selectionModel_: null,
        /**
         * The store instance or class containing the data for the gallery items
         * @member {Neo.data.Store|null} store_=null
         */
        store_: null, // todo: use a store once collections are integrated
        /**
         * The setTimeout() ids for calls which can get cancelled
         * @member {Array} transitionTimeouts=[]
         * @protected
         */
        transitionTimeouts: [],
        /**
         * The translateX gets included into each helix item
         * @member {Number} translateX_=400
         */
        translateX_: 400,
        /**
         * The translateX value gets included into each helix item
         * @member {Number} translateY_=-350
         */
        translateY_: -350,
        /**
         * The translateX value gets included into each helix item
         * @member {Number} translateZ_=-5000
         */
        translateZ_: -5000,
        /**
         * The url for the store to load the data
         * @member {String} url_='../resources/examples/data/ai_contacts.json'
         */
        url_: '../../resources/examples/data/ai_contacts.json',
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            style   : {},
            tabIndex: '-1',
            cn: [{
                cls  : ['container'],
                style: {},
                cn: [{
                    cls  : ['group'],
                    cn   : [],
                    style: {
                        opacity  : 1,
                        transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 461, 452.5, -100700, 1)'
                    }
                }]
            }]
        }
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me           = this,
            domListeners = Neo.clone(me.domListeners, true);

        me[itemsMounted] = false;
        me[lockWheel]    = false;

        if (me.imageSource === null) {
            me.imageSource = Neo.config.resourcesPath + 'examples/';
        }

        domListeners.push({
            click: me.onClick,
            wheel: me.onMouseWheel,
            scope: me
        });

        me.domListeners = domListeners;
    }

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        if (me.selectionModel) {
            me.selectionModel.register(me);
        }

        // load data for the example collection
        if (!(me.store instanceof _data_Store_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])) {
            me.loadData();
        }
    }

    /**
     * Triggered after the flipped config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetFlipped(value, oldValue) {
        this.applyItemTransitions(this.refresh, 1000);
    }

    /**
     * Triggered after the maxItem config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetMaxItems(value, oldValue) {
        let me = this;

        if (value && me.rendered) {
            if (oldValue > value) {
                me.destroyItems(value, oldValue - value);
            } else {
                me.createItems(oldValue);
            }
        }
    }

    /**
     * Triggered after the mounted config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetMounted(value, oldValue) {
        super.afterSetMounted(value, oldValue);

        if (value) {
            this.getOffsetValues();
        }
    }

    /**
     * Triggered after the perspective config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetPerspective(value, oldValue) {
        let me = this;

        if (me.mounted) {
            Neo.currentWorker.promiseMessage('main', {
                action : 'updateDom',
                appName: me.appName,
                deltas : {
                    id   : me.vdom.id,
                    style: {
                        perspective: value + 'px'
                    }
                }
            });

            me.updateCloneTranslate();
        }
    }

    /**
     * Triggered after the selectionModel config got changed
     * @param {Neo.selection.Model} value
     * @param {Neo.selection.Model} oldValue
     * @protected
     */
    afterSetSelectionModel(value, oldValue) {
        if (this.rendered) {
            value.register(this);
        }
    }

    /**
     * Triggered after the url config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetUrl(value, oldValue) {
        let me = this;

        if (me.rendered) {
            me.destroyItems();
            me.loadData();
        }
    }

    /**
     *
     * @param callback
     * @param animationTime
     * @param callbackParam
     * @protected
     */
    applyItemTransitions(callback, animationTime, callbackParam) {
        let me  = this,
            cls = 'neo-transition-' + animationTime,
            timeoutId;

        me.transitionTimeouts.forEach(item => {
            clearTimeout(item);
        });

        me.transitionTimeouts.splice(0, me.transitionTimeouts.length);

        if (me.mounted) {
            Neo.currentWorker.promiseMessage('main', {
                action : 'updateDom',
                appName: me.appName,
                deltas : {
                    id : me.id,
                    cls: {
                        add   : [cls],
                        remove: []
                    }
                }
            }).then(() => {
                callback.apply(me, [callbackParam]);

                timeoutId = setTimeout(() => {
                    _util_Array_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].remove(me.transitionTimeouts, timeoutId);

                    Neo.currentWorker.promiseMessage('main', {
                        action : 'updateDom',
                        appName: me.appName,
                        deltas : {
                            id : me.id,
                            cls: {
                                add   : [],
                                remove: [cls]
                            }
                        }
                    });
                }, animationTime + 200);

                me.transitionTimeouts.push(timeoutId);
            });
        }
    }

    /**
     *
     * @returns {Object}
     */
    beforeGetItemTpl() {
        return Neo.clone(this._itemTpl, true);
    }

    /**
     * Triggered before the selectionModel config gets changed.
     * @param {Neo.selection.Model} value
     * @param {Neo.selection.Model} oldValue
     * @protected
     */
    beforeSetSelectionModel(value, oldValue) {
        if (oldValue) {
            oldValue.destroy();
        }

        return _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].beforeSetInstance(value, _selection_HelixModel_mjs__WEBPACK_IMPORTED_MODULE_3__["default"], {
            listeners: {
                selectionChange: this.onSelectionChange,
                scope          : this
            }
        });
    }

    /**
     * Triggered before the store config gets changed.
     * @param {Neo.data.Store|null} value
     * @param {Neo.data.Store|null} oldValue
     * @protected
     */
    beforeSetStore(value, oldValue) {
        let me = this;

        if (oldValue) {
            oldValue.destroy();
        }

        // todo: remove the if check once all demos use stores (instead of collections)
        if (value) {
            return _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].beforeSetInstance(value, _data_Store_mjs__WEBPACK_IMPORTED_MODULE_6__["default"], {
                listeners  : {
                    load : me.onStoreLoad,
                    sort : me.onSort,
                    scope: me
                }
            });
        }

        return Neo.create(_collection_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], {
            keyProperty: 'id',
            listeners  : {
                sort : me.onSort,
                scope: me
            }
        });
    }

    /**
     * Calculate an opacity gradient based on the item rotation angle
     * @param {Object} item
     * @returns {Number}
     */
    calculateOpacity(item) {
        let me           = this,
            maxOpacity   = me.maxOpacity,
            minOpacity   = me.minOpacity,
            deltaOpacity = maxOpacity - minOpacity,
            angle, opacity, opacityFactor;

        if (deltaOpacity === 0) {
            opacity = maxOpacity;
        } else {
            angle = item.rotationAngle % 360;

            while (angle < 0) {
                angle += 360;
            }

            while (angle > 180) {
                angle = 360 - angle;
            }

            // non linear distribution, since the angle does not match delta translateZ
            opacityFactor = 1 - Math.sin(angle * Math.PI / 360);

            opacity = minOpacity + deltaOpacity * opacityFactor;
        }

        return opacity;
    }

    /**
     * Override this method to get different item-markups
     * @param {Object} vdomItem
     * @param {Object} record
     * @param {Number} index
     * @returns {Object} vdomItem
     */
    createItem(vdomItem, record, index) {
        let me = this;

        vdomItem.id = me.getItemVnodeId(record[me.keyProperty]);

        vdomItem.cn[0].id  = me.getItemVnodeId(record[me.keyProperty]) + '_img';
        vdomItem.cn[0].src = me.imageSource + Neo.ns(me.imageField, false, record);

        return vdomItem;
    }

    /**
     * @param {Number} [startIndex] the start index for creating items,
     * e.g. increasing maxItems only needs to create the new ones
     * @protected
     */
    createItems(startIndex) {
        let me            = this,
            deltaY        = me.deltaY,
            group         = me.getItemsRoot(),
            itemAngle     = me.itemAngle,
            matrix        = me.matrix,
            radius        = me.radius,
            rotationAngle = me.rotationAngle,
            translateX    = me.translateX,
            translateY    = me.translateY,
            translateZ    = me.translateZ,
            vdom          = me.vdom,
            i             = startIndex || 0,
            len           = Math.min(me.maxItems, me.store.items.length),
            angle, item, matrixItems, transformStyle, vdomItem, c, s, x, y, z;

        if (!me.mounted) {
            const listenerId = me.on('mounted', () => {
                me.un('mounted', listenerId);
                setTimeout(() => {
                    me.createItems(startIndex);
                }, 100);
            });
        } else {
            // console.log('createItems', me.id, me.store);

            for (; i < len; i++) {
                item = me.store.items[i];

                angle = -rotationAngle + i * itemAngle;

                s = Math.sin(angle * Math.PI / 180);
                c = Math.cos(angle * Math.PI / 180);

                x = radius * s - 300 + translateX;
                y = -400 + angle * deltaY + translateY;
                z = 99800 + radius * c + translateZ;

                matrixItems = [
                    [c, 0, -s, 0],
                    [0, 1,  0, 0],
                    [s, 0,  c, 0],
                    [x, y,  z, 1]
                ];

                if (!matrix) {
                    me.matrix = matrix = Neo.create(_util_Matrix_mjs__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        items: matrixItems
                    });
                } else {
                    matrix.items = matrixItems;
                }

                transformStyle = matrix.getTransformStyle();

                vdomItem = me.createItem(me.itemTpl, item, i);

                item.rotationAngle  = angle;
                item.transformStyle = transformStyle;

                vdomItem. style = vdomItem.style || {};

                vdomItem.style.opacity   = me.calculateOpacity(item);
                vdomItem.style.transform = transformStyle;

                group.cn.push(vdomItem);
            }

            me[lockWheel] = false;

            me.promiseVdomUpdate(vdom).then(() => {
                me[itemsMounted] = true;

                setTimeout(() => {
                    me[lockWheel] = true;
                }, 500);
            });
        }
    }

    /**
     * @protected
     */
    destroyClones() {
        let me           = this,
            store        = me.store,
            deltas       = [],
            removeDeltas = [],
            id, record;

        if (me.clonedItems.length > 0) {
            me.clonedItems.forEach(item => {
                id     = me.getItemId(item.id);
                record = store.get(id);

                record.expanded = false;

                deltas.push({
                    id   : item.id,
                    style: {
                        opacity  : record.opacity,
                        transform: record.transformStyle
                    }
                });

                removeDeltas.push({
                    id    : item.id,
                    action: 'removeNode'
                })
            });

            me.clonedItems = [];

            Neo.currentWorker.promiseMessage('main', {
                action : 'updateDom',
                appName: me.appName,
                deltas : deltas
            }).then(data => {
                setTimeout(() => {
                    Neo.currentWorker.promiseMessage('main', {
                        action : 'updateDom',
                        appName: me.appName,
                        deltas : removeDeltas
                    });
                }, 650);
            });
        }
    }

    /**
     *
     * @param {Number} [startIndex]
     * @param {Number} [amountItems]
     */
    destroyItems(startIndex, amountItems) {
        let me   = this,
            vdom = me.vdom;

        me.getItemsRoot().cn.splice(startIndex || 0, amountItems || me.store.getCount());
        me.vdom = vdom;
    }

    /**
     * Moves a clone of an item to the top left corner
     * @param {String} itemId
     */
    expandItem(itemId) {
        let me         = this,
            store      = me.store,
            record     = store.get(itemId),
            index      = store.indexOf(itemId),
            isExpanded = !!record.expanded,
            group      = me.getItemsRoot(),
            itemVdom   = Neo.clone(group.cn[index], true);

        me.destroyClones();

        if (isExpanded !== true) {
            record.expanded = true;

            itemVdom.id = itemVdom.id + '__clone';
            itemVdom.style.transform = record.transformStyle;
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].add(itemVdom.cls, 'neo-transition-600');
            delete itemVdom.tabIndex;

            itemVdom.cn[0].id = itemVdom.cn[0].id + '__clone';

            if (me.showCloneInfo) {
                itemVdom.cn.push({
                    cls      : ['contact-name'],
                    innerHTML: record.firstname + ' ' + record.lastname
                });
            }

            Neo.vdom.Helper.create({
                autoMount  : true,
                parentId   : group.id,
                parentIndex: store.getCount(),
                ...itemVdom
            }).then(data => {
                me.clonedItems.push(itemVdom);

                setTimeout(() => {
                    Neo.currentWorker.promiseMessage('main', {
                        action : 'updateDom',
                        appName: me.appName,
                        deltas : [{
                            id   : itemVdom.id,
                            style: {
                                opacity  : 1,
                                transform: me.getCloneTransform()
                            }
                        }]
                    });
                }, 50);
            });
        }
    }

    /**
     *
     * @returns {String}
     */
    getCloneTransform() {
        let me         = this,
            translateX = (me.offsetWidth  - 1350) / 3,
            translateY = (me.offsetHeight - 1320) / 3,
            translateZ = 100700 + me.perspective / 1.5;

        return 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,'+translateX+','+translateY+','+translateZ+',1)';
    }

    /**
     *
     * @param {String} vnodeId
     * @returns {Number}
     */
    getItemId(vnodeId) {
        return parseInt(vnodeId.split('__')[1]);
    }

    /**
     * Returns the vdom node containing the helix items
     * @returns {Object} vdom
     */
    getItemsRoot() {
        return this.vdom.cn[0].cn[0];
    }

    /**
     *
     * @param {Number|String} id
     * @returns {String}
     */
    getItemVnodeId(id) {
        return this.id + '__' + id;
    }

    /**
     * @param {Number} [delay=100]
     */
    getOffsetValues(delay=100) {
        let me = this;

        setTimeout(() => {
            Neo.currentWorker.promiseMessage('main', {
                action    : 'readDom',
                appName   : me.appName,
                vnodeId   : me.id,
                attributes: [
                    'offsetHeight',
                    'offsetWidth'
                ]
            }).then(data => {
                me.offsetHeight = data.attributes.offsetHeight;
                me.offsetWidth  = data.attributes.offsetWidth;
            });
        }, delay);
    }

    /**
     *
     */
    loadData() {
        let me = this;

        Neo.Xhr.promiseJson({
            insideNeo: true,
            url      : me.url
        }).then(data => {
            me.store.items = data.json.data;
            me.createItems();
        }).catch(err => {
            console.log('Error for Neo.Xhr.request', err, me.id);
        });
    }

    /**
     *
     * @param {String} itemId
     */
    moveToSelectedItem(itemId) {
        let me = this;
        me.rotationAngle = me.store.get(itemId).rotationAngle + me.rotationAngle;
    }

    /**
     *
     * @param {Object} data
     */
    onClick(data) {
        this.fire(data.id === this.id ? 'containerClick' : 'itemClick', data);
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDownEnter(data) {
        let item = this.selectionModel.items[0];

        if (item) {
            this.expandItem(item);
        }
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDownSpace(data) {
        this.applyItemTransitions(this.moveToSelectedItem, 1000, this.selectionModel.items[0] || 0);
    }

    /**
     *
     * @param {Object} data
     */
    onMouseWheel(data) {
        let me            = this,
            deltaX        = data.deltaX,
            deltaY        = data.deltaY,
            rotationAngle = me.rotationAngle,
            translateZ    = me.translateZ;

        if (me.mouseWheelEnabled && me[lockWheel]) {
            me._rotationAngle = rotationAngle + (deltaX * me.mouseWheelDeltaX); // silent update
            me._translateZ    = translateZ    + (deltaY * me.mouseWheelDeltaY); // silent update

            me.refresh();

            me.fire('changeRotation',   me._rotationAngle);
            me.fire('changeTranslateZ', me._translateZ);
        }
    }

    /**
     *
     * @param {String[]} value
     * @param {String[]} oldValue
     */
    onSelectionChange(value, oldValue) {
        let me = this;

        if (me.followSelection && value && value[0]) {
            me.applyItemTransitions(me.moveToSelectedItem, 100, value[0]);
        }
    }

    /**
     * @protected
     */
    onSort() {
        const me = this;

        if (me[itemsMounted] === true) {console.log('sort');
            me.applyItemTransitions(me.sortItems, 1000);
        }
    }

    /**
     *
     * @param {Array} items
     */
    onStoreLoad(items) {
        this.getItemsRoot().cn = []; // silent update
        this.createItems();
    }

    /**
     * @protected
     */
    refresh() {
        let me             = this,
            deltas         = [],
            deltaY         = me.deltaY,
            flipped        = me.flipped,
            index          = 0,
            itemAngle      = me.itemAngle,
            len            = Math.min(me.maxItems, me.store.getCount()),
            matrix         = me.matrix,
            radius         = me.radius,
            rotationAngle  = me.rotationAngle,
            rotationMatrix = me.rotationMatrix,
            translateX     = me.translateX,
            translateY     = me.translateY,
            translateZ     = me.translateZ,
            vdom           = me.vdom,
            angle, item, opacity, rotateY, transformStyle, vdomItem, c, s, x, y, z;

        if (flipped) {
            rotateY = _util_Matrix_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].rotateY(180 * Math.PI / 180);

            if (!rotationMatrix) {
                me.rotationMatrix = rotationMatrix = Neo.create(_util_Matrix_mjs__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    items: rotateY
                });
            } else {
                rotationMatrix.items = rotateY;
            }
        }

        for (; index < len; index++) {
            item     = me.store.items[index];
            vdomItem = vdom.cn[0].cn[0].cn[index];

            angle = -rotationAngle + index * itemAngle;

            s = Math.sin(angle * Math.PI / 180);
            c = Math.cos(angle * Math.PI / 180);

            x =  -300 + radius * s     + translateX;
            y =  -400 + angle * deltaY + translateY;
            z = 99800 + radius * c     + translateZ;

            matrix.items = [
                [c, 0, -s, 0],
                [0, 1,  0, 0],
                [s, 0,  c, 0],
                [x, y,  z, 1]
            ];

            if (flipped) {
                matrix = rotationMatrix.x(matrix);
            }

            transformStyle = matrix.getTransformStyle();
            matrix.destroy();

            Object.assign(item, {
                rotationAngle : angle,
                transformStyle: transformStyle
            });

            opacity = me.calculateOpacity(item);
            item.opacity = opacity;

            Object.assign(item, {
                opacity       : opacity,
                rotationAngle : angle,
                transformStyle: transformStyle
            });

            deltas.push({
                id   : me.getItemVnodeId(item[me.keyProperty]),
                style: {
                    opacity  : opacity,
                    transform: transformStyle
                }
            });
        }

        Neo.currentWorker.promiseMessage('main', {
            action : 'updateDom',
            appName: me.appName,
            deltas : deltas
        });
    }

    /**
     * @protected
     */
    refreshIfMounted() {
        if (this.mounted) {
            this.refresh();
        }
    }

    /**
     *
     */
    sortItems() {
        let me       = this,
            deltas   = [],
            parentId = me.vdom.cn[0].cn[0].id,
            i        = 0,
            len      = Math.min(me.maxItems, me.store.getCount());

        for (; i < len; i++) {
            deltas.push({
                action  : 'moveNode',
                id      : me.getItemVnodeId(me.store.items[i][me.keyProperty]),
                index   : i,
                parentId: parentId
            });
        }

        Neo.currentWorker.promiseMessage('main', {
            action : 'updateDom',
            appName: me.appName,
            deltas : deltas
        }).then(() => {
            me.refresh();
        });
    }

    /**
     * @protected
     */
    updateCloneTranslate() {
        let me           = this,
            afterDeltas  = [],
            deltas       = [],
            timeoutId, transform;

        if (me.clonedItems.length > 0) {
            transform = me.getCloneTransform(true);

            me.transitionTimeouts.forEach(item => {
                clearTimeout(item);
            });

            me.clonedItems.forEach(item => {
                deltas.push({
                    id : item.id,
                    cls: {
                        add   : [],
                        remove: ['neo-transition-600']
                    },
                    style: {
                        transform: transform
                    }
                });

                afterDeltas.push({
                    id : item.id,
                    cls: {
                        add   : ['neo-transition-600'],
                        remove: []
                    }
                });
            });

            Neo.currentWorker.promiseMessage('main', {
                action : 'updateDom',
                appName: me.appName,
                deltas : deltas
            }).then(() => {
                timeoutId = setTimeout(() => {
                    _util_Array_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].remove(me.transitionTimeouts, timeoutId);

                    Neo.currentWorker.promiseMessage('main', {
                        action : 'updateDom',
                        appName: me.appName,
                        deltas : afterDeltas
                    });
                }, 200);

                me.transitionTimeouts.push(timeoutId);
            });
        }
    }
}

const cfg = {enumerable: false, value: Helix.prototype.refreshIfMounted};

Object.defineProperties(Helix.prototype, {
    afterSetDeltaY       : cfg,
    afterSetItemAngle    : cfg,
    afterSetMaxOpacity   : cfg,
    afterSetMinOpacity   : cfg,
    afterSetRadius       : cfg,
    afterSetRotationAngle: cfg,
    afterSetTranslateX   : cfg,
    afterSetTranslateY   : cfg,
    afterSetTranslateZ   : cfg
});

Neo.applyClassConfig(Helix);



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/field/Number.mjs":
/*!********************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/Number.mjs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Number; });
/* harmony import */ var _trigger_SpinDown_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trigger/SpinDown.mjs */ "./node_modules/neo.mjs/src/form/field/trigger/SpinDown.mjs");
/* harmony import */ var _trigger_SpinUp_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trigger/SpinUp.mjs */ "./node_modules/neo.mjs/src/form/field/trigger/SpinUp.mjs");
/* harmony import */ var _trigger_SpinUpDown_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trigger/SpinUpDown.mjs */ "./node_modules/neo.mjs/src/form/field/trigger/SpinUpDown.mjs");
/* harmony import */ var _Text_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Text.mjs */ "./node_modules/neo.mjs/src/form/field/Text.mjs");





/**
 * Uses an input type number and optionally provides custom spin buttons for up and down
 * @class Neo.form.field.Number
 * @extends Neo.form.field.Text
 */
class Number extends _Text_mjs__WEBPACK_IMPORTED_MODULE_3__["default"] {
    static getStaticConfig() {return {
        /**
         * Valid values for triggerPosition
         * @member {String[]} triggerPositions=['right', 'sides']
         * @protected
         * @static
         */
        triggerPositions: ['right', 'sides']
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.Number'
         * @protected
         */
        className: 'Neo.form.field.Number',
        /**
         * @member {String} ntype='numberfield'
         * @protected
         */
        ntype: 'numberfield',
        /**
         * @member {Array} cls=['neo-numberfield', 'neo-textfield']
         */
        cls: ['neo-numberfield', 'neo-textfield'],
        /**
         * @member {Number[]|null} excluded=null
         */
        excludedValues: null,
        /**
         * false only allows changing the field using the spin buttons
         * @member {Boolean} inputEditable_=true
         */
        inputEditable_: true,
        /**
         * Value for the inputType_ textfield config
         * @member {String} inputType='number'
         */
        inputType: 'number',
        /**
         * @member {Number} maxValue_=100
         */
        maxValue_: 100,
        /**
         * @member {Number} minValue_=0
         */
        minValue_: 0,
        /**
         * @member {Number} stepSize_=1
         */
        stepSize_: 1,
        /**
         * Valid values: 'right', 'sides'
         * @member {String} triggerPosition='right'
         */
        triggerPosition_: 'right',
        /**
         * @member {Boolean} useSpinButtons_=true
         */
        useSpinButtons_: true
    }}

    /**
     *
     */
    onConstructed() {
        this.updateTriggers();
        super.onConstructed();
    }

    /**
     * Triggered after the inputEditable config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetInputEditable(value, oldValue) {
        let me      = this,
            vdom    = me.vdom,
            inputEl = me.getInputEl(),
            style   = inputEl.style || {};

        if (value) {
            delete style.pointerEvents;
        } else {
            style.pointerEvents = 'none';
        }

        me.vdom = vdom;
    }

    /**
     * Triggered after the maxValue config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetMaxValue(value, oldValue) {
        this.changeInputElKey('max', value);
    }

    /**
     * Triggered after the minValue config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetMinValue(value, oldValue) {
        this.changeInputElKey('min', value);
    }

    /**
     * Triggered after the stepSize config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetStepSize(value, oldValue) {
        let me  = this,
            val = me.value,
            modulo;

        me.changeInputElKey('step', value);

        if (val !== null) {
            modulo = (val - me.minValue) % value;

            if (modulo !== 0) { // find the closest valid value
                if (modulo / value > 0.5) {
                    if      (val + value - modulo < me.maxValue) {me.value = val + value - modulo;}
                    else if (val - modulo > me.minValue)         {me.value = val - modulo;}
                } else {
                    if      (val - modulo > me.minValue)         {me.value = val - modulo;}
                    else if (val + value - modulo < me.maxValue) {me.value = val + value - modulo;}
                }
            }
        }
    }

    /**
     * Triggered after the triggerPosition config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetTriggerPosition(value, oldValue) {
        if (oldValue) {
            this.updateTriggers();
        }
    }

    /**
     * Triggered after the useSpinButtons config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetUseSpinButtons(value, oldValue) {
        if (typeof oldValue === 'boolean') {
            this.updateTriggers();
        }
    }

    /**
     * Triggered before the triggerPosition config gets changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    beforeSetTriggerPosition(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'triggerPosition');
    }

    /**
     * @param {Object} data
     * @override
     */
    onInputValueChange(data) {
        let me       = this,
            value    = data.value,
            oldValue = me.value;

        if (!value && !me.required) {
            super.onInputValueChange(data);
        } else {
            value = parseInt(value); // todo: support for other number types

            if (!Neo.isNumber(value)) {
                me._value = oldValue;
            } else {
                value = value - value % me.stepSize;
                value = Math.max(me.minValue, value);
                value = Math.min(me.maxValue, value);

                data.value = value;

                super.onInputValueChange(data);
            }
        }
    }

    /**
     * @protected
     */
    onSpinButtonDownClick() {
        let me       = this,
            oldValue = me.value || (me.maxValue + me.stepSize),
            value    = Math.max(me.minValue, oldValue - me.stepSize);

        if (me.excludedValues) {
            while(me.excludedValues.includes(value)) {
                value = Math.max(me.minValue, value - me.stepSize);
            }
        }

        if (oldValue !== value) {
            me.value = value;
        }
    }

    /**
     * @protected
     */
    onSpinButtonUpClick() {
        let me       = this,
            oldValue = me.value || (me.minValue - me.stepSize),
            value    = Math.min(me.maxValue, oldValue + me.stepSize);

        if (me.excludedValues) {
            while(me.excludedValues.includes(value)) {
                value = Math.min(me.maxValue, value + me.stepSize);
            }
        }

        if (oldValue !== value) {
            me.value = value;
        }
    }

    /**
     *
     */
    updateTriggers() {
        let me       = this,
            triggers = me.triggers || [];

        if (me.useSpinButtons) {
            if (me.triggerPosition === 'right') {
                if (!me.hasTrigger('spinupdown')) {
                    triggers.push(_trigger_SpinUpDown_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]);
                }

                me.removeTrigger('spindown', true, triggers);
                me.removeTrigger('spinup',   true, triggers);
            } else {
                if (!me.hasTrigger('spindown')) {
                    triggers.push(_trigger_SpinDown_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]);
                }

                if (!me.hasTrigger('spinup')) {
                    triggers.push(_trigger_SpinUp_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]);
                }

                me.removeTrigger('spinupdown', true, triggers);
            }
        } else {
            me.removeTrigger('spindown',   true, triggers);
            me.removeTrigger('spinup',     true, triggers);
            me.removeTrigger('spinupdown', true, triggers);
        }

        me.triggers = triggers;
    }
}

Neo.applyClassConfig(Number);



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/field/Range.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/Range.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Range; });
/* harmony import */ var _Number_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Number.mjs */ "./node_modules/neo.mjs/src/form/field/Number.mjs");


/**
 * @class Neo.form.field.Range
 * @extends Neo.form.field.Number
 */
class Range extends _Number_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.Range'
         * @protected
         */
        className: 'Neo.form.field.Range',
        /**
         * @member {String} ntype='rangefield'
         * @protected
         */
        ntype: 'rangefield',
        /**
         * True shows a clear trigger in case the field has a non empty value.
         * @member {Boolean} clearable=false
         */
        clearable: false,
        /**
         * @member {String[]} cls=['neo-rangefield','neo-textfield']
         */
        cls: ['neo-rangefield', 'neo-textfield'],
        /**
         * Value for the inputType_ textfield config
         * @member {String} inputType='range'
         */
        inputType: 'range',
        /**
         * @member {Array} tickmarks_=[]
         */
        tickmarks_: [],
        /**
         * @member {Boolean} useInputEvent=false
         */
        useInputEvent : false,
        /**
         * Disables the field.Number buttons
         * @member {Boolean} useInputEvent=false
         */
        useSpinButtons: false
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me           = this,
            domListeners = me.domListeners,
            inputEl      = me.vdom.cn[1];

        if (me.useInputEvent) {
            domListeners.push({
                input: {
                    fn    : me.onInputValueChange,
                    id    : me.vdom.cn[1].id,
                    scope : me
                }
            });

            me.domListeners = domListeners;
        }

        inputEl.cls = ['neo-rangefield-input']; // replace neo-textfield-input
    }

    /**
     * Triggered after the tickmarks config got changed
     * @param {Array} value
     * @param {Array} oldValue
     * @protected
     */
    afterSetTickmarks(value, oldValue) {
        //console.log('updateTickmarks');
    }
}

Neo.applyClassConfig(Range);



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/field/trigger/SpinDown.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/trigger/SpinDown.mjs ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SpinDown; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/form/field/trigger/Base.mjs");


/**
 * Decreases the value of a NumberField
 * @class Neo.form.field.trigger.SpinDown
 * @extends Neo.form.field.trigger.Base
 */
class SpinDown extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.trigger.SpinUp'
         * @protected
         */
        className: 'Neo.form.field.trigger.SpinDown',
        /**
         * @member {String} ntype='trigger-spindown'
         * @protected
         */
        ntype: 'trigger-spindown',
        /**
         * @member {String} align_='start'
         */
        align: 'start',
        /**
         * @member {String|null} iconCls='fa fa-chevron-left'
         */
        iconCls: 'fa fa-chevron-left',
        /**
         * Internal flag used by field.getTrigger()
         * @member {String} type='spindown'
         * @protected
         */
        type: 'spindown'
    }}

    onTriggerClick(data) {
        this.field.onSpinButtonDownClick();
    }
}

Neo.applyClassConfig(SpinDown);



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/field/trigger/SpinUp.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/trigger/SpinUp.mjs ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SpinUp; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/form/field/trigger/Base.mjs");


/**
 * Increases the value of a NumberField
 * @class Neo.form.field.trigger.SpinUp
 * @extends Neo.form.field.trigger.Base
 */
class SpinUp extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.trigger.SpinUp'
         * @protected
         */
        className: 'Neo.form.field.trigger.SpinUp',
        /**
         * @member {String} ntype='trigger-spinup'
         * @protected
         */
        ntype: 'trigger-spinup',
        /**
         * @member {String|null} iconCls='fa fa-chevron-right'
         */
        iconCls: 'fa fa-chevron-right',
        /**
         * Internal flag used by field.getTrigger()
         * @member {String} type='spinup'
         * @protected
         */
        type: 'spinup'
    }}

    onTriggerClick(data) {
        this.field.onSpinButtonUpClick();
    }
}

Neo.applyClassConfig(SpinUp);



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/field/trigger/SpinUpDown.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/trigger/SpinUpDown.mjs ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SpinUpDown; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/form/field/trigger/Base.mjs");


/**
 * Combines spin up & down inside one trigger
 * @class Neo.form.field.trigger.SpinUpDown
 * @extends Neo.form.field.trigger.Base
 */
class SpinUpDown extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.trigger.SpinUpDown'
         * @protected
         */
        className: 'Neo.form.field.trigger.SpinUpDown',
        /**
         * @member {String} ntype='trigger-spinupdown'
         * @protected
         */
        ntype: 'trigger-spinupdown',
        /**
         * @member {String[]} cls=['neo-field-trigger', 'neo-spin-buttons']
         */
        cls: ['neo-field-trigger', 'neo-spin-buttons'],
        /**
         * @member {String} spinButtonDownIconCls='fa fa-chevron-down'
         */
        spinButtonDownIconCls: 'fa fa-chevron-down',
        /**
         * @member {String} spinButtonUpIconCls='fa fa-chevron-up'
         */
        spinButtonUpIconCls: 'fa fa-chevron-up',
        /**
         * Internal flag used by field.getTrigger()
         * @member {String} type='spinupdown'
         * @protected
         */
        type: 'spinupdown'
    }}

    onConstructed() {
        let me   = this,
            vdom = me.vdom;

        vdom.cn = [
            {cls: ['neo-spin-button', 'neo-up',   me.spinButtonUpIconCls]},
            {cls: ['neo-spin-button', 'neo-down', me.spinButtonDownIconCls]}
        ];

        me.vdom = vdom;

        super.onConstructed();
    }

    onTriggerClick(data) {
        let me     = this,
            target = data.path[0],
            cls    = target.cls.join(' ');

        if (cls.includes('neo-down')) {
            me.field.onSpinButtonDownClick();
        } else if (cls.includes('neo-up')) {
            me.field.onSpinButtonUpClick();
        }
    }
}

Neo.applyClassConfig(SpinUpDown);



/***/ }),

/***/ "./node_modules/neo.mjs/src/selection/HelixModel.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/neo.mjs/src/selection/HelixModel.mjs ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HelixModel; });
/* harmony import */ var _Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model.mjs */ "./node_modules/neo.mjs/src/selection/Model.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * A selection model intended to use for Neo.component.Helix
 * @class Neo.selection.HelixModel
 * @extends Neo.selection.Model
 */
class HelixModel extends _Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.selection.HelixModel'
         * @protected
         */
        className: 'Neo.selection.HelixModel',
        /**
         * @member {String} ntype='selection-helixmodel'
         * @protected
         */
        ntype: 'selection-helixmodel',
        /**
         * True to stay in the same column when navigating with the up and down keys,
         * otherwise you will navigate to the next / prev column when moving out
         * @member {boolean} stayInColumn=false
         */
        stayInColumn: false
    }}

    /**
     * Override to not apply a domListener
     */
    addDomListener() {}

    /**
     *
     */
    onContainerClick() {
        let me       = this,
            view     = me.view,
            oldItems = [...me.items],
            deltas   = [];

        me.items.forEach(item => {
            deltas.push({
                id : view.getItemVnodeId(item),
                cls: {
                    add   : [],
                    remove: ['neo-selected']
                }
            });
        });

        me.items.splice(0, me.items.length);

        Neo.currentWorker.promiseMessage('main', {
            action : 'updateDom',
            appName: view.appName,
            deltas : deltas
        }).then(() => {
            me.fire('selectionChange', me.items, oldItems);
        });
    }

    /**
     *
     * @param {Object} data
     */
    onItemClick(data) {
        let i    = 0,
            len  = data.path.length,
            view = this.view,
            key;

        for (; i < len; i++) {
            if (data.path[i].cls.includes('neo-helix-item')) {
                key = view.getItemId(data.path[i].id);
                this.select(key);

                view.fire('select', {
                    record: view.store.get(key)
                });

                break;
            }
        }
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDownDown(data) {
        this.onNavKeyColumn(1);
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDownLeft(data) {
        this.onNavKeyRow(-1);
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDownRight(data) {
        this.onNavKeyRow(1);
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDownUp(data) {
        this.onNavKeyColumn(-1);
    }

    /**
     *
     * @param {Number} step=1
     */
    onNavKeyColumn(step=1) {
        let me           = this,
            view         = me.view,
            store        = view.store,
            selected     = me.items[0],
            countRecords = store.getCount(),
            itemsPerRow  = parseInt(360 / view.itemAngle),
            stayInColumn = me.stayInColumn,
            index, record;

        step *= itemsPerRow;

        if (selected) {
            index = store.indexOf(selected) + step;
        } else {
            index = 0;
        }

        if (index < 0) {
            if (!stayInColumn) {
                index++;
            }
            while (index < (countRecords - itemsPerRow)) {
                index += itemsPerRow;
            }
        } else if (index >= countRecords) {
            if (!stayInColumn) {
                index--;
            }
            while (index >= itemsPerRow) {
                index -= itemsPerRow;
            }
        }

        record = store.getAt(index);

        me.select(record[store.keyProperty]);

        view.fire('select', {
            record: record
        });
    }

    /**
     *
     * @param {Number} step=1
     */
    onNavKeyRow(step=1) {
        let me           = this,
            view         = me.view,
            store        = view.store,
            selected     = me.items[0],
            countRecords = store.getCount(),
            index, record;

        if (selected) {
            index = store.indexOf(selected) + step;
        } else {
            index = 0;
        }

        if (index < 0) {
            index = countRecords - 1;
        } else if (index >= countRecords) {
            index = 0;
        }

        record = store.getAt(index);

        me.select(record[store.keyProperty]);

        view.fire('select', {
            record: record
        });
    }

    /**
     *
     * @param {Neo.component.Base} component
     */
    register(component) {
        super.register(component);

        let me   = this,
            id   = me.id,
            view = me.view;

        view.on({
            containerClick: me.onContainerClick,
            itemClick     : me.onItemClick,
            scope         : me
        });

        if (view.keys) {
            view.keys._keys.push(
                {fn: 'onKeyDownDown'  ,key: 'Down'  ,scope: id},
                {fn: 'onKeyDownLeft'  ,key: 'Left'  ,scope: id},
                {fn: 'onKeyDownRight' ,key: 'Right' ,scope: id},
                {fn: 'onKeyDownUp'    ,key: 'Up'    ,scope: id}
            );
        }
    }

    /**
     *
     * @param {String} itemId
     * @param {Boolean} [toggleSelection=true]
     */
    select(itemId, toggleSelection=true) {
        let me         = this,
            view       = me.view,
            isSelected = toggleSelection === false ? false : me.items.includes(itemId),
            oldItems   = [...me.items],
            deltas     = [];

        if (me.singleSelect) {
            me.items.forEach(item => {
                if (item.id !== itemId) {
                    deltas.push({
                        id : view.getItemVnodeId(item),
                        cls: {
                            add   : [],
                            remove: ['neo-selected']
                        }
                    });
                }
            });

            me.items.splice(0, me.items.length);
        }

        deltas.push({
            id : view.getItemVnodeId(itemId),
            cls: {
                add   : isSelected ? [] : ['neo-selected'],
                remove: isSelected ? ['neo-selected'] : []
            }
        });

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"][isSelected ? 'remove' : 'add'](me.items, itemId);

        // console.log('select', itemId, isSelected, me.items);

        Neo.currentWorker.promiseMessage('main', {
            action : 'updateDom',
            appName: view.appName,
            deltas : deltas
        }).then(() => {
            me.fire('selectionChange', me.items, oldItems);
        });
    }

    /**
     *
     */
    unregister() {
        let me   = this,
            id   = me.id,
            view = me.view;

        if (view.keys) {
            view.keys.removeKeys([
                {fn: 'onKeyDownDown'  ,key: 'Down'  ,scope: id},
                {fn: 'onKeyDownLeft'  ,key: 'Left'  ,scope: id},
                {fn: 'onKeyDownRight' ,key: 'Right' ,scope: id},
                {fn: 'onKeyDownUp'    ,key: 'Up'    ,scope: id}
            ]);
        }

        super.unregister();
    }
}

Neo.applyClassConfig(HelixModel);



/***/ }),

/***/ "./node_modules/neo.mjs/src/util/Matrix.mjs":
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/Matrix.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * Utility class for Matrix based calculations
 * @class Neo.util.Matrix
 * @extends Neo.core.Base
 */
class Matrix extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.Matrix'
         * @protected
         */
        className: 'Neo.util.Matrix',
        /**
         * @member {Array|null} items_=null
         * @protected
         */
        items_: null
    }}

    /**
     * Returns the element (i,j) of the matrix
     * @param i
     * @param j
     * @returns {*}
     */
    getElement(i, j) {
        let items = this.items;

        if (i < 1 || i > items.length || j < 1 || j > items[0].length) {
            return null;
        }

        return items[i - 1][j - 1];
    }

    /**
     * shortcut for getElement
     */
    e(i, j) {
        return this.getElement(i, j);
    }

    /**
     * Returns the result of multiplying the matrix from the right by the argument.
     * @param matrix
     * @returns {*}
     */
    multiply(matrix) {
        let me    = this,
            M     = matrix.items || matrix,
            items = me.items,
            ni    = items.length,
            ki    = ni,
            kj    = M[0].length,
            cols  = items[0].length,
            els   = [],
            c, i, j, nc, nj, sum;

        do {
            i      = ki - ni;
            els[i] = [];
            nj     = kj;

            do { j = kj - nj;
                sum = 0;
                nc  = cols;

                do {
                    c = cols - nc;
                    sum += items[i][c] * M[c][j];
                } while (--nc);
                els[i][j] = sum;
            } while (--nj);
        } while (--ni);

        matrix.items = els;

        return matrix;
    }

    /**
     * shortcut for multiply
     */
    x(matrix) {
        return this.multiply(matrix);
    }

    /**
     *
     * @param t
     * @returns {*}
     */
    static rotateX(t) {
        let c = Math.cos(t),
            s = Math.sin(t);

        return [
            [1, 0,  0, 0],
            [0, c, -s, 0],
            [0, s,  c, 0],
            [0, 0,  0, 1]
        ];
    }

    /**
     *
     * @param t
     * @returns {*}
     */
    static rotateY(t) {
        let c = Math.cos(t),
            s = Math.sin(t);

        return [
            [c, 0, -s, 0],
            [0, 1,  0, 0],
            [s, 0,  c, 0],
            [0, 0,  0, 1]
        ];
    }

    /**
     *
     * @param t
     * @returns {*}
     */
    static rotateZ(t) {
        let c = Math.cos(t),
            s = Math.sin(t);

        return [
            [c, -s, 0, 0],
            [s,  c, 0, 0],
            [0,  0, 1, 0],
            [0,  0, 0, 1]
        ];
    }

    /**
     *
     */
    getTransformStyle() {
        let me = this,
            p  = 10, // precision
            s;

        s  = 'matrix3d(';
        s += me.e(1,1).toFixed(p) + ',' + me.e(1,2).toFixed(p) + ',' + me.e(1,3).toFixed(p) + ',' + me.e(1,4).toFixed(p) + ',';
        s += me.e(2,1).toFixed(p) + ',' + me.e(2,2).toFixed(p) + ',' + me.e(2,3).toFixed(p) + ',' + me.e(2,4).toFixed(p) + ',';
        s += me.e(3,1).toFixed(p) + ',' + me.e(3,2).toFixed(p) + ',' + me.e(3,3).toFixed(p) + ',' + me.e(3,4).toFixed(p) + ',';
        s += me.e(4,1).toFixed(p) + ',' + me.e(4,2).toFixed(p) + ',' + me.e(4,3).toFixed(p) + ',' + me.e(4,4).toFixed(p);
        s += ')';

        return s;
    }
}

Neo.applyClassConfig(Matrix);

/* harmony default export */ __webpack_exports__["default"] = (Matrix);

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L0hlbGl4Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC9OdW1iZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL1JhbmdlLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC90cmlnZ2VyL1NwaW5Eb3duLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC90cmlnZ2VyL1NwaW5VcC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2Zvcm0vZmllbGQvdHJpZ2dlci9TcGluVXBEb3duLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvc2VsZWN0aW9uL0hlbGl4TW9kZWwubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL01hdHJpeC5tanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzRDtBQUNGO0FBQ1g7QUFDaUI7QUFDVDtBQUNEO0FBQ0E7O0FBRWhEO0FBQ0EsNkNBQTZDOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpREFBUztBQUM3Qix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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QTs7QUFFZSxxRUFBTSxFIiwiZmlsZSI6InZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWRoZWxpeC1hcHAtbWpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENsYXNzU3lzdGVtVXRpbCBmcm9tICcuLi91dGlsL0NsYXNzU3lzdGVtLm1qcyc7XG5pbXBvcnQgQ29sbGVjdGlvbiAgICAgIGZyb20gJy4uL2NvbGxlY3Rpb24vQmFzZS5tanMnXG5pbXBvcnQgQ29tcG9uZW50ICAgICAgIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0IEhlbGl4TW9kZWwgICAgICBmcm9tICcuLi9zZWxlY3Rpb24vSGVsaXhNb2RlbC5tanMnO1xuaW1wb3J0IE1hdHJpeCAgICAgICAgICBmcm9tICcuLi91dGlsL01hdHJpeC5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICAgICAgICBmcm9tICcuLi91dGlsL0FycmF5Lm1qcyc7XG5pbXBvcnQgU3RvcmUgICAgICAgICAgIGZyb20gJy4uL2RhdGEvU3RvcmUubWpzJztcblxuY29uc3QgaXRlbXNNb3VudGVkID0gU3ltYm9sLmZvcignaXRlbXNNb3VudGVkJyk7XG5jb25zdCBsb2NrV2hlZWwgICAgPSBTeW1ib2wuZm9yKCdsb2NrV2hlZWwnKTsgLy8gd2UgY2FuIG5vdCB1c2UgaXRlbXNNb3VudGVkLCBzaW5jZSBpdCBpcyBjb25uZWN0ZWQgdG8gb25Tb3J0KClcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvbXBvbmVudC5IZWxpeFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIEhlbGl4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvbXBvbmVudC5IZWxpeCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbXBvbmVudC5IZWxpeCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdoZWxpeCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdoZWxpeCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgaGVsaXggY29udGFpbmVyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYmFja2dyb3VuZENvbG9yXz0nIzAwMDAwMCdcbiAgICAgICAgICovXG4gICAgICAgIGJhY2tncm91bmRDb2xvcl86ICcjMDAwMDAwJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBiYWNrZ3JvdW5kIGltYWdlIG9mIHRoZSBoZWxpeCBjb250YWluZXJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBiYWNrZ3JvdW5kSW1hZ2VfPScnXG4gICAgICAgICAqL1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2VfOiAnJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpZHMgb2YgZXhwYW5kZWQgaXRlbXMgd2lsbCBnZXQgc3RvcmVkIGhlcmVcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGNsb25lZEl0ZW1zPVtdXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsb25lZEl0ZW1zOiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8taGVsaXgnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1oZWxpeCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHZlcnRpY2FsIGRlbHRhIGJldHdlZW4gZWFjaCBoZWxpeCBpdGVtIChpbmNyZWFzaW5nIHRoaXMgdmFsdWUgd2lsbCBjcmVhdGUgYSBzcGlyYWwpXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gZGVsdGFZXz0xLjVcbiAgICAgICAgICovXG4gICAgICAgIGRlbHRhWV86IDEuNSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE11bHRpc2VsZWN0aW9ucyB3aWxsIHJlZHVjZSB0aGUgb3BhY2l0eSBhbmQgc2V0IHRoaXMgZmxhZyB0byB0cnVlXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGRpbW1lZF89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGRpbW1lZF86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogTXVsdGlzZWxlY3Rpb25zIHdpbGwgcmVkdWNlIHRoZSBvcGFjaXR5IGFuZCBzZXQgdGhpcyBmbGFnIHRvIHRydWVcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBkaW1tZWRNYXhPcGFjaXR5Xz0wLjNcbiAgICAgICAgICovXG4gICAgICAgIGRpbW1lZE1heE9wYWNpdHlfOiAwLjMsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNdWx0aXNlbGVjdGlvbnMgd2lsbCByZWR1Y2UgdGhlIG9wYWNpdHkgYW5kIHNldCB0aGlzIGZsYWcgdG8gdHJ1ZVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGRpbW1lZE1pbk9wYWNpdHlfPTAuMlxuICAgICAgICAgKi9cbiAgICAgICAgZGltbWVkTWluT3BhY2l0eV86IDAuMixcbiAgICAgICAgZGlzYWJsZVNlbGVjdGlvbiA6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogRmxpcCBpbWFnZXMgYnkgMTgwwrAgZm9yIGEgbm90IG1pcnJvcmVkIGlubmVyIHZpZXdcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gZmxpcHBlZF89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGZsaXBwZWRfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgdG8gcm90YXRlIHRoZSBoZWxpeCB3aGVuIHVzaW5nIGtleW5hdiwgc28gdGhhdCB0aGUgc2VsZWN0ZWQgaXRlbXMgc3RheXMgaW4gZnJvbnRcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gZm9sbG93U2VsZWN0aW9uXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgZm9sbG93U2VsZWN0aW9uXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcmVjb3JkIGZpZWxkIGNvbnRhaW5pbmcgdGhlIGltYWdlIGRhdGEuXG4gICAgICAgICAqIE5lc3RlZCBmaWVsZHMgYXJlIHN1cHBvcnRlZCAoZS5nLiBhdXRob3IuaW1hZ2UpXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gaW1hZ2VGaWVsZD0naW1hZ2UnXG4gICAgICAgICAqL1xuICAgICAgICBpbWFnZUZpZWxkOiAnaW1hZ2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHBhdGggdG8gdGhlIGltYWdlcyBmb2xkZXJcbiAgICAgICAgICogV2lsbCBnZXQgc2V0IGluc2lkZSB0aGUgY3RvciB0byBhdm9pZCBpc3N1ZXMgaW5zaWRlIHRoZSB3ZWJwYWNrIGJ1aWxkc1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gaW1hZ2VTb3VyY2U9TmVvLmNvbmZpZy5yZXNvdXJjZXNQYXRoICsgJ2V4YW1wbGVzLydcbiAgICAgICAgICovXG4gICAgICAgIGltYWdlU291cmNlOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQW1vdW50IG9mIGl0ZW1zIHBlciByb3cgKGNpcmNsZSkgLT4gMzYwwrAgLyAxMCA9IDM2XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gaXRlbUFuZ2xlXz04XG4gICAgICAgICAqL1xuICAgICAgICBpdGVtQW5nbGVfOiA4LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBpdGVtVHBsX1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbVRwbF86IHtcbiAgICAgICAgICAgIGNscyAgICAgOiBbJ3N1cmZhY2UnLCAnbmVvLWhlbGl4LWl0ZW0nXSxcbiAgICAgICAgICAgIHN0eWxlICAgOiB7fSxcbiAgICAgICAgICAgIHRhYkluZGV4OiAnLTEnLFxuICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgdGFnOiAnaW1nJyxcbiAgICAgICAgICAgICAgICBjbHM6IFsnY29udGFjdC1pdGVtJ11cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdW5pcXVlIHJlY29yZCBmaWVsZCBjb250YWluaW5nIHRoZSBpZC5cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBrZXlQcm9wZXJ0eT0naWQnXG4gICAgICAgICAqL1xuICAgICAgICBrZXlQcm9wZXJ0eTogJ2lkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZGl0aW9uYWwgdXNlZCBrZXlzIGZvciB0aGUgc2VsZWN0aW9uIG1vZGVsXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0ga2V5c1xuICAgICAgICAgKi9cbiAgICAgICAga2V5czoge1xuICAgICAgICAgICAgJ0VudGVyJzogJ29uS2V5RG93bkVudGVyJyxcbiAgICAgICAgICAgICdTcGFjZSc6ICdvbktleURvd25TcGFjZSdcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdlIHN0b3JlIG9uZSBpbnN0YW5jZSBvZiB0aGUgbWF0cml4IGhlcmUgdG8gYXZvaWQgY3JlYXRpbmcgbmV3IG9uZXMgb24gZWFjaCByZWZyZXNoIG9wZXJhdGlvblxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8udXRpbC5NYXRyaXh8bnVsbH0gbWF0cml4PW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbWF0cml4OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1heCBhbW91bnQgb2Ygc3RvcmUgaXRlbXMgdG8gc2hvd1xuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IG1heEl0ZW1zXz0zMDBcbiAgICAgICAgICovXG4gICAgICAgIG1heEl0ZW1zXzogMzAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1heCBvcGFjaXR5IGZvciBpdGVtcyBpbnNpZGUgdGhlIGZvcmVncm91bmRcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBtYXhPcGFjaXR5Xz0wLjhcbiAgICAgICAgICovXG4gICAgICAgIG1heE9wYWNpdHlfOiAwLjgsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbWF4IG9wYWNpdHkgZm9yIGl0ZW1zIGluc2lkZSB0aGUgYmFja2dyb3VuZFxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IG1pbk9wYWNpdHlfPTAuM1xuICAgICAgICAgKi9cbiAgICAgICAgbWluT3BhY2l0eV86IDAuMyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB6b29taW5nIGZhY3RvciB3aGljaCByZXBsYWNlcyB0aGUgZGVmYXVsdCB3aGVlbERlbHRhLlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IG1vdXNlV2hlZWxEZWx0YVg9NVxuICAgICAgICAgKi9cbiAgICAgICAgbW91c2VXaGVlbERlbHRhWDogNSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB6b29taW5nIGZhY3RvciB3aGljaCByZXBsYWNlcyB0aGUgZGVmYXVsdCB3aGVlbERlbHRhLlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IG1vdXNlV2hlZWxEZWx0YVk9NTBcbiAgICAgICAgICovXG4gICAgICAgIG1vdXNlV2hlZWxEZWx0YVk6IDUwLFxuICAgICAgICAvKipcbiAgICAgICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIG1vdXNlIHdoZWVsIHNob3VsZCBjaGFuZ2UgdGhlIHRyYW5zbGF0ZVogdmFsdWUgZm9yIHpvb21pbmdcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbW91c2VXaGVlbEVuYWJsZWRfPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIG1vdXNlV2hlZWxFbmFibGVkXzogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBET00gZWxlbWVudCBvZmZzZXRIZWlnaHQgb2YgdGhlIHRvcCBsZXZlbCBkaXYuXG4gICAgICAgICAqIEdldHMgZmV0Y2hlZCBhZnRlciB0aGUgaGVsaXggZ290IG1vdW50ZWQuXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG1vdXNlV2hlZWxFbmFibGVkPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgb2Zmc2V0SGVpZ2h0OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIERPTSBlbGVtZW50IG9mZnNldFdpZHRoIG9mIHRoZSB0b3AgbGV2ZWwgZGl2LlxuICAgICAgICAgKiBHZXRzIGZldGNoZWQgYWZ0ZXIgdGhlIGhlbGl4IGdvdCBtb3VudGVkLlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBtb3VzZVdoZWVsRW5hYmxlZD10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG9mZnNldFdpZHRoOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHBlcnNwZWN0aXZlIG9mIHRoZSBIZWxpeCB2aWV3IGluIHB4XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gcGVyc3BlY3RpdmVfPTgwMFxuICAgICAgICAgKi9cbiAgICAgICAgcGVyc3BlY3RpdmVfOiA4MDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcmFkaXVzIG9mIHRoZSBIZWxpeCBpbiBweFxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHJhZGl1c189MTUwMFxuICAgICAgICAgKi9cbiAgICAgICAgcmFkaXVzXzogMTUwMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSByb3RhdGlvbkFuZ2xlIG9mIHRoZSBIZWxpeCBpbiBkZWdyZWVzXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gcm90YXRpb25BbmdsZV89NzgwXG4gICAgICAgICAqL1xuICAgICAgICByb3RhdGlvbkFuZ2xlXzogNzgwLFxuICAgICAgICAvKipcbiAgICAgICAgICogV2Ugc3RvcmUgb25lIGluc3RhbmNlIG9mIHRoZSByb3RhdGlvbiBtYXRyaXggaGVyZSB0byBhdm9pZCBjcmVhdGluZyBuZXcgb25lcyBvbiBlYWNoIHJlZnJlc2ggb3BlcmF0aW9uXG4gICAgICAgICAqIEBtZW1iZXIge05lby51dGlsLk1hdHJpeHxudWxsfSByb3RhdGlvbk1hdHJpeD1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHJvdGF0aW9uTWF0cml4OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBkaXNwbGF5cyB0aGUgZmlyc3QgJiBsYXN0IG5hbWUgcmVjb3JkIGZpZWxkcyBiZWxvdyBhbiBleHBhbmRlZCBpdGVtXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNob3dDbG9uZUluZm89dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgc2hvd0Nsb25lSW5mbzogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBuYW1lIG9mIHRoZSBDU1MgcnVsZSBmb3Igc2VsZWN0ZWQgaXRlbXNcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBzZWxlY3RlZEl0ZW1DbHM9J25lby1zZWxlY3RlZCdcbiAgICAgICAgICovXG4gICAgICAgIHNlbGVjdGVkSXRlbUNsczogJ25lby1zZWxlY3RlZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiB1c2VzIHRoZSBzZWxlY3Rpb24uSGVsaXhNb2RlbCBieSBkZWZhdWx0XG4gICAgICAgICAqIEBtZW1iZXIge05lby5zZWxlY3Rpb24uSGVsaXhNb2RlbHxudWxsfSBzZWxlY3Rpb25Nb2RlbF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZWN0aW9uTW9kZWxfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHN0b3JlIGluc3RhbmNlIG9yIGNsYXNzIGNvbnRhaW5pbmcgdGhlIGRhdGEgZm9yIHRoZSBnYWxsZXJ5IGl0ZW1zXG4gICAgICAgICAqIEBtZW1iZXIge05lby5kYXRhLlN0b3JlfG51bGx9IHN0b3JlXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzdG9yZV86IG51bGwsIC8vIHRvZG86IHVzZSBhIHN0b3JlIG9uY2UgY29sbGVjdGlvbnMgYXJlIGludGVncmF0ZWRcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBzZXRUaW1lb3V0KCkgaWRzIGZvciBjYWxscyB3aGljaCBjYW4gZ2V0IGNhbmNlbGxlZFxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gdHJhbnNpdGlvblRpbWVvdXRzPVtdXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHRyYW5zaXRpb25UaW1lb3V0czogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHJhbnNsYXRlWCBnZXRzIGluY2x1ZGVkIGludG8gZWFjaCBoZWxpeCBpdGVtXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gdHJhbnNsYXRlWF89NDAwXG4gICAgICAgICAqL1xuICAgICAgICB0cmFuc2xhdGVYXzogNDAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRyYW5zbGF0ZVggdmFsdWUgZ2V0cyBpbmNsdWRlZCBpbnRvIGVhY2ggaGVsaXggaXRlbVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHRyYW5zbGF0ZVlfPS0zNTBcbiAgICAgICAgICovXG4gICAgICAgIHRyYW5zbGF0ZVlfOiAtMzUwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRyYW5zbGF0ZVggdmFsdWUgZ2V0cyBpbmNsdWRlZCBpbnRvIGVhY2ggaGVsaXggaXRlbVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHRyYW5zbGF0ZVpfPS01MDAwXG4gICAgICAgICAqL1xuICAgICAgICB0cmFuc2xhdGVaXzogLTUwMDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdXJsIGZvciB0aGUgc3RvcmUgdG8gbG9hZCB0aGUgZGF0YVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHVybF89Jy4uL3Jlc291cmNlcy9leGFtcGxlcy9kYXRhL2FpX2NvbnRhY3RzLmpzb24nXG4gICAgICAgICAqL1xuICAgICAgICB1cmxfOiAnLi4vLi4vcmVzb3VyY2VzL2V4YW1wbGVzL2RhdGEvYWlfY29udGFjdHMuanNvbicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbToge1xuICAgICAgICAgICAgc3R5bGUgICA6IHt9LFxuICAgICAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICBjbHMgIDogWydjb250YWluZXInXSxcbiAgICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgICAgIGNscyAgOiBbJ2dyb3VwJ10sXG4gICAgICAgICAgICAgICAgICAgIGNuICAgOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHkgIDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ21hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDQ2MSwgNDUyLjUsIC0xMDA3MDAsIDEpJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSBOZW8uY2xvbmUobWUuZG9tTGlzdGVuZXJzLCB0cnVlKTtcblxuICAgICAgICBtZVtpdGVtc01vdW50ZWRdID0gZmFsc2U7XG4gICAgICAgIG1lW2xvY2tXaGVlbF0gICAgPSBmYWxzZTtcblxuICAgICAgICBpZiAobWUuaW1hZ2VTb3VyY2UgPT09IG51bGwpIHtcbiAgICAgICAgICAgIG1lLmltYWdlU291cmNlID0gTmVvLmNvbmZpZy5yZXNvdXJjZXNQYXRoICsgJ2V4YW1wbGVzLyc7XG4gICAgICAgIH1cblxuICAgICAgICBkb21MaXN0ZW5lcnMucHVzaCh7XG4gICAgICAgICAgICBjbGljazogbWUub25DbGljayxcbiAgICAgICAgICAgIHdoZWVsOiBtZS5vbk1vdXNlV2hlZWwsXG4gICAgICAgICAgICBzY29wZTogbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuZG9tTGlzdGVuZXJzID0gZG9tTGlzdGVuZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLnNlbGVjdGlvbk1vZGVsKSB7XG4gICAgICAgICAgICBtZS5zZWxlY3Rpb25Nb2RlbC5yZWdpc3RlcihtZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsb2FkIGRhdGEgZm9yIHRoZSBleGFtcGxlIGNvbGxlY3Rpb25cbiAgICAgICAgaWYgKCEobWUuc3RvcmUgaW5zdGFuY2VvZiBTdG9yZSkpIHtcbiAgICAgICAgICAgIG1lLmxvYWREYXRhKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGZsaXBwZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRGbGlwcGVkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLmFwcGx5SXRlbVRyYW5zaXRpb25zKHRoaXMucmVmcmVzaCwgMTAwMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBtYXhJdGVtIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldE1heEl0ZW1zKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICh2YWx1ZSAmJiBtZS5yZW5kZXJlZCkge1xuICAgICAgICAgICAgaWYgKG9sZFZhbHVlID4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBtZS5kZXN0cm95SXRlbXModmFsdWUsIG9sZFZhbHVlIC0gdmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZS5jcmVhdGVJdGVtcyhvbGRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1vdW50ZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNb3VudGVkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBzdXBlci5hZnRlclNldE1vdW50ZWQodmFsdWUsIG9sZFZhbHVlKTtcblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0T2Zmc2V0VmFsdWVzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHBlcnNwZWN0aXZlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFBlcnNwZWN0aXZlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5tb3VudGVkKSB7XG4gICAgICAgICAgICBOZW8uY3VycmVudFdvcmtlci5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gOiAndXBkYXRlRG9tJyxcbiAgICAgICAgICAgICAgICBhcHBOYW1lOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgIGRlbHRhcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQgICA6IG1lLnZkb20uaWQsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTogdmFsdWUgKyAncHgnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbWUudXBkYXRlQ2xvbmVUcmFuc2xhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc2VsZWN0aW9uTW9kZWwgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOZW8uc2VsZWN0aW9uLk1vZGVsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TmVvLnNlbGVjdGlvbi5Nb2RlbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTZWxlY3Rpb25Nb2RlbCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMucmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHZhbHVlLnJlZ2lzdGVyKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB1cmwgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VXJsKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5yZW5kZXJlZCkge1xuICAgICAgICAgICAgbWUuZGVzdHJveUl0ZW1zKCk7XG4gICAgICAgICAgICBtZS5sb2FkRGF0YSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uVGltZVxuICAgICAqIEBwYXJhbSBjYWxsYmFja1BhcmFtXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFwcGx5SXRlbVRyYW5zaXRpb25zKGNhbGxiYWNrLCBhbmltYXRpb25UaW1lLCBjYWxsYmFja1BhcmFtKSB7XG4gICAgICAgIGxldCBtZSAgPSB0aGlzLFxuICAgICAgICAgICAgY2xzID0gJ25lby10cmFuc2l0aW9uLScgKyBhbmltYXRpb25UaW1lLFxuICAgICAgICAgICAgdGltZW91dElkO1xuXG4gICAgICAgIG1lLnRyYW5zaXRpb25UaW1lb3V0cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGl0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZS50cmFuc2l0aW9uVGltZW91dHMuc3BsaWNlKDAsIG1lLnRyYW5zaXRpb25UaW1lb3V0cy5sZW5ndGgpO1xuXG4gICAgICAgIGlmIChtZS5tb3VudGVkKSB7XG4gICAgICAgICAgICBOZW8uY3VycmVudFdvcmtlci5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gOiAndXBkYXRlRG9tJyxcbiAgICAgICAgICAgICAgICBhcHBOYW1lOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgIGRlbHRhcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQgOiBtZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgY2xzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGQgICA6IFtjbHNdLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlOiBbXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkobWUsIFtjYWxsYmFja1BhcmFtXSk7XG5cbiAgICAgICAgICAgICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKG1lLnRyYW5zaXRpb25UaW1lb3V0cywgdGltZW91dElkKTtcblxuICAgICAgICAgICAgICAgICAgICBOZW8uY3VycmVudFdvcmtlci5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA6ICd1cGRhdGVEb20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwTmFtZTogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCA6IG1lLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGQgICA6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmU6IFtjbHNdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCBhbmltYXRpb25UaW1lICsgMjAwKTtcblxuICAgICAgICAgICAgICAgIG1lLnRyYW5zaXRpb25UaW1lb3V0cy5wdXNoKHRpbWVvdXRJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBiZWZvcmVHZXRJdGVtVHBsKCkge1xuICAgICAgICByZXR1cm4gTmVvLmNsb25lKHRoaXMuX2l0ZW1UcGwsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIHNlbGVjdGlvbk1vZGVsIGNvbmZpZyBnZXRzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtOZW8uc2VsZWN0aW9uLk1vZGVsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TmVvLnNlbGVjdGlvbi5Nb2RlbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0U2VsZWN0aW9uTW9kZWwodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgb2xkVmFsdWUuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIENsYXNzU3lzdGVtVXRpbC5iZWZvcmVTZXRJbnN0YW5jZSh2YWx1ZSwgSGVsaXhNb2RlbCwge1xuICAgICAgICAgICAgbGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uQ2hhbmdlOiB0aGlzLm9uU2VsZWN0aW9uQ2hhbmdlLFxuICAgICAgICAgICAgICAgIHNjb3BlICAgICAgICAgIDogdGhpc1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBzdG9yZSBjb25maWcgZ2V0cyBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSB7TmVvLmRhdGEuU3RvcmV8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge05lby5kYXRhLlN0b3JlfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldFN0b3JlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgb2xkVmFsdWUuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdG9kbzogcmVtb3ZlIHRoZSBpZiBjaGVjayBvbmNlIGFsbCBkZW1vcyB1c2Ugc3RvcmVzIChpbnN0ZWFkIG9mIGNvbGxlY3Rpb25zKVxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBDbGFzc1N5c3RlbVV0aWwuYmVmb3JlU2V0SW5zdGFuY2UodmFsdWUsIFN0b3JlLCB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzICA6IHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZCA6IG1lLm9uU3RvcmVMb2FkLFxuICAgICAgICAgICAgICAgICAgICBzb3J0IDogbWUub25Tb3J0LFxuICAgICAgICAgICAgICAgICAgICBzY29wZTogbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBOZW8uY3JlYXRlKENvbGxlY3Rpb24sIHtcbiAgICAgICAgICAgIGtleVByb3BlcnR5OiAnaWQnLFxuICAgICAgICAgICAgbGlzdGVuZXJzICA6IHtcbiAgICAgICAgICAgICAgICBzb3J0IDogbWUub25Tb3J0LFxuICAgICAgICAgICAgICAgIHNjb3BlOiBtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgYW4gb3BhY2l0eSBncmFkaWVudCBiYXNlZCBvbiB0aGUgaXRlbSByb3RhdGlvbiBhbmdsZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBjYWxjdWxhdGVPcGFjaXR5KGl0ZW0pIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBtYXhPcGFjaXR5ICAgPSBtZS5tYXhPcGFjaXR5LFxuICAgICAgICAgICAgbWluT3BhY2l0eSAgID0gbWUubWluT3BhY2l0eSxcbiAgICAgICAgICAgIGRlbHRhT3BhY2l0eSA9IG1heE9wYWNpdHkgLSBtaW5PcGFjaXR5LFxuICAgICAgICAgICAgYW5nbGUsIG9wYWNpdHksIG9wYWNpdHlGYWN0b3I7XG5cbiAgICAgICAgaWYgKGRlbHRhT3BhY2l0eSA9PT0gMCkge1xuICAgICAgICAgICAgb3BhY2l0eSA9IG1heE9wYWNpdHk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbmdsZSA9IGl0ZW0ucm90YXRpb25BbmdsZSAlIDM2MDtcblxuICAgICAgICAgICAgd2hpbGUgKGFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgICAgIGFuZ2xlICs9IDM2MDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2hpbGUgKGFuZ2xlID4gMTgwKSB7XG4gICAgICAgICAgICAgICAgYW5nbGUgPSAzNjAgLSBhbmdsZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbm9uIGxpbmVhciBkaXN0cmlidXRpb24sIHNpbmNlIHRoZSBhbmdsZSBkb2VzIG5vdCBtYXRjaCBkZWx0YSB0cmFuc2xhdGVaXG4gICAgICAgICAgICBvcGFjaXR5RmFjdG9yID0gMSAtIE1hdGguc2luKGFuZ2xlICogTWF0aC5QSSAvIDM2MCk7XG5cbiAgICAgICAgICAgIG9wYWNpdHkgPSBtaW5PcGFjaXR5ICsgZGVsdGFPcGFjaXR5ICogb3BhY2l0eUZhY3RvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvcGFjaXR5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGdldCBkaWZmZXJlbnQgaXRlbS1tYXJrdXBzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21JdGVtXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHZkb21JdGVtXG4gICAgICovXG4gICAgY3JlYXRlSXRlbSh2ZG9tSXRlbSwgcmVjb3JkLCBpbmRleCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIHZkb21JdGVtLmlkID0gbWUuZ2V0SXRlbVZub2RlSWQocmVjb3JkW21lLmtleVByb3BlcnR5XSk7XG5cbiAgICAgICAgdmRvbUl0ZW0uY25bMF0uaWQgID0gbWUuZ2V0SXRlbVZub2RlSWQocmVjb3JkW21lLmtleVByb3BlcnR5XSkgKyAnX2ltZyc7XG4gICAgICAgIHZkb21JdGVtLmNuWzBdLnNyYyA9IG1lLmltYWdlU291cmNlICsgTmVvLm5zKG1lLmltYWdlRmllbGQsIGZhbHNlLCByZWNvcmQpO1xuXG4gICAgICAgIHJldHVybiB2ZG9tSXRlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3N0YXJ0SW5kZXhdIHRoZSBzdGFydCBpbmRleCBmb3IgY3JlYXRpbmcgaXRlbXMsXG4gICAgICogZS5nLiBpbmNyZWFzaW5nIG1heEl0ZW1zIG9ubHkgbmVlZHMgdG8gY3JlYXRlIHRoZSBuZXcgb25lc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBjcmVhdGVJdGVtcyhzdGFydEluZGV4KSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRlbHRhWSAgICAgICAgPSBtZS5kZWx0YVksXG4gICAgICAgICAgICBncm91cCAgICAgICAgID0gbWUuZ2V0SXRlbXNSb290KCksXG4gICAgICAgICAgICBpdGVtQW5nbGUgICAgID0gbWUuaXRlbUFuZ2xlLFxuICAgICAgICAgICAgbWF0cml4ICAgICAgICA9IG1lLm1hdHJpeCxcbiAgICAgICAgICAgIHJhZGl1cyAgICAgICAgPSBtZS5yYWRpdXMsXG4gICAgICAgICAgICByb3RhdGlvbkFuZ2xlID0gbWUucm90YXRpb25BbmdsZSxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVggICAgPSBtZS50cmFuc2xhdGVYLFxuICAgICAgICAgICAgdHJhbnNsYXRlWSAgICA9IG1lLnRyYW5zbGF0ZVksXG4gICAgICAgICAgICB0cmFuc2xhdGVaICAgID0gbWUudHJhbnNsYXRlWixcbiAgICAgICAgICAgIHZkb20gICAgICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgaSAgICAgICAgICAgICA9IHN0YXJ0SW5kZXggfHwgMCxcbiAgICAgICAgICAgIGxlbiAgICAgICAgICAgPSBNYXRoLm1pbihtZS5tYXhJdGVtcywgbWUuc3RvcmUuaXRlbXMubGVuZ3RoKSxcbiAgICAgICAgICAgIGFuZ2xlLCBpdGVtLCBtYXRyaXhJdGVtcywgdHJhbnNmb3JtU3R5bGUsIHZkb21JdGVtLCBjLCBzLCB4LCB5LCB6O1xuXG4gICAgICAgIGlmICghbWUubW91bnRlZCkge1xuICAgICAgICAgICAgY29uc3QgbGlzdGVuZXJJZCA9IG1lLm9uKCdtb3VudGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1lLnVuKCdtb3VudGVkJywgbGlzdGVuZXJJZCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1lLmNyZWF0ZUl0ZW1zKHN0YXJ0SW5kZXgpO1xuICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGVJdGVtcycsIG1lLmlkLCBtZS5zdG9yZSk7XG5cbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gbWUuc3RvcmUuaXRlbXNbaV07XG5cbiAgICAgICAgICAgICAgICBhbmdsZSA9IC1yb3RhdGlvbkFuZ2xlICsgaSAqIGl0ZW1BbmdsZTtcblxuICAgICAgICAgICAgICAgIHMgPSBNYXRoLnNpbihhbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICAgICAgICAgIGMgPSBNYXRoLmNvcyhhbmdsZSAqIE1hdGguUEkgLyAxODApO1xuXG4gICAgICAgICAgICAgICAgeCA9IHJhZGl1cyAqIHMgLSAzMDAgKyB0cmFuc2xhdGVYO1xuICAgICAgICAgICAgICAgIHkgPSAtNDAwICsgYW5nbGUgKiBkZWx0YVkgKyB0cmFuc2xhdGVZO1xuICAgICAgICAgICAgICAgIHogPSA5OTgwMCArIHJhZGl1cyAqIGMgKyB0cmFuc2xhdGVaO1xuXG4gICAgICAgICAgICAgICAgbWF0cml4SXRlbXMgPSBbXG4gICAgICAgICAgICAgICAgICAgIFtjLCAwLCAtcywgMF0sXG4gICAgICAgICAgICAgICAgICAgIFswLCAxLCAgMCwgMF0sXG4gICAgICAgICAgICAgICAgICAgIFtzLCAwLCAgYywgMF0sXG4gICAgICAgICAgICAgICAgICAgIFt4LCB5LCAgeiwgMV1cbiAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFtYXRyaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUubWF0cml4ID0gbWF0cml4ID0gTmVvLmNyZWF0ZShNYXRyaXgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBtYXRyaXhJdGVtc1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtYXRyaXguaXRlbXMgPSBtYXRyaXhJdGVtcztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1TdHlsZSA9IG1hdHJpeC5nZXRUcmFuc2Zvcm1TdHlsZSgpO1xuXG4gICAgICAgICAgICAgICAgdmRvbUl0ZW0gPSBtZS5jcmVhdGVJdGVtKG1lLml0ZW1UcGwsIGl0ZW0sIGkpO1xuXG4gICAgICAgICAgICAgICAgaXRlbS5yb3RhdGlvbkFuZ2xlICA9IGFuZ2xlO1xuICAgICAgICAgICAgICAgIGl0ZW0udHJhbnNmb3JtU3R5bGUgPSB0cmFuc2Zvcm1TdHlsZTtcblxuICAgICAgICAgICAgICAgIHZkb21JdGVtLiBzdHlsZSA9IHZkb21JdGVtLnN0eWxlIHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgdmRvbUl0ZW0uc3R5bGUub3BhY2l0eSAgID0gbWUuY2FsY3VsYXRlT3BhY2l0eShpdGVtKTtcbiAgICAgICAgICAgICAgICB2ZG9tSXRlbS5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHlsZTtcblxuICAgICAgICAgICAgICAgIGdyb3VwLmNuLnB1c2godmRvbUl0ZW0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZVtsb2NrV2hlZWxdID0gZmFsc2U7XG5cbiAgICAgICAgICAgIG1lLnByb21pc2VWZG9tVXBkYXRlKHZkb20pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1lW2l0ZW1zTW91bnRlZF0gPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1lW2xvY2tXaGVlbF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBkZXN0cm95Q2xvbmVzKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHN0b3JlICAgICAgICA9IG1lLnN0b3JlLFxuICAgICAgICAgICAgZGVsdGFzICAgICAgID0gW10sXG4gICAgICAgICAgICByZW1vdmVEZWx0YXMgPSBbXSxcbiAgICAgICAgICAgIGlkLCByZWNvcmQ7XG5cbiAgICAgICAgaWYgKG1lLmNsb25lZEl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG1lLmNsb25lZEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWQgICAgID0gbWUuZ2V0SXRlbUlkKGl0ZW0uaWQpO1xuICAgICAgICAgICAgICAgIHJlY29yZCA9IHN0b3JlLmdldChpZCk7XG5cbiAgICAgICAgICAgICAgICByZWNvcmQuZXhwYW5kZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGRlbHRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaWQgICA6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5ICA6IHJlY29yZC5vcGFjaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByZWNvcmQudHJhbnNmb3JtU3R5bGVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmVtb3ZlRGVsdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpZCAgICA6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ3JlbW92ZU5vZGUnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtZS5jbG9uZWRJdGVtcyA9IFtdO1xuXG4gICAgICAgICAgICBOZW8uY3VycmVudFdvcmtlci5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gOiAndXBkYXRlRG9tJyxcbiAgICAgICAgICAgICAgICBhcHBOYW1lOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgIGRlbHRhcyA6IGRlbHRhc1xuICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gOiAndXBkYXRlRG9tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcE5hbWU6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YXMgOiByZW1vdmVEZWx0YXNcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgNjUwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3N0YXJ0SW5kZXhdXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFthbW91bnRJdGVtc11cbiAgICAgKi9cbiAgICBkZXN0cm95SXRlbXMoc3RhcnRJbmRleCwgYW1vdW50SXRlbXMpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgbWUuZ2V0SXRlbXNSb290KCkuY24uc3BsaWNlKHN0YXJ0SW5kZXggfHwgMCwgYW1vdW50SXRlbXMgfHwgbWUuc3RvcmUuZ2V0Q291bnQoKSk7XG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vdmVzIGEgY2xvbmUgb2YgYW4gaXRlbSB0byB0aGUgdG9wIGxlZnQgY29ybmVyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGl0ZW1JZFxuICAgICAqL1xuICAgIGV4cGFuZEl0ZW0oaXRlbUlkKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHN0b3JlICAgICAgPSBtZS5zdG9yZSxcbiAgICAgICAgICAgIHJlY29yZCAgICAgPSBzdG9yZS5nZXQoaXRlbUlkKSxcbiAgICAgICAgICAgIGluZGV4ICAgICAgPSBzdG9yZS5pbmRleE9mKGl0ZW1JZCksXG4gICAgICAgICAgICBpc0V4cGFuZGVkID0gISFyZWNvcmQuZXhwYW5kZWQsXG4gICAgICAgICAgICBncm91cCAgICAgID0gbWUuZ2V0SXRlbXNSb290KCksXG4gICAgICAgICAgICBpdGVtVmRvbSAgID0gTmVvLmNsb25lKGdyb3VwLmNuW2luZGV4XSwgdHJ1ZSk7XG5cbiAgICAgICAgbWUuZGVzdHJveUNsb25lcygpO1xuXG4gICAgICAgIGlmIChpc0V4cGFuZGVkICE9PSB0cnVlKSB7XG4gICAgICAgICAgICByZWNvcmQuZXhwYW5kZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBpdGVtVmRvbS5pZCA9IGl0ZW1WZG9tLmlkICsgJ19fY2xvbmUnO1xuICAgICAgICAgICAgaXRlbVZkb20uc3R5bGUudHJhbnNmb3JtID0gcmVjb3JkLnRyYW5zZm9ybVN0eWxlO1xuICAgICAgICAgICAgTmVvQXJyYXkuYWRkKGl0ZW1WZG9tLmNscywgJ25lby10cmFuc2l0aW9uLTYwMCcpO1xuICAgICAgICAgICAgZGVsZXRlIGl0ZW1WZG9tLnRhYkluZGV4O1xuXG4gICAgICAgICAgICBpdGVtVmRvbS5jblswXS5pZCA9IGl0ZW1WZG9tLmNuWzBdLmlkICsgJ19fY2xvbmUnO1xuXG4gICAgICAgICAgICBpZiAobWUuc2hvd0Nsb25lSW5mbykge1xuICAgICAgICAgICAgICAgIGl0ZW1WZG9tLmNuLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBjbHMgICAgICA6IFsnY29udGFjdC1uYW1lJ10sXG4gICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogcmVjb3JkLmZpcnN0bmFtZSArICcgJyArIHJlY29yZC5sYXN0bmFtZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBOZW8udmRvbS5IZWxwZXIuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICBhdXRvTW91bnQgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwYXJlbnRJZCAgIDogZ3JvdXAuaWQsXG4gICAgICAgICAgICAgICAgcGFyZW50SW5kZXg6IHN0b3JlLmdldENvdW50KCksXG4gICAgICAgICAgICAgICAgLi4uaXRlbVZkb21cbiAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgbWUuY2xvbmVkSXRlbXMucHVzaChpdGVtVmRvbSk7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gOiAndXBkYXRlRG9tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcE5hbWU6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YXMgOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkICAgOiBpdGVtVmRvbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5ICA6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogbWUuZ2V0Q2xvbmVUcmFuc2Zvcm0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldENsb25lVHJhbnNmb3JtKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB0cmFuc2xhdGVYID0gKG1lLm9mZnNldFdpZHRoICAtIDEzNTApIC8gMyxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVkgPSAobWUub2Zmc2V0SGVpZ2h0IC0gMTMyMCkgLyAzLFxuICAgICAgICAgICAgdHJhbnNsYXRlWiA9IDEwMDcwMCArIG1lLnBlcnNwZWN0aXZlIC8gMS41O1xuXG4gICAgICAgIHJldHVybiAnbWF0cml4M2QoMSwwLDAsMCwwLDEsMCwwLDAsMCwxLDAsJyt0cmFuc2xhdGVYKycsJyt0cmFuc2xhdGVZKycsJyt0cmFuc2xhdGVaKycsMSknO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZub2RlSWRcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldEl0ZW1JZCh2bm9kZUlkKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh2bm9kZUlkLnNwbGl0KCdfXycpWzFdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2ZG9tIG5vZGUgY29udGFpbmluZyB0aGUgaGVsaXggaXRlbXNcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB2ZG9tXG4gICAgICovXG4gICAgZ2V0SXRlbXNSb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52ZG9tLmNuWzBdLmNuWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBpZFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SXRlbVZub2RlSWQoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQgKyAnX18nICsgaWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtkZWxheT0xMDBdXG4gICAgICovXG4gICAgZ2V0T2Zmc2V0VmFsdWVzKGRlbGF5PTEwMCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uICAgIDogJ3JlYWREb20nLFxuICAgICAgICAgICAgICAgIGFwcE5hbWUgICA6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgdm5vZGVJZCAgIDogbWUuaWQsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogW1xuICAgICAgICAgICAgICAgICAgICAnb2Zmc2V0SGVpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgJ29mZnNldFdpZHRoJ1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgbWUub2Zmc2V0SGVpZ2h0ID0gZGF0YS5hdHRyaWJ1dGVzLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICBtZS5vZmZzZXRXaWR0aCAgPSBkYXRhLmF0dHJpYnV0ZXMub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgbG9hZERhdGEoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgTmVvLlhoci5wcm9taXNlSnNvbih7XG4gICAgICAgICAgICBpbnNpZGVOZW86IHRydWUsXG4gICAgICAgICAgICB1cmwgICAgICA6IG1lLnVybFxuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgbWUuc3RvcmUuaXRlbXMgPSBkYXRhLmpzb24uZGF0YTtcbiAgICAgICAgICAgIG1lLmNyZWF0ZUl0ZW1zKCk7XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZm9yIE5lby5YaHIucmVxdWVzdCcsIGVyciwgbWUuaWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpdGVtSWRcbiAgICAgKi9cbiAgICBtb3ZlVG9TZWxlY3RlZEl0ZW0oaXRlbUlkKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG4gICAgICAgIG1lLnJvdGF0aW9uQW5nbGUgPSBtZS5zdG9yZS5nZXQoaXRlbUlkKS5yb3RhdGlvbkFuZ2xlICsgbWUucm90YXRpb25BbmdsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25DbGljayhkYXRhKSB7XG4gICAgICAgIHRoaXMuZmlyZShkYXRhLmlkID09PSB0aGlzLmlkID8gJ2NvbnRhaW5lckNsaWNrJyA6ICdpdGVtQ2xpY2snLCBkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25LZXlEb3duRW50ZXIoZGF0YSkge1xuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuc2VsZWN0aW9uTW9kZWwuaXRlbXNbMF07XG5cbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kSXRlbShpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbktleURvd25TcGFjZShkYXRhKSB7XG4gICAgICAgIHRoaXMuYXBwbHlJdGVtVHJhbnNpdGlvbnModGhpcy5tb3ZlVG9TZWxlY3RlZEl0ZW0sIDEwMDAsIHRoaXMuc2VsZWN0aW9uTW9kZWwuaXRlbXNbMF0gfHwgMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uTW91c2VXaGVlbChkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRlbHRhWCAgICAgICAgPSBkYXRhLmRlbHRhWCxcbiAgICAgICAgICAgIGRlbHRhWSAgICAgICAgPSBkYXRhLmRlbHRhWSxcbiAgICAgICAgICAgIHJvdGF0aW9uQW5nbGUgPSBtZS5yb3RhdGlvbkFuZ2xlLFxuICAgICAgICAgICAgdHJhbnNsYXRlWiAgICA9IG1lLnRyYW5zbGF0ZVo7XG5cbiAgICAgICAgaWYgKG1lLm1vdXNlV2hlZWxFbmFibGVkICYmIG1lW2xvY2tXaGVlbF0pIHtcbiAgICAgICAgICAgIG1lLl9yb3RhdGlvbkFuZ2xlID0gcm90YXRpb25BbmdsZSArIChkZWx0YVggKiBtZS5tb3VzZVdoZWVsRGVsdGFYKTsgLy8gc2lsZW50IHVwZGF0ZVxuICAgICAgICAgICAgbWUuX3RyYW5zbGF0ZVogICAgPSB0cmFuc2xhdGVaICAgICsgKGRlbHRhWSAqIG1lLm1vdXNlV2hlZWxEZWx0YVkpOyAvLyBzaWxlbnQgdXBkYXRlXG5cbiAgICAgICAgICAgIG1lLnJlZnJlc2goKTtcblxuICAgICAgICAgICAgbWUuZmlyZSgnY2hhbmdlUm90YXRpb24nLCAgIG1lLl9yb3RhdGlvbkFuZ2xlKTtcbiAgICAgICAgICAgIG1lLmZpcmUoJ2NoYW5nZVRyYW5zbGF0ZVonLCBtZS5fdHJhbnNsYXRlWik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nW119IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXX0gb2xkVmFsdWVcbiAgICAgKi9cbiAgICBvblNlbGVjdGlvbkNoYW5nZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUuZm9sbG93U2VsZWN0aW9uICYmIHZhbHVlICYmIHZhbHVlWzBdKSB7XG4gICAgICAgICAgICBtZS5hcHBseUl0ZW1UcmFuc2l0aW9ucyhtZS5tb3ZlVG9TZWxlY3RlZEl0ZW0sIDEwMCwgdmFsdWVbMF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uU29ydCgpIHtcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZVtpdGVtc01vdW50ZWRdID09PSB0cnVlKSB7Y29uc29sZS5sb2coJ3NvcnQnKTtcbiAgICAgICAgICAgIG1lLmFwcGx5SXRlbVRyYW5zaXRpb25zKG1lLnNvcnRJdGVtcywgMTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zXG4gICAgICovXG4gICAgb25TdG9yZUxvYWQoaXRlbXMpIHtcbiAgICAgICAgdGhpcy5nZXRJdGVtc1Jvb3QoKS5jbiA9IFtdOyAvLyBzaWxlbnQgdXBkYXRlXG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcmVmcmVzaCgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRlbHRhcyAgICAgICAgID0gW10sXG4gICAgICAgICAgICBkZWx0YVkgICAgICAgICA9IG1lLmRlbHRhWSxcbiAgICAgICAgICAgIGZsaXBwZWQgICAgICAgID0gbWUuZmxpcHBlZCxcbiAgICAgICAgICAgIGluZGV4ICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGl0ZW1BbmdsZSAgICAgID0gbWUuaXRlbUFuZ2xlLFxuICAgICAgICAgICAgbGVuICAgICAgICAgICAgPSBNYXRoLm1pbihtZS5tYXhJdGVtcywgbWUuc3RvcmUuZ2V0Q291bnQoKSksXG4gICAgICAgICAgICBtYXRyaXggICAgICAgICA9IG1lLm1hdHJpeCxcbiAgICAgICAgICAgIHJhZGl1cyAgICAgICAgID0gbWUucmFkaXVzLFxuICAgICAgICAgICAgcm90YXRpb25BbmdsZSAgPSBtZS5yb3RhdGlvbkFuZ2xlLFxuICAgICAgICAgICAgcm90YXRpb25NYXRyaXggPSBtZS5yb3RhdGlvbk1hdHJpeCxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVggICAgID0gbWUudHJhbnNsYXRlWCxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVkgICAgID0gbWUudHJhbnNsYXRlWSxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVogICAgID0gbWUudHJhbnNsYXRlWixcbiAgICAgICAgICAgIHZkb20gICAgICAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGFuZ2xlLCBpdGVtLCBvcGFjaXR5LCByb3RhdGVZLCB0cmFuc2Zvcm1TdHlsZSwgdmRvbUl0ZW0sIGMsIHMsIHgsIHksIHo7XG5cbiAgICAgICAgaWYgKGZsaXBwZWQpIHtcbiAgICAgICAgICAgIHJvdGF0ZVkgPSBNYXRyaXgucm90YXRlWSgxODAgKiBNYXRoLlBJIC8gMTgwKTtcblxuICAgICAgICAgICAgaWYgKCFyb3RhdGlvbk1hdHJpeCkge1xuICAgICAgICAgICAgICAgIG1lLnJvdGF0aW9uTWF0cml4ID0gcm90YXRpb25NYXRyaXggPSBOZW8uY3JlYXRlKE1hdHJpeCwge1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogcm90YXRlWVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3RhdGlvbk1hdHJpeC5pdGVtcyA9IHJvdGF0ZVk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaW5kZXggPCBsZW47IGluZGV4KyspIHtcbiAgICAgICAgICAgIGl0ZW0gICAgID0gbWUuc3RvcmUuaXRlbXNbaW5kZXhdO1xuICAgICAgICAgICAgdmRvbUl0ZW0gPSB2ZG9tLmNuWzBdLmNuWzBdLmNuW2luZGV4XTtcblxuICAgICAgICAgICAgYW5nbGUgPSAtcm90YXRpb25BbmdsZSArIGluZGV4ICogaXRlbUFuZ2xlO1xuXG4gICAgICAgICAgICBzID0gTWF0aC5zaW4oYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgICAgIGMgPSBNYXRoLmNvcyhhbmdsZSAqIE1hdGguUEkgLyAxODApO1xuXG4gICAgICAgICAgICB4ID0gIC0zMDAgKyByYWRpdXMgKiBzICAgICArIHRyYW5zbGF0ZVg7XG4gICAgICAgICAgICB5ID0gIC00MDAgKyBhbmdsZSAqIGRlbHRhWSArIHRyYW5zbGF0ZVk7XG4gICAgICAgICAgICB6ID0gOTk4MDAgKyByYWRpdXMgKiBjICAgICArIHRyYW5zbGF0ZVo7XG5cbiAgICAgICAgICAgIG1hdHJpeC5pdGVtcyA9IFtcbiAgICAgICAgICAgICAgICBbYywgMCwgLXMsIDBdLFxuICAgICAgICAgICAgICAgIFswLCAxLCAgMCwgMF0sXG4gICAgICAgICAgICAgICAgW3MsIDAsICBjLCAwXSxcbiAgICAgICAgICAgICAgICBbeCwgeSwgIHosIDFdXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBpZiAoZmxpcHBlZCkge1xuICAgICAgICAgICAgICAgIG1hdHJpeCA9IHJvdGF0aW9uTWF0cml4LngobWF0cml4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJhbnNmb3JtU3R5bGUgPSBtYXRyaXguZ2V0VHJhbnNmb3JtU3R5bGUoKTtcbiAgICAgICAgICAgIG1hdHJpeC5kZXN0cm95KCk7XG5cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oaXRlbSwge1xuICAgICAgICAgICAgICAgIHJvdGF0aW9uQW5nbGUgOiBhbmdsZSxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1TdHlsZTogdHJhbnNmb3JtU3R5bGVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBvcGFjaXR5ID0gbWUuY2FsY3VsYXRlT3BhY2l0eShpdGVtKTtcbiAgICAgICAgICAgIGl0ZW0ub3BhY2l0eSA9IG9wYWNpdHk7XG5cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oaXRlbSwge1xuICAgICAgICAgICAgICAgIG9wYWNpdHkgICAgICAgOiBvcGFjaXR5LFxuICAgICAgICAgICAgICAgIHJvdGF0aW9uQW5nbGUgOiBhbmdsZSxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1TdHlsZTogdHJhbnNmb3JtU3R5bGVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkZWx0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQgICA6IG1lLmdldEl0ZW1Wbm9kZUlkKGl0ZW1bbWUua2V5UHJvcGVydHldKSxcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5ICA6IG9wYWNpdHksXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtU3R5bGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgYWN0aW9uIDogJ3VwZGF0ZURvbScsXG4gICAgICAgICAgICBhcHBOYW1lOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgZGVsdGFzIDogZGVsdGFzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICByZWZyZXNoSWZNb3VudGVkKCkge1xuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgc29ydEl0ZW1zKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZGVsdGFzICAgPSBbXSxcbiAgICAgICAgICAgIHBhcmVudElkID0gbWUudmRvbS5jblswXS5jblswXS5pZCxcbiAgICAgICAgICAgIGkgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgID0gTWF0aC5taW4obWUubWF4SXRlbXMsIG1lLnN0b3JlLmdldENvdW50KCkpO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGRlbHRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gIDogJ21vdmVOb2RlJyxcbiAgICAgICAgICAgICAgICBpZCAgICAgIDogbWUuZ2V0SXRlbVZub2RlSWQobWUuc3RvcmUuaXRlbXNbaV1bbWUua2V5UHJvcGVydHldKSxcbiAgICAgICAgICAgICAgICBpbmRleCAgIDogaSxcbiAgICAgICAgICAgICAgICBwYXJlbnRJZDogcGFyZW50SWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICBhY3Rpb24gOiAndXBkYXRlRG9tJyxcbiAgICAgICAgICAgIGFwcE5hbWU6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICBkZWx0YXMgOiBkZWx0YXNcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBtZS5yZWZyZXNoKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICB1cGRhdGVDbG9uZVRyYW5zbGF0ZSgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBhZnRlckRlbHRhcyAgPSBbXSxcbiAgICAgICAgICAgIGRlbHRhcyAgICAgICA9IFtdLFxuICAgICAgICAgICAgdGltZW91dElkLCB0cmFuc2Zvcm07XG5cbiAgICAgICAgaWYgKG1lLmNsb25lZEl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybSA9IG1lLmdldENsb25lVHJhbnNmb3JtKHRydWUpO1xuXG4gICAgICAgICAgICBtZS50cmFuc2l0aW9uVGltZW91dHMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaXRlbSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbWUuY2xvbmVkSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBkZWx0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGlkIDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgY2xzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGQgICA6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlOiBbJ25lby10cmFuc2l0aW9uLTYwMCddXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBhZnRlckRlbHRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaWQgOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICBjbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZCAgIDogWyduZW8tdHJhbnNpdGlvbi02MDAnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZTogW11cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgICAgIGFjdGlvbiA6ICd1cGRhdGVEb20nLFxuICAgICAgICAgICAgICAgIGFwcE5hbWU6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgZGVsdGFzIDogZGVsdGFzXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKG1lLnRyYW5zaXRpb25UaW1lb3V0cywgdGltZW91dElkKTtcblxuICAgICAgICAgICAgICAgICAgICBOZW8uY3VycmVudFdvcmtlci5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA6ICd1cGRhdGVEb20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwTmFtZTogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhcyA6IGFmdGVyRGVsdGFzXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIDIwMCk7XG5cbiAgICAgICAgICAgICAgICBtZS50cmFuc2l0aW9uVGltZW91dHMucHVzaCh0aW1lb3V0SWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGNmZyA9IHtlbnVtZXJhYmxlOiBmYWxzZSwgdmFsdWU6IEhlbGl4LnByb3RvdHlwZS5yZWZyZXNoSWZNb3VudGVkfTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoSGVsaXgucHJvdG90eXBlLCB7XG4gICAgYWZ0ZXJTZXREZWx0YVkgICAgICAgOiBjZmcsXG4gICAgYWZ0ZXJTZXRJdGVtQW5nbGUgICAgOiBjZmcsXG4gICAgYWZ0ZXJTZXRNYXhPcGFjaXR5ICAgOiBjZmcsXG4gICAgYWZ0ZXJTZXRNaW5PcGFjaXR5ICAgOiBjZmcsXG4gICAgYWZ0ZXJTZXRSYWRpdXMgICAgICAgOiBjZmcsXG4gICAgYWZ0ZXJTZXRSb3RhdGlvbkFuZ2xlOiBjZmcsXG4gICAgYWZ0ZXJTZXRUcmFuc2xhdGVYICAgOiBjZmcsXG4gICAgYWZ0ZXJTZXRUcmFuc2xhdGVZICAgOiBjZmcsXG4gICAgYWZ0ZXJTZXRUcmFuc2xhdGVaICAgOiBjZmdcbn0pO1xuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIZWxpeCk7XG5cbmV4cG9ydCB7SGVsaXggYXMgZGVmYXVsdH07IiwiaW1wb3J0IFNwaW5Eb3duVHJpZ2dlciAgIGZyb20gJy4vdHJpZ2dlci9TcGluRG93bi5tanMnO1xuaW1wb3J0IFNwaW5VcFRyaWdnZXIgICAgIGZyb20gJy4vdHJpZ2dlci9TcGluVXAubWpzJztcbmltcG9ydCBTcGluVXBEb3duVHJpZ2dlciBmcm9tICcuL3RyaWdnZXIvU3BpblVwRG93bi5tanMnO1xuaW1wb3J0IFRleHQgICAgICAgICAgICAgIGZyb20gJy4vVGV4dC5tanMnO1xuXG4vKipcbiAqIFVzZXMgYW4gaW5wdXQgdHlwZSBudW1iZXIgYW5kIG9wdGlvbmFsbHkgcHJvdmlkZXMgY3VzdG9tIHNwaW4gYnV0dG9ucyBmb3IgdXAgYW5kIGRvd25cbiAqIEBjbGFzcyBOZW8uZm9ybS5maWVsZC5OdW1iZXJcbiAqIEBleHRlbmRzIE5lby5mb3JtLmZpZWxkLlRleHRcbiAqL1xuY2xhc3MgTnVtYmVyIGV4dGVuZHMgVGV4dCB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVmFsaWQgdmFsdWVzIGZvciB0cmlnZ2VyUG9zaXRpb25cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IHRyaWdnZXJQb3NpdGlvbnM9WydyaWdodCcsICdzaWRlcyddXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgdHJpZ2dlclBvc2l0aW9uczogWydyaWdodCcsICdzaWRlcyddXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZm9ybS5maWVsZC5OdW1iZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5mb3JtLmZpZWxkLk51bWJlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdudW1iZXJmaWVsZCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdudW1iZXJmaWVsZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gY2xzPVsnbmVvLW51bWJlcmZpZWxkJywgJ25lby10ZXh0ZmllbGQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1udW1iZXJmaWVsZCcsICduZW8tdGV4dGZpZWxkJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJbXXxudWxsfSBleGNsdWRlZD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBleGNsdWRlZFZhbHVlczogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGZhbHNlIG9ubHkgYWxsb3dzIGNoYW5naW5nIHRoZSBmaWVsZCB1c2luZyB0aGUgc3BpbiBidXR0b25zXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGlucHV0RWRpdGFibGVfPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGlucHV0RWRpdGFibGVfOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWUgZm9yIHRoZSBpbnB1dFR5cGVfIHRleHRmaWVsZCBjb25maWdcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBpbnB1dFR5cGU9J251bWJlcidcbiAgICAgICAgICovXG4gICAgICAgIGlucHV0VHlwZTogJ251bWJlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IG1heFZhbHVlXz0xMDBcbiAgICAgICAgICovXG4gICAgICAgIG1heFZhbHVlXzogMTAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBtaW5WYWx1ZV89MFxuICAgICAgICAgKi9cbiAgICAgICAgbWluVmFsdWVfOiAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBzdGVwU2l6ZV89MVxuICAgICAgICAgKi9cbiAgICAgICAgc3RlcFNpemVfOiAxLFxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsaWQgdmFsdWVzOiAncmlnaHQnLCAnc2lkZXMnXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gdHJpZ2dlclBvc2l0aW9uPSdyaWdodCdcbiAgICAgICAgICovXG4gICAgICAgIHRyaWdnZXJQb3NpdGlvbl86ICdyaWdodCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSB1c2VTcGluQnV0dG9uc189dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgdXNlU3BpbkJ1dHRvbnNfOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVUcmlnZ2VycygpO1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBpbnB1dEVkaXRhYmxlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldElucHV0RWRpdGFibGUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgaW5wdXRFbCA9IG1lLmdldElucHV0RWwoKSxcbiAgICAgICAgICAgIHN0eWxlICAgPSBpbnB1dEVsLnN0eWxlIHx8IHt9O1xuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgZGVsZXRlIHN0eWxlLnBvaW50ZXJFdmVudHM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBtYXhWYWx1ZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNYXhWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VJbnB1dEVsS2V5KCdtYXgnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBtaW5WYWx1ZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNaW5WYWx1ZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VJbnB1dEVsS2V5KCdtaW4nLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBzdGVwU2l6ZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTdGVwU2l6ZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICA9IHRoaXMsXG4gICAgICAgICAgICB2YWwgPSBtZS52YWx1ZSxcbiAgICAgICAgICAgIG1vZHVsbztcblxuICAgICAgICBtZS5jaGFuZ2VJbnB1dEVsS2V5KCdzdGVwJywgdmFsdWUpO1xuXG4gICAgICAgIGlmICh2YWwgIT09IG51bGwpIHtcbiAgICAgICAgICAgIG1vZHVsbyA9ICh2YWwgLSBtZS5taW5WYWx1ZSkgJSB2YWx1ZTtcblxuICAgICAgICAgICAgaWYgKG1vZHVsbyAhPT0gMCkgeyAvLyBmaW5kIHRoZSBjbG9zZXN0IHZhbGlkIHZhbHVlXG4gICAgICAgICAgICAgICAgaWYgKG1vZHVsbyAvIHZhbHVlID4gMC41KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICAgICAgKHZhbCArIHZhbHVlIC0gbW9kdWxvIDwgbWUubWF4VmFsdWUpIHttZS52YWx1ZSA9IHZhbCArIHZhbHVlIC0gbW9kdWxvO31cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsIC0gbW9kdWxvID4gbWUubWluVmFsdWUpICAgICAgICAge21lLnZhbHVlID0gdmFsIC0gbW9kdWxvO31cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAgICAgICh2YWwgLSBtb2R1bG8gPiBtZS5taW5WYWx1ZSkgICAgICAgICB7bWUudmFsdWUgPSB2YWwgLSBtb2R1bG87fVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh2YWwgKyB2YWx1ZSAtIG1vZHVsbyA8IG1lLm1heFZhbHVlKSB7bWUudmFsdWUgPSB2YWwgKyB2YWx1ZSAtIG1vZHVsbzt9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB0cmlnZ2VyUG9zaXRpb24gY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VHJpZ2dlclBvc2l0aW9uKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVHJpZ2dlcnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdXNlU3BpbkJ1dHRvbnMgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRVc2VTcGluQnV0dG9ucyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvbGRWYWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRyaWdnZXJzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSB0cmlnZ2VyUG9zaXRpb24gY29uZmlnIGdldHMgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRUcmlnZ2VyUG9zaXRpb24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJlZm9yZVNldEVudW1WYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICd0cmlnZ2VyUG9zaXRpb24nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIG9uSW5wdXRWYWx1ZUNoYW5nZShkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2YWx1ZSAgICA9IGRhdGEudmFsdWUsXG4gICAgICAgICAgICBvbGRWYWx1ZSA9IG1lLnZhbHVlO1xuXG4gICAgICAgIGlmICghdmFsdWUgJiYgIW1lLnJlcXVpcmVkKSB7XG4gICAgICAgICAgICBzdXBlci5vbklucHV0VmFsdWVDaGFuZ2UoZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTsgLy8gdG9kbzogc3VwcG9ydCBmb3Igb3RoZXIgbnVtYmVyIHR5cGVzXG5cbiAgICAgICAgICAgIGlmICghTmVvLmlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIG1lLl92YWx1ZSA9IG9sZFZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC0gdmFsdWUgJSBtZS5zdGVwU2l6ZTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgubWF4KG1lLm1pblZhbHVlLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLm1pbihtZS5tYXhWYWx1ZSwgdmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgZGF0YS52YWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgc3VwZXIub25JbnB1dFZhbHVlQ2hhbmdlKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uU3BpbkJ1dHRvbkRvd25DbGljaygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIG9sZFZhbHVlID0gbWUudmFsdWUgfHwgKG1lLm1heFZhbHVlICsgbWUuc3RlcFNpemUpLFxuICAgICAgICAgICAgdmFsdWUgICAgPSBNYXRoLm1heChtZS5taW5WYWx1ZSwgb2xkVmFsdWUgLSBtZS5zdGVwU2l6ZSk7XG5cbiAgICAgICAgaWYgKG1lLmV4Y2x1ZGVkVmFsdWVzKSB7XG4gICAgICAgICAgICB3aGlsZShtZS5leGNsdWRlZFZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgubWF4KG1lLm1pblZhbHVlLCB2YWx1ZSAtIG1lLnN0ZXBTaXplKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIG1lLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25TcGluQnV0dG9uVXBDbGljaygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIG9sZFZhbHVlID0gbWUudmFsdWUgfHwgKG1lLm1pblZhbHVlIC0gbWUuc3RlcFNpemUpLFxuICAgICAgICAgICAgdmFsdWUgICAgPSBNYXRoLm1pbihtZS5tYXhWYWx1ZSwgb2xkVmFsdWUgKyBtZS5zdGVwU2l6ZSk7XG5cbiAgICAgICAgaWYgKG1lLmV4Y2x1ZGVkVmFsdWVzKSB7XG4gICAgICAgICAgICB3aGlsZShtZS5leGNsdWRlZFZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgubWluKG1lLm1heFZhbHVlLCB2YWx1ZSArIG1lLnN0ZXBTaXplKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIG1lLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHVwZGF0ZVRyaWdnZXJzKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdHJpZ2dlcnMgPSBtZS50cmlnZ2VycyB8fCBbXTtcblxuICAgICAgICBpZiAobWUudXNlU3BpbkJ1dHRvbnMpIHtcbiAgICAgICAgICAgIGlmIChtZS50cmlnZ2VyUG9zaXRpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW1lLmhhc1RyaWdnZXIoJ3NwaW51cGRvd24nKSkge1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2Vycy5wdXNoKFNwaW5VcERvd25UcmlnZ2VyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtZS5yZW1vdmVUcmlnZ2VyKCdzcGluZG93bicsIHRydWUsIHRyaWdnZXJzKTtcbiAgICAgICAgICAgICAgICBtZS5yZW1vdmVUcmlnZ2VyKCdzcGludXAnLCAgIHRydWUsIHRyaWdnZXJzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFtZS5oYXNUcmlnZ2VyKCdzcGluZG93bicpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJzLnB1c2goU3BpbkRvd25UcmlnZ2VyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIW1lLmhhc1RyaWdnZXIoJ3NwaW51cCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJzLnB1c2goU3BpblVwVHJpZ2dlcik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbWUucmVtb3ZlVHJpZ2dlcignc3BpbnVwZG93bicsIHRydWUsIHRyaWdnZXJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLnJlbW92ZVRyaWdnZXIoJ3NwaW5kb3duJywgICB0cnVlLCB0cmlnZ2Vycyk7XG4gICAgICAgICAgICBtZS5yZW1vdmVUcmlnZ2VyKCdzcGludXAnLCAgICAgdHJ1ZSwgdHJpZ2dlcnMpO1xuICAgICAgICAgICAgbWUucmVtb3ZlVHJpZ2dlcignc3BpbnVwZG93bicsIHRydWUsIHRyaWdnZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnRyaWdnZXJzID0gdHJpZ2dlcnM7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhOdW1iZXIpO1xuXG5leHBvcnQge051bWJlciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgTnVtYmVyIGZyb20gJy4vTnVtYmVyLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5mb3JtLmZpZWxkLlJhbmdlXG4gKiBAZXh0ZW5kcyBOZW8uZm9ybS5maWVsZC5OdW1iZXJcbiAqL1xuY2xhc3MgUmFuZ2UgZXh0ZW5kcyBOdW1iZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZm9ybS5maWVsZC5SYW5nZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmZvcm0uZmllbGQuUmFuZ2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ncmFuZ2VmaWVsZCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdyYW5nZWZpZWxkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgc2hvd3MgYSBjbGVhciB0cmlnZ2VyIGluIGNhc2UgdGhlIGZpZWxkIGhhcyBhIG5vbiBlbXB0eSB2YWx1ZS5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gY2xlYXJhYmxlPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBjbGVhcmFibGU6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1yYW5nZWZpZWxkJywnbmVvLXRleHRmaWVsZCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLXJhbmdlZmllbGQnLCAnbmVvLXRleHRmaWVsZCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWUgZm9yIHRoZSBpbnB1dFR5cGVfIHRleHRmaWVsZCBjb25maWdcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBpbnB1dFR5cGU9J3JhbmdlJ1xuICAgICAgICAgKi9cbiAgICAgICAgaW5wdXRUeXBlOiAncmFuZ2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IHRpY2ttYXJrc189W11cbiAgICAgICAgICovXG4gICAgICAgIHRpY2ttYXJrc186IFtdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gdXNlSW5wdXRFdmVudD1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgdXNlSW5wdXRFdmVudCA6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzYWJsZXMgdGhlIGZpZWxkLk51bWJlciBidXR0b25zXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHVzZUlucHV0RXZlbnQ9ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHVzZVNwaW5CdXR0b25zOiBmYWxzZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRvbUxpc3RlbmVycyA9IG1lLmRvbUxpc3RlbmVycyxcbiAgICAgICAgICAgIGlucHV0RWwgICAgICA9IG1lLnZkb20uY25bMV07XG5cbiAgICAgICAgaWYgKG1lLnVzZUlucHV0RXZlbnQpIHtcbiAgICAgICAgICAgIGRvbUxpc3RlbmVycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgICAgICAgICBmbiAgICA6IG1lLm9uSW5wdXRWYWx1ZUNoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgaWQgICAgOiBtZS52ZG9tLmNuWzFdLmlkLFxuICAgICAgICAgICAgICAgICAgICBzY29wZSA6IG1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1lLmRvbUxpc3RlbmVycyA9IGRvbUxpc3RlbmVycztcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0RWwuY2xzID0gWyduZW8tcmFuZ2VmaWVsZC1pbnB1dCddOyAvLyByZXBsYWNlIG5lby10ZXh0ZmllbGQtaW5wdXRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHRpY2ttYXJrcyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VGlja21hcmtzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCd1cGRhdGVUaWNrbWFya3MnKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFJhbmdlKTtcblxuZXhwb3J0IHtSYW5nZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBEZWNyZWFzZXMgdGhlIHZhbHVlIG9mIGEgTnVtYmVyRmllbGRcbiAqIEBjbGFzcyBOZW8uZm9ybS5maWVsZC50cmlnZ2VyLlNwaW5Eb3duXG4gKiBAZXh0ZW5kcyBOZW8uZm9ybS5maWVsZC50cmlnZ2VyLkJhc2VcbiAqL1xuY2xhc3MgU3BpbkRvd24gZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmZvcm0uZmllbGQudHJpZ2dlci5TcGluVXAnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5mb3JtLmZpZWxkLnRyaWdnZXIuU3BpbkRvd24nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ndHJpZ2dlci1zcGluZG93bidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICd0cmlnZ2VyLXNwaW5kb3duJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYWxpZ25fPSdzdGFydCdcbiAgICAgICAgICovXG4gICAgICAgIGFsaWduOiAnc3RhcnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGljb25DbHM9J2ZhIGZhLWNoZXZyb24tbGVmdCdcbiAgICAgICAgICovXG4gICAgICAgIGljb25DbHM6ICdmYSBmYS1jaGV2cm9uLWxlZnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogSW50ZXJuYWwgZmxhZyB1c2VkIGJ5IGZpZWxkLmdldFRyaWdnZXIoKVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHR5cGU9J3NwaW5kb3duJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB0eXBlOiAnc3BpbmRvd24nXG4gICAgfX1cblxuICAgIG9uVHJpZ2dlckNsaWNrKGRhdGEpIHtcbiAgICAgICAgdGhpcy5maWVsZC5vblNwaW5CdXR0b25Eb3duQ2xpY2soKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFNwaW5Eb3duKTtcblxuZXhwb3J0IHtTcGluRG93biBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBJbmNyZWFzZXMgdGhlIHZhbHVlIG9mIGEgTnVtYmVyRmllbGRcbiAqIEBjbGFzcyBOZW8uZm9ybS5maWVsZC50cmlnZ2VyLlNwaW5VcFxuICogQGV4dGVuZHMgTmVvLmZvcm0uZmllbGQudHJpZ2dlci5CYXNlXG4gKi9cbmNsYXNzIFNwaW5VcCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZm9ybS5maWVsZC50cmlnZ2VyLlNwaW5VcCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmZvcm0uZmllbGQudHJpZ2dlci5TcGluVXAnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ndHJpZ2dlci1zcGludXAnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAndHJpZ2dlci1zcGludXAnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGljb25DbHM9J2ZhIGZhLWNoZXZyb24tcmlnaHQnXG4gICAgICAgICAqL1xuICAgICAgICBpY29uQ2xzOiAnZmEgZmEtY2hldnJvbi1yaWdodCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnRlcm5hbCBmbGFnIHVzZWQgYnkgZmllbGQuZ2V0VHJpZ2dlcigpXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gdHlwZT0nc3BpbnVwJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB0eXBlOiAnc3BpbnVwJ1xuICAgIH19XG5cbiAgICBvblRyaWdnZXJDbGljayhkYXRhKSB7XG4gICAgICAgIHRoaXMuZmllbGQub25TcGluQnV0dG9uVXBDbGljaygpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoU3BpblVwKTtcblxuZXhwb3J0IHtTcGluVXAgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQ29tYmluZXMgc3BpbiB1cCAmIGRvd24gaW5zaWRlIG9uZSB0cmlnZ2VyXG4gKiBAY2xhc3MgTmVvLmZvcm0uZmllbGQudHJpZ2dlci5TcGluVXBEb3duXG4gKiBAZXh0ZW5kcyBOZW8uZm9ybS5maWVsZC50cmlnZ2VyLkJhc2VcbiAqL1xuY2xhc3MgU3BpblVwRG93biBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZm9ybS5maWVsZC50cmlnZ2VyLlNwaW5VcERvd24nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5mb3JtLmZpZWxkLnRyaWdnZXIuU3BpblVwRG93bicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd0cmlnZ2VyLXNwaW51cGRvd24nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAndHJpZ2dlci1zcGludXBkb3duJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tZmllbGQtdHJpZ2dlcicsICduZW8tc3Bpbi1idXR0b25zJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tZmllbGQtdHJpZ2dlcicsICduZW8tc3Bpbi1idXR0b25zJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHNwaW5CdXR0b25Eb3duSWNvbkNscz0nZmEgZmEtY2hldnJvbi1kb3duJ1xuICAgICAgICAgKi9cbiAgICAgICAgc3BpbkJ1dHRvbkRvd25JY29uQ2xzOiAnZmEgZmEtY2hldnJvbi1kb3duJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gc3BpbkJ1dHRvblVwSWNvbkNscz0nZmEgZmEtY2hldnJvbi11cCdcbiAgICAgICAgICovXG4gICAgICAgIHNwaW5CdXR0b25VcEljb25DbHM6ICdmYSBmYS1jaGV2cm9uLXVwJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludGVybmFsIGZsYWcgdXNlZCBieSBmaWVsZC5nZXRUcmlnZ2VyKClcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSB0eXBlPSdzcGludXBkb3duJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB0eXBlOiAnc3BpbnVwZG93bidcbiAgICB9fVxuXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgdmRvbS5jbiA9IFtcbiAgICAgICAgICAgIHtjbHM6IFsnbmVvLXNwaW4tYnV0dG9uJywgJ25lby11cCcsICAgbWUuc3BpbkJ1dHRvblVwSWNvbkNsc119LFxuICAgICAgICAgICAge2NsczogWyduZW8tc3Bpbi1idXR0b24nLCAnbmVvLWRvd24nLCBtZS5zcGluQnV0dG9uRG93bkljb25DbHNdfVxuICAgICAgICBdO1xuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuXG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcbiAgICB9XG5cbiAgICBvblRyaWdnZXJDbGljayhkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdGFyZ2V0ID0gZGF0YS5wYXRoWzBdLFxuICAgICAgICAgICAgY2xzICAgID0gdGFyZ2V0LmNscy5qb2luKCcgJyk7XG5cbiAgICAgICAgaWYgKGNscy5pbmNsdWRlcygnbmVvLWRvd24nKSkge1xuICAgICAgICAgICAgbWUuZmllbGQub25TcGluQnV0dG9uRG93bkNsaWNrKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2xzLmluY2x1ZGVzKCduZW8tdXAnKSkge1xuICAgICAgICAgICAgbWUuZmllbGQub25TcGluQnV0dG9uVXBDbGljaygpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhTcGluVXBEb3duKTtcblxuZXhwb3J0IHtTcGluVXBEb3duIGFzIGRlZmF1bHR9OyIsImltcG9ydCBNb2RlbCAgICBmcm9tICcuL01vZGVsLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuXG4vKipcbiAqIEEgc2VsZWN0aW9uIG1vZGVsIGludGVuZGVkIHRvIHVzZSBmb3IgTmVvLmNvbXBvbmVudC5IZWxpeFxuICogQGNsYXNzIE5lby5zZWxlY3Rpb24uSGVsaXhNb2RlbFxuICogQGV4dGVuZHMgTmVvLnNlbGVjdGlvbi5Nb2RlbFxuICovXG5jbGFzcyBIZWxpeE1vZGVsIGV4dGVuZHMgTW9kZWwge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uc2VsZWN0aW9uLkhlbGl4TW9kZWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5zZWxlY3Rpb24uSGVsaXhNb2RlbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdzZWxlY3Rpb24taGVsaXhtb2RlbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdzZWxlY3Rpb24taGVsaXhtb2RlbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIHRvIHN0YXkgaW4gdGhlIHNhbWUgY29sdW1uIHdoZW4gbmF2aWdhdGluZyB3aXRoIHRoZSB1cCBhbmQgZG93biBrZXlzLFxuICAgICAgICAgKiBvdGhlcndpc2UgeW91IHdpbGwgbmF2aWdhdGUgdG8gdGhlIG5leHQgLyBwcmV2IGNvbHVtbiB3aGVuIG1vdmluZyBvdXRcbiAgICAgICAgICogQG1lbWJlciB7Ym9vbGVhbn0gc3RheUluQ29sdW1uPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBzdGF5SW5Db2x1bW46IGZhbHNlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRvIG5vdCBhcHBseSBhIGRvbUxpc3RlbmVyXG4gICAgICovXG4gICAgYWRkRG9tTGlzdGVuZXIoKSB7fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnRhaW5lckNsaWNrKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmlldyAgICAgPSBtZS52aWV3LFxuICAgICAgICAgICAgb2xkSXRlbXMgPSBbLi4ubWUuaXRlbXNdLFxuICAgICAgICAgICAgZGVsdGFzICAgPSBbXTtcblxuICAgICAgICBtZS5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgZGVsdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgIGlkIDogdmlldy5nZXRJdGVtVm5vZGVJZChpdGVtKSxcbiAgICAgICAgICAgICAgICBjbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgYWRkICAgOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlOiBbJ25lby1zZWxlY3RlZCddXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLml0ZW1zLnNwbGljZSgwLCBtZS5pdGVtcy5sZW5ndGgpO1xuXG4gICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgYWN0aW9uIDogJ3VwZGF0ZURvbScsXG4gICAgICAgICAgICBhcHBOYW1lOiB2aWV3LmFwcE5hbWUsXG4gICAgICAgICAgICBkZWx0YXMgOiBkZWx0YXNcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBtZS5maXJlKCdzZWxlY3Rpb25DaGFuZ2UnLCBtZS5pdGVtcywgb2xkSXRlbXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25JdGVtQ2xpY2soZGF0YSkge1xuICAgICAgICBsZXQgaSAgICA9IDAsXG4gICAgICAgICAgICBsZW4gID0gZGF0YS5wYXRoLmxlbmd0aCxcbiAgICAgICAgICAgIHZpZXcgPSB0aGlzLnZpZXcsXG4gICAgICAgICAgICBrZXk7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKGRhdGEucGF0aFtpXS5jbHMuaW5jbHVkZXMoJ25lby1oZWxpeC1pdGVtJykpIHtcbiAgICAgICAgICAgICAgICBrZXkgPSB2aWV3LmdldEl0ZW1JZChkYXRhLnBhdGhbaV0uaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0KGtleSk7XG5cbiAgICAgICAgICAgICAgICB2aWV3LmZpcmUoJ3NlbGVjdCcsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkOiB2aWV3LnN0b3JlLmdldChrZXkpXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbktleURvd25Eb3duKGRhdGEpIHtcbiAgICAgICAgdGhpcy5vbk5hdktleUNvbHVtbigxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25LZXlEb3duTGVmdChkYXRhKSB7XG4gICAgICAgIHRoaXMub25OYXZLZXlSb3coLTEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbktleURvd25SaWdodChkYXRhKSB7XG4gICAgICAgIHRoaXMub25OYXZLZXlSb3coMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uS2V5RG93blVwKGRhdGEpIHtcbiAgICAgICAgdGhpcy5vbk5hdktleUNvbHVtbigtMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc3RlcD0xXG4gICAgICovXG4gICAgb25OYXZLZXlDb2x1bW4oc3RlcD0xKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmlldyAgICAgICAgID0gbWUudmlldyxcbiAgICAgICAgICAgIHN0b3JlICAgICAgICA9IHZpZXcuc3RvcmUsXG4gICAgICAgICAgICBzZWxlY3RlZCAgICAgPSBtZS5pdGVtc1swXSxcbiAgICAgICAgICAgIGNvdW50UmVjb3JkcyA9IHN0b3JlLmdldENvdW50KCksXG4gICAgICAgICAgICBpdGVtc1BlclJvdyAgPSBwYXJzZUludCgzNjAgLyB2aWV3Lml0ZW1BbmdsZSksXG4gICAgICAgICAgICBzdGF5SW5Db2x1bW4gPSBtZS5zdGF5SW5Db2x1bW4sXG4gICAgICAgICAgICBpbmRleCwgcmVjb3JkO1xuXG4gICAgICAgIHN0ZXAgKj0gaXRlbXNQZXJSb3c7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICBpbmRleCA9IHN0b3JlLmluZGV4T2Yoc2VsZWN0ZWQpICsgc3RlcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIGlmICghc3RheUluQ29sdW1uKSB7XG4gICAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChpbmRleCA8IChjb3VudFJlY29yZHMgLSBpdGVtc1BlclJvdykpIHtcbiAgICAgICAgICAgICAgICBpbmRleCArPSBpdGVtc1BlclJvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA+PSBjb3VudFJlY29yZHMpIHtcbiAgICAgICAgICAgIGlmICghc3RheUluQ29sdW1uKSB7XG4gICAgICAgICAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChpbmRleCA+PSBpdGVtc1BlclJvdykge1xuICAgICAgICAgICAgICAgIGluZGV4IC09IGl0ZW1zUGVyUm93O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVjb3JkID0gc3RvcmUuZ2V0QXQoaW5kZXgpO1xuXG4gICAgICAgIG1lLnNlbGVjdChyZWNvcmRbc3RvcmUua2V5UHJvcGVydHldKTtcblxuICAgICAgICB2aWV3LmZpcmUoJ3NlbGVjdCcsIHtcbiAgICAgICAgICAgIHJlY29yZDogcmVjb3JkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHN0ZXA9MVxuICAgICAqL1xuICAgIG9uTmF2S2V5Um93KHN0ZXA9MSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZpZXcgICAgICAgICA9IG1lLnZpZXcsXG4gICAgICAgICAgICBzdG9yZSAgICAgICAgPSB2aWV3LnN0b3JlLFxuICAgICAgICAgICAgc2VsZWN0ZWQgICAgID0gbWUuaXRlbXNbMF0sXG4gICAgICAgICAgICBjb3VudFJlY29yZHMgPSBzdG9yZS5nZXRDb3VudCgpLFxuICAgICAgICAgICAgaW5kZXgsIHJlY29yZDtcblxuICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGluZGV4ID0gc3RvcmUuaW5kZXhPZihzZWxlY3RlZCkgKyBzdGVwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgaW5kZXggPSBjb3VudFJlY29yZHMgLSAxO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID49IGNvdW50UmVjb3Jkcykge1xuICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVjb3JkID0gc3RvcmUuZ2V0QXQoaW5kZXgpO1xuXG4gICAgICAgIG1lLnNlbGVjdChyZWNvcmRbc3RvcmUua2V5UHJvcGVydHldKTtcblxuICAgICAgICB2aWV3LmZpcmUoJ3NlbGVjdCcsIHtcbiAgICAgICAgICAgIHJlY29yZDogcmVjb3JkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGNvbXBvbmVudFxuICAgICAqL1xuICAgIHJlZ2lzdGVyKGNvbXBvbmVudCkge1xuICAgICAgICBzdXBlci5yZWdpc3Rlcihjb21wb25lbnQpO1xuXG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGlkICAgPSBtZS5pZCxcbiAgICAgICAgICAgIHZpZXcgPSBtZS52aWV3O1xuXG4gICAgICAgIHZpZXcub24oe1xuICAgICAgICAgICAgY29udGFpbmVyQ2xpY2s6IG1lLm9uQ29udGFpbmVyQ2xpY2ssXG4gICAgICAgICAgICBpdGVtQ2xpY2sgICAgIDogbWUub25JdGVtQ2xpY2ssXG4gICAgICAgICAgICBzY29wZSAgICAgICAgIDogbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHZpZXcua2V5cykge1xuICAgICAgICAgICAgdmlldy5rZXlzLl9rZXlzLnB1c2goXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duRG93bicgICxrZXk6ICdEb3duJyAgLHNjb3BlOiBpZH0sXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duTGVmdCcgICxrZXk6ICdMZWZ0JyAgLHNjb3BlOiBpZH0sXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duUmlnaHQnICxrZXk6ICdSaWdodCcgLHNjb3BlOiBpZH0sXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duVXAnICAgICxrZXk6ICdVcCcgICAgLHNjb3BlOiBpZH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpdGVtSWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFt0b2dnbGVTZWxlY3Rpb249dHJ1ZV1cbiAgICAgKi9cbiAgICBzZWxlY3QoaXRlbUlkLCB0b2dnbGVTZWxlY3Rpb249dHJ1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2aWV3ICAgICAgID0gbWUudmlldyxcbiAgICAgICAgICAgIGlzU2VsZWN0ZWQgPSB0b2dnbGVTZWxlY3Rpb24gPT09IGZhbHNlID8gZmFsc2UgOiBtZS5pdGVtcy5pbmNsdWRlcyhpdGVtSWQpLFxuICAgICAgICAgICAgb2xkSXRlbXMgICA9IFsuLi5tZS5pdGVtc10sXG4gICAgICAgICAgICBkZWx0YXMgICAgID0gW107XG5cbiAgICAgICAgaWYgKG1lLnNpbmdsZVNlbGVjdCkge1xuICAgICAgICAgICAgbWUuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCAhPT0gaXRlbUlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbHRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogdmlldy5nZXRJdGVtVm5vZGVJZChpdGVtKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZCAgIDogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlOiBbJ25lby1zZWxlY3RlZCddXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtZS5pdGVtcy5zcGxpY2UoMCwgbWUuaXRlbXMubGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbHRhcy5wdXNoKHtcbiAgICAgICAgICAgIGlkIDogdmlldy5nZXRJdGVtVm5vZGVJZChpdGVtSWQpLFxuICAgICAgICAgICAgY2xzOiB7XG4gICAgICAgICAgICAgICAgYWRkICAgOiBpc1NlbGVjdGVkID8gW10gOiBbJ25lby1zZWxlY3RlZCddLFxuICAgICAgICAgICAgICAgIHJlbW92ZTogaXNTZWxlY3RlZCA/IFsnbmVvLXNlbGVjdGVkJ10gOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBOZW9BcnJheVtpc1NlbGVjdGVkID8gJ3JlbW92ZScgOiAnYWRkJ10obWUuaXRlbXMsIGl0ZW1JZCk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NlbGVjdCcsIGl0ZW1JZCwgaXNTZWxlY3RlZCwgbWUuaXRlbXMpO1xuXG4gICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgYWN0aW9uIDogJ3VwZGF0ZURvbScsXG4gICAgICAgICAgICBhcHBOYW1lOiB2aWV3LmFwcE5hbWUsXG4gICAgICAgICAgICBkZWx0YXMgOiBkZWx0YXNcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBtZS5maXJlKCdzZWxlY3Rpb25DaGFuZ2UnLCBtZS5pdGVtcywgb2xkSXRlbXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHVucmVnaXN0ZXIoKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGlkICAgPSBtZS5pZCxcbiAgICAgICAgICAgIHZpZXcgPSBtZS52aWV3O1xuXG4gICAgICAgIGlmICh2aWV3LmtleXMpIHtcbiAgICAgICAgICAgIHZpZXcua2V5cy5yZW1vdmVLZXlzKFtcbiAgICAgICAgICAgICAgICB7Zm46ICdvbktleURvd25Eb3duJyAgLGtleTogJ0Rvd24nICAsc2NvcGU6IGlkfSxcbiAgICAgICAgICAgICAgICB7Zm46ICdvbktleURvd25MZWZ0JyAgLGtleTogJ0xlZnQnICAsc2NvcGU6IGlkfSxcbiAgICAgICAgICAgICAgICB7Zm46ICdvbktleURvd25SaWdodCcgLGtleTogJ1JpZ2h0JyAsc2NvcGU6IGlkfSxcbiAgICAgICAgICAgICAgICB7Zm46ICdvbktleURvd25VcCcgICAgLGtleTogJ1VwJyAgICAsc2NvcGU6IGlkfVxuICAgICAgICAgICAgXSk7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci51bnJlZ2lzdGVyKCk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIZWxpeE1vZGVsKTtcblxuZXhwb3J0IHtIZWxpeE1vZGVsIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuXG4vKipcbiAqIFV0aWxpdHkgY2xhc3MgZm9yIE1hdHJpeCBiYXNlZCBjYWxjdWxhdGlvbnNcbiAqIEBjbGFzcyBOZW8udXRpbC5NYXRyaXhcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgTWF0cml4IGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby51dGlsLk1hdHJpeCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnV0aWwuTWF0cml4JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fG51bGx9IGl0ZW1zXz1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zXzogbnVsbFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBlbGVtZW50IChpLGopIG9mIHRoZSBtYXRyaXhcbiAgICAgKiBAcGFyYW0gaVxuICAgICAqIEBwYXJhbSBqXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0RWxlbWVudChpLCBqKSB7XG4gICAgICAgIGxldCBpdGVtcyA9IHRoaXMuaXRlbXM7XG5cbiAgICAgICAgaWYgKGkgPCAxIHx8IGkgPiBpdGVtcy5sZW5ndGggfHwgaiA8IDEgfHwgaiA+IGl0ZW1zWzBdLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXRlbXNbaSAtIDFdW2ogLSAxXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzaG9ydGN1dCBmb3IgZ2V0RWxlbWVudFxuICAgICAqL1xuICAgIGUoaSwgaikge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50KGksIGopO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHJlc3VsdCBvZiBtdWx0aXBseWluZyB0aGUgbWF0cml4IGZyb20gdGhlIHJpZ2h0IGJ5IHRoZSBhcmd1bWVudC5cbiAgICAgKiBAcGFyYW0gbWF0cml4XG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgbXVsdGlwbHkobWF0cml4KSB7XG4gICAgICAgIGxldCBtZSAgICA9IHRoaXMsXG4gICAgICAgICAgICBNICAgICA9IG1hdHJpeC5pdGVtcyB8fCBtYXRyaXgsXG4gICAgICAgICAgICBpdGVtcyA9IG1lLml0ZW1zLFxuICAgICAgICAgICAgbmkgICAgPSBpdGVtcy5sZW5ndGgsXG4gICAgICAgICAgICBraSAgICA9IG5pLFxuICAgICAgICAgICAga2ogICAgPSBNWzBdLmxlbmd0aCxcbiAgICAgICAgICAgIGNvbHMgID0gaXRlbXNbMF0ubGVuZ3RoLFxuICAgICAgICAgICAgZWxzICAgPSBbXSxcbiAgICAgICAgICAgIGMsIGksIGosIG5jLCBuaiwgc3VtO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGkgICAgICA9IGtpIC0gbmk7XG4gICAgICAgICAgICBlbHNbaV0gPSBbXTtcbiAgICAgICAgICAgIG5qICAgICA9IGtqO1xuXG4gICAgICAgICAgICBkbyB7IGogPSBraiAtIG5qO1xuICAgICAgICAgICAgICAgIHN1bSA9IDA7XG4gICAgICAgICAgICAgICAgbmMgID0gY29scztcblxuICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgYyA9IGNvbHMgLSBuYztcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGl0ZW1zW2ldW2NdICogTVtjXVtqXTtcbiAgICAgICAgICAgICAgICB9IHdoaWxlICgtLW5jKTtcbiAgICAgICAgICAgICAgICBlbHNbaV1bal0gPSBzdW07XG4gICAgICAgICAgICB9IHdoaWxlICgtLW5qKTtcbiAgICAgICAgfSB3aGlsZSAoLS1uaSk7XG5cbiAgICAgICAgbWF0cml4Lml0ZW1zID0gZWxzO1xuXG4gICAgICAgIHJldHVybiBtYXRyaXg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2hvcnRjdXQgZm9yIG11bHRpcGx5XG4gICAgICovXG4gICAgeChtYXRyaXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlwbHkobWF0cml4KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0XG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgc3RhdGljIHJvdGF0ZVgodCkge1xuICAgICAgICBsZXQgYyA9IE1hdGguY29zKHQpLFxuICAgICAgICAgICAgcyA9IE1hdGguc2luKHQpO1xuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBbMSwgMCwgIDAsIDBdLFxuICAgICAgICAgICAgWzAsIGMsIC1zLCAwXSxcbiAgICAgICAgICAgIFswLCBzLCAgYywgMF0sXG4gICAgICAgICAgICBbMCwgMCwgIDAsIDFdXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHN0YXRpYyByb3RhdGVZKHQpIHtcbiAgICAgICAgbGV0IGMgPSBNYXRoLmNvcyh0KSxcbiAgICAgICAgICAgIHMgPSBNYXRoLnNpbih0KTtcblxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgW2MsIDAsIC1zLCAwXSxcbiAgICAgICAgICAgIFswLCAxLCAgMCwgMF0sXG4gICAgICAgICAgICBbcywgMCwgIGMsIDBdLFxuICAgICAgICAgICAgWzAsIDAsICAwLCAxXVxuICAgICAgICBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBzdGF0aWMgcm90YXRlWih0KSB7XG4gICAgICAgIGxldCBjID0gTWF0aC5jb3ModCksXG4gICAgICAgICAgICBzID0gTWF0aC5zaW4odCk7XG5cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIFtjLCAtcywgMCwgMF0sXG4gICAgICAgICAgICBbcywgIGMsIDAsIDBdLFxuICAgICAgICAgICAgWzAsICAwLCAxLCAwXSxcbiAgICAgICAgICAgIFswLCAgMCwgMCwgMV1cbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGdldFRyYW5zZm9ybVN0eWxlKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgcCAgPSAxMCwgLy8gcHJlY2lzaW9uXG4gICAgICAgICAgICBzO1xuXG4gICAgICAgIHMgID0gJ21hdHJpeDNkKCc7XG4gICAgICAgIHMgKz0gbWUuZSgxLDEpLnRvRml4ZWQocCkgKyAnLCcgKyBtZS5lKDEsMikudG9GaXhlZChwKSArICcsJyArIG1lLmUoMSwzKS50b0ZpeGVkKHApICsgJywnICsgbWUuZSgxLDQpLnRvRml4ZWQocCkgKyAnLCc7XG4gICAgICAgIHMgKz0gbWUuZSgyLDEpLnRvRml4ZWQocCkgKyAnLCcgKyBtZS5lKDIsMikudG9GaXhlZChwKSArICcsJyArIG1lLmUoMiwzKS50b0ZpeGVkKHApICsgJywnICsgbWUuZSgyLDQpLnRvRml4ZWQocCkgKyAnLCc7XG4gICAgICAgIHMgKz0gbWUuZSgzLDEpLnRvRml4ZWQocCkgKyAnLCcgKyBtZS5lKDMsMikudG9GaXhlZChwKSArICcsJyArIG1lLmUoMywzKS50b0ZpeGVkKHApICsgJywnICsgbWUuZSgzLDQpLnRvRml4ZWQocCkgKyAnLCc7XG4gICAgICAgIHMgKz0gbWUuZSg0LDEpLnRvRml4ZWQocCkgKyAnLCcgKyBtZS5lKDQsMikudG9GaXhlZChwKSArICcsJyArIG1lLmUoNCwzKS50b0ZpeGVkKHApICsgJywnICsgbWUuZSg0LDQpLnRvRml4ZWQocCk7XG4gICAgICAgIHMgKz0gJyknO1xuXG4gICAgICAgIHJldHVybiBzO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWF0cml4KTtcblxuZXhwb3J0IGRlZmF1bHQgTWF0cml4OyJdLCJzb3VyY2VSb290IjoiIn0=