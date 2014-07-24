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
goog.provide("idr.components.FieldBase"),goog.require("idr.debug"),idr.components.FieldBase=function(){this._name=null,this._properties={},this._view=null},Object.defineProperty(idr.components.FieldBase.prototype,"Name",{get:function(){return this._name},set:function(name){this._name=name}}),idr.components.FieldBase.prototype.getProperty=function(property){return this._properties[property]},idr.components.FieldBase.prototype.setProperty=function(property,value){this._properties[property]=value},idr.components.FieldBase.prototype.view=function(){return null===this._view&&this.initializeView(),this._view},idr.components.FieldBase.prototype.initializeView=function(){throw"Initialize view is not implemented by the subclass"};