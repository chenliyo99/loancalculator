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
goog.provide("idr.components.SingleContainerBase"),goog.require("idr.components.ComponentBase"),goog.require("idr.components.ComponentGroup"),goog.require("idr.debug"),idr.components.SingleContainerBase=function(instanceId,data,parent){idr.components.ComponentBase.call(this,instanceId,data,parent),(void 0===data||null===data)&&(data={padding:"0px",height:""}),this._padding=data.padding,this._height=data.height,this.Binder.bind(this,"padding")},goog.inherits(idr.components.SingleContainerBase,idr.components.ComponentBase),goog.mixin(idr.components.SingleContainerBase.prototype,idr.components.ComponentGroup.prototype),idr.components.SingleContainerBase.prototype.getTypeName=function(){return"SingleContainer"},idr.components.SingleContainerBase.prototype.rawObject=function(){var rawObject=idr.components.ComponentBase.prototype.rawObject.call(this);return rawObject.padding=this.padding(),rawObject.height=this.height(),rawObject},idr.components.SingleContainerBase.prototype.componentDeleted=function(){this.Binder.unbind(this,"padding"),idr.components.ComponentBase.prototype.componentDeleted.call(this)},idr.components.SingleContainerBase.prototype.padding=function(){return this._padding},idr.components.SingleContainerBase.prototype.setPadding=function(newPadding){this._padding=newPadding,this.triggerPropertyChanged("padding")},idr.components.SingleContainerBase.prototype.height=function(){return this._height},idr.components.SingleContainerBase.prototype.setHeight=function(newHeight){this._height=newHeight,this.triggerPropertyChanged("height")};