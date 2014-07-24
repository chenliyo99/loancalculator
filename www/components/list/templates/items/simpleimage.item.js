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
goog.provide("idr.components.SimpleImageItem"),goog.require("idr.components.ItemBase"),goog.require("idr.components.ImageField"),idr.components.SimpleImageItem=function(id){idr.components.ItemBase.call(this,id),this.addField("image",new idr.components.ImageField(""))},goog.inherits(idr.components.SimpleImageItem,idr.components.ItemBase),Object.defineProperty(idr.components.SimpleImageItem.prototype,"Src",{get:function(){return this._fields.image.Src},set:function(src){this._fields.image.Src=src}}),idr.components.SimpleImageItem.prototype.clone=function(){var simpleImageItem=new idr.components.SimpleImageItem("CLONE");return simpleImageItem._propertyMapping=this._propertyMapping,simpleImageItem},idr.components.SimpleImageItem.prototype.setImage=function(value){this._fields.image.Src=value},idr.components.SimpleImageItem.prototype.notifyUpdate=function(){this._fields.image.updateProperty()},idr.components.SimpleImageItem.prototype.view=function(){return null===this._view&&(this._view=$('<div class="idr-item">').attr("id",this._id),this._view.append(this._fields.image.view())),this._view};