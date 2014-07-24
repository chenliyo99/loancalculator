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
goog.provide("idr.runtime.$TEMPLATE$"),goog.require("idr.runtime.ComponentRuntime"),goog.require("idr.components.$TEMPLATE$Base"),idr.runtime.$TEMPLATE$=function(id,data,parent){idr.components.$TEMPLATE$Base.call(this,id,data,parent),this.initializeRuntime(data),this._view=null},goog.inherits(idr.runtime.$TEMPLATE$,idr.components.$TEMPLATE$Base),goog.mixin(idr.runtime.$TEMPLATE$.prototype,idr.runtime.ComponentRuntime.prototype),idr.runtime.$TEMPLATE$.prototype.show=function(){},idr.runtime.$TEMPLATE$.prototype.render=function(){null===this._view&&(this._view=$("<div>my runtime view</div>"))},idr.runtime.$TEMPLATE$.prototype.view=function(){return null===this._view&&this.render(),this._view},idr.runtime.$TEMPLATE$.prototype.componentDeleted=function(){idr.components.$TEMPLATE$Base.prototype.componentDeleted.call(this)},idr.runtime.$TEMPLATE$.prototype.onChildrenAdded=function(child){var childMarkup=child.view();this._contentDiv.append(childMarkup)},idr.runtime.$TEMPLATE$.prototype.onChildrenRemoved=function(){};