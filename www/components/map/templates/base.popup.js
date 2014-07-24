/**
 * @license Copyright 2013 - 2014 Intel Corporation All Rights Reserved.
 *
 * The source code, information and material ("Material") contained herein is owned by Intel Corporation or its
 * suppliers or licensors, and title to such Material remains with Intel Corporation or its suppliers or
 * licensors. The Material contains proprietary information of Intel or its suppliers and licensors. The
 * Material is protected by worldwide copyright laws and treaty provisions. No part of the Material may be used,
 * copied, reproduced, modified, published, uploaded, posted, transmitted, distributed or disclosed in any way
 * without Intel's prior express written permission. No license under any patent, copyright or other intellectual
 * property rights in the Material is granted to or conferred upon you, either expressly, by implication,
 * inducement, estoppel or otherwise. Any license under such intellectual property rights must be express and
 * approved by Intel in writing.
 *
 * Unless otherwise agreed by Intel in writing, you may not remove or alter this notice or any other notice
 * embedded in Materials by Intel or Intel's suppliers or licensors in any way.
 */
goog.provide("idr.components.BaseMarkerPopup"),idr.components.BaseMarkerPopup=function(mapping){this._mapping=mapping||null,this._view=null},idr.components.BaseMarkerPopup.prototype.metada=function(){},idr.components.BaseMarkerPopup.prototype.renderPopup=function(){},idr.components.BaseMarkerPopup.prototype.setData=function(data){this.ensureMapping(data)},idr.components.BaseMarkerPopup.prototype.ensureMapping=function(data){if(null===this._mapping){this._mapping={};var metadata=this.metada(),offset=2===Object.keys(data).length?1:0;for(var key in metadata){var offsetKey=parseInt(key,10)-offset,value=data[offsetKey];if(void 0!==value){var mapKey=metadata[key];this._mapping[mapKey]=offsetKey}}}},idr.components.BaseMarkerPopup.prototype.view=function(){return this._view=$('<div class="idr-map-popup"></div>'),this.renderPopup(this._view),this._view};