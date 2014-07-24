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
goog.provide("idr.components.MenuItemBase"),goog.require("idr.components.ComponentBase"),goog.require("idr.debug"),idr.components.MenuItemBase=function(instanceId,data,parent){idr.components.ComponentBase.call(this,instanceId,data,parent),(void 0===data||null===data)&&(data={icon:"home",title:"Side Menu Item",backgroundColor:"",fontColor:"",fontSize:"",fontFamily:"",auto:!1,pageId:""}),this._icon=data.icon?data.icon:"home",this._title=data.title?data.title:"Side Menu Item",this._backgroundColor=data.backgroundColor?data.backgroundColor:"",this._fontColor=data.fontColor?data.fontColor:"",this._fontSize=data.fontSize?data.fontSize:"",this._fontFamily=data.fontFamily?data.fontFamily:"",this._auto=void 0!==data.auto?data.auto:!1,this._pageId=void 0!==data.pageId?data.pageId:"",this.Binder.bind(this,"icon"),this.Binder.bind(this,"title"),this.Binder.bind(this,"fontSize"),this.Binder.bind(this,"fontFamily")},goog.inherits(idr.components.MenuItemBase,idr.components.ComponentBase),idr.components.MenuItemBase.prototype.getTypeName=function(){return"MenuItem"},idr.components.MenuItemBase.prototype.rawObject=function(){var rawObject=idr.components.ComponentBase.prototype.rawObject.call(this);return rawObject.icon=this.icon(),rawObject.title=this.title(),rawObject.backgroundColor=this.backgroundColor(),rawObject.fontColor=this.fontColor(),rawObject.fontSize=this.fontSize(),rawObject.fontFamily=this.fontFamily(),rawObject.auto=this.auto(),rawObject.pageId=this.pageId(),rawObject},idr.components.MenuItemBase.prototype.componentDeleted=function(){this.Binder.unbind(this,"icon"),this.Binder.unbind(this,"title"),this.Binder.unbind(this,"fontSize"),this.Binder.unbind(this,"fontFamily"),idr.components.ComponentBase.prototype.componentDeleted.call(this)},idr.components.MenuItemBase.prototype.icon=function(){return this._icon},idr.components.MenuItemBase.prototype.title=function(){return this._title},idr.components.MenuItemBase.prototype.backgroundColor=function(){return this._backgroundColor},idr.components.MenuItemBase.prototype.fontSize=function(){return this._fontSize},idr.components.MenuItemBase.prototype.fontFamily=function(){return this._fontFamily},idr.components.MenuItemBase.prototype.fontColor=function(){return this._fontColor},idr.components.MenuItemBase.prototype.setIcon=function(newIcon){this._icon=newIcon,this.triggerPropertyChanged("icon")},idr.components.MenuItemBase.prototype.setTitle=function(newTitle){this._title=newTitle,this.triggerPropertyChanged("title")},idr.components.MenuItemBase.prototype.setBackgroundColor=function(newColor){this._backgroundColor=newColor,this.triggerPropertyChanged("backgroundColor")},idr.components.MenuItemBase.prototype.setFontColor=function(newColor){this._fontColor=newColor,this.triggerPropertyChanged("fontColor")},idr.components.MenuItemBase.prototype.setFontSize=function(newSize){this._fontSize=newSize,this.triggerPropertyChanged("fontSize")},idr.components.MenuItemBase.prototype.setFontFamily=function(newFamily){this._fontFamily=newFamily,this.triggerPropertyChanged("fontFamily")},idr.components.MenuItemBase.prototype.auto=function(){return this._auto},idr.components.MenuItemBase.prototype.setAuto=function(isAuto){this._auto=isAuto,this.triggerPropertyChanged("auto")},idr.components.MenuItemBase.prototype.pageId=function(){return this._pageId},idr.components.MenuItemBase.prototype.setPageId=function(pageId){this._pageId=pageId,this.triggerPropertyChanged("pageId")};