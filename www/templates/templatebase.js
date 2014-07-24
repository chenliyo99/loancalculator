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
goog.provide("idr.templates.TemplateBase"),goog.require("idr.debug"),idr.templates.TemplateBase=function(){this._menuData=[],this._data=void 0},idr.templates.TemplateBase.prototype.addMenuEntry=function(key,title,icon,category){var validate=!0;void 0===category&&(category=this._category);for(var i=0;i<this._menuData.length;i++)key===this._menuData[i].key&&(validate=!1);validate&&this._menuData.push({key:key,title:title,icon:icon,category:category,section:"default"})},Object.defineProperty(idr.templates.TemplateBase.prototype,"MenuData",{get:function(){return this._menuData}}),Object.defineProperty(idr.templates.TemplateBase.prototype,"Data",{get:function(){return this._data},set:function(data){this._data=data}}),idr.templates.TemplateBase.prototype.isMenuEntryAllowedInContext=function(menuKey,parentComponentName){return"Program"===parentComponentName},idr.templates.TemplateBase.prototype.clone=function(){var newTemplate=new idr.templates.TemplateBase;return newTemplate._data=JSON.parse(JSON.stringify(this._data)),newTemplate._menuData=JSON.parse(JSON.stringify(this._menuData)),newTemplate._category=this._category,newTemplate};