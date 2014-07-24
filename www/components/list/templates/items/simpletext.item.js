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
goog.provide("idr.components.SimpleTextItem"),goog.require("idr.components.ItemBase"),goog.require("idr.components.TextField"),idr.components.SimpleTextItem=function(id){idr.components.ItemBase.call(this,id),this.addField("title",new idr.components.TextField(""))},goog.inherits(idr.components.SimpleTextItem,idr.components.ItemBase),Object.defineProperty(idr.components.SimpleTextItem.prototype,"Text",{set:function(text){this._fields.title.Text=text}}),idr.components.SimpleTextItem.prototype.view=function(){if(null===this._view){this._view=$('<li class="idr-item simple"></li>').attr("id",this._id);var titleMarkup=$('<div class="idr-item-text title"></div>');titleMarkup.append(this._fields.title.view()),this._view.append(titleMarkup)}return this._view},idr.components.SimpleTextItem.prototype.setTitle=function(value){this._fields.title.Text=value},idr.components.SimpleTextItem.prototype.clone=function(){var simpleTextItem=new idr.components.SimpleTextItem("CLONE");return simpleTextItem._propertyMapping=this._propertyMapping,simpleTextItem},idr.components.SimpleTextItem.prototype.notifyUpdate=function(){this._fields.title.updateProperty()},idr.components.SimpleTextItem.prototype.isEmpty=function(){return""===this._fields.title.Text};