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
goog.provide("idr.components.ItemBase"),goog.require("idr.debug"),idr.components.ItemBase=function(id){this._id=id,this._name=null,this._fields={},this._fieldsMap={},this._view=null,this._propertyMapping={}},Object.defineProperty(idr.components.ItemBase.prototype,"Id",{get:function(){return this._id},set:function(id){this._id=id}}),Object.defineProperty(idr.components.ItemBase.prototype,"Name",{get:function(){return this._name},set:function(name){this._name=name}}),idr.components.ItemBase.prototype.setMappingConfig=function(mapping){this._propertyMapping={};for(var i=0;i<mapping.length;i++)this._propertyMapping[mapping[i].mapping]=mapping[i].prop},idr.components.ItemBase.prototype.clone=function(){},idr.components.ItemBase.prototype.setData=function(data){this.Id=data.id;var prop=this._propertyMapping[data.field];if(prop){var fnSetter=this["set"+prop[0].toUpperCase()+prop.substring(1)];"function"==typeof fnSetter&&fnSetter.call(this,data.value)}},idr.components.ItemBase.prototype.updateData=function(){},idr.components.ItemBase.prototype.addField=function(name,field){this._fields[name]=field},idr.components.ItemBase.prototype.getField=function(name){return this._fields[name]},idr.components.ItemBase.prototype.getFieldByKey=function(key){return this._fieldsMap[key]},idr.components.ItemBase.prototype.view=function(){},idr.components.ItemBase.prototype.clickAction=function(){return!1},idr.components.ItemBase.prototype.isEmpty=function(){return!1};