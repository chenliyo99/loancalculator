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
goog.provide("idr.components.TextField"),goog.require("idr.components.FieldBase"),idr.components.TextField=function(text){idr.components.FieldBase.call(this),this._properties.text=text},goog.inherits(idr.components.TextField,idr.components.FieldBase),Object.defineProperty(idr.components.TextField.prototype,"Text",{set:function(text){this._properties.text=text,this.updateProperty()},get:function(){return this._properties.text}}),idr.components.TextField.prototype.initializeView=function(){this._view=$("<p/>"),this._view.text(this._properties.text)},idr.components.TextField.prototype.updateProperty=function(){null!==this._view&&this._view.text(this._properties.text)};