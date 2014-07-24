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
goog.provide("idr.runtime.SingleContainer"),goog.require("idr.runtime.ComponentRuntime"),goog.require("idr.components.SingleContainerBase"),idr.runtime.SingleContainer=function(id,data,parent){idr.components.SingleContainerBase.call(this,id,data,parent),this.initializeRuntime(data),this.loadCss("singlecontainer","singlecontainer.runtime.css"),this._view=null,this.addPropertyChangedHandler("padding",function(){$(this._view).css("padding",this.padding())}),this.addPropertyChangedHandler("height",function(){this.Parent.updateChildComponentHeight(this,this.height())}),parent.addChildComponentLoaded(this)},goog.inherits(idr.runtime.SingleContainer,idr.components.SingleContainerBase),goog.mixin(idr.runtime.SingleContainer.prototype,idr.runtime.ComponentRuntime.prototype),idr.runtime.SingleContainer.prototype.view=function(){return null===this._view&&this.render(),this._view},idr.runtime.SingleContainer.prototype.render=function(){null===this._view&&(this._view=$('<div class="idr-layout-container"><div class="idr-container-single-item"></div></div>'),this._view.css("padding",this.padding()))},idr.runtime.SingleContainer.prototype.componentDeleted=function(){this._view.remove(),idr.components.SingleContainerBase.prototype.componentDeleted.call(this)},idr.runtime.SingleContainer.prototype.onChildrenAdded=function(child){var childMarkup=child.view(),singleChildrenDecorator=$('<div class="idr-single-item"></div>'),childrenDecorated=singleChildrenDecorator.append(childMarkup);this._view.find(".idr-container-single-item").append(childrenDecorated)},idr.runtime.SingleContainer.prototype.onChildrenRemoved=function(){var childrenDecorated=this._view.find(".idr-single-item");childrenDecorated.remove()},idr.runtime.SingleContainer.prototype.parentComponentLoaded=function(){this.notifyComponentLoaded()};