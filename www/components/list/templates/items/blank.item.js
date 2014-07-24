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
goog.provide("idr.components.BlankItem"),goog.require("idr.components.ItemBase"),goog.require("idr.components.ImageField"),idr.components.BlankItem=function(id){idr.components.ItemBase.call(this,id)},goog.inherits(idr.components.BlankItem,idr.components.ItemBase),idr.components.BlankItem.prototype.clone=function(){var blankItem=new idr.components.BlankItem("CLONE");return blankItem._propertyMapping=this._propertyMapping,blankItem},idr.components.BlankItem.prototype.view=function(){if(null===this._view){this._view=$('<div class="idr-item">').attr("id",this._id);var imageContainerMarkup=$('<div class="col-4"/>').data("idr-field-field","blank");this._view.append(imageContainerMarkup)}return this._view};