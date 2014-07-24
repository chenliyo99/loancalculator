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
goog.provide("idr.components.RssFeedBase"),goog.require("idr.components.ComponentBase"),goog.require("idr.debug"),idr.components.RssFeedBase=function(instanceId,data,parent){idr.components.ComponentBase.call(this,instanceId,data,parent),(void 0===data||null===data)&&(data={url:"",targetRange:"",autoLoad:!0}),this._url=data.url,this._targetRange=data.targetRange,this._autoLoad=data.autoLoad,this._status="",this.Binder.bind(this,"url"),this.Binder.bind(this,"targetRange")},goog.inherits(idr.components.RssFeedBase,idr.components.ComponentBase),idr.components.RssFeedBase.prototype.getTypeName=function(){return"RssFeed"},idr.components.RssFeedBase.prototype.rawObject=function(){var rawObject=idr.components.ComponentBase.prototype.rawObject.call(this);return rawObject.url=this.url(),rawObject.targetRange=this.targetRange(),rawObject.autoLoad=this.autoLoad(),rawObject},idr.components.RssFeedBase.prototype.componentDeleted=function(){this.Binder.unbind(this,"url"),this.Binder.unbind(this,"targetRange"),idr.components.ComponentBase.prototype.componentDeleted.call(this)},idr.components.RssFeedBase.prototype.url=function(){return this._url},idr.components.RssFeedBase.prototype.setUrl=function(value){this._url=value,this.triggerPropertyChanged("url")},idr.components.RssFeedBase.prototype.targetRange=function(){return this._targetRange},idr.components.RssFeedBase.prototype.setTargetRange=function(value){this._targetRange=value,this.triggerPropertyChanged("targetRange")},idr.components.RssFeedBase.prototype.autoLoad=function(){return this._autoLoad},idr.components.RssFeedBase.prototype.setAutoLoad=function(value){this._autoLoad=value,this.triggerPropertyChanged("autoLoad")},idr.components.RssFeedBase.prototype.status=function(){return this._status},idr.components.RssFeedBase.prototype.setStatus=function(value){this._status=value,this.triggerPropertyChanged("status")};