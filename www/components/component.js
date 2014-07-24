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
goog.provide("idr.components.Component"),goog.require("idr.components.ComponentBase"),goog.require("idr.debug"),idr.components.Component=function(name,category){this._name=name,this._category=category,this._menuData=[],this._childDefinitions=[]},idr.components.RELATIVEFOLDER="../components/",idr.components.Component.prototype.addMenuEntry=function(key,title,icon,category){var validate=!0;void 0===category&&(category=this._category);for(var i=0;i<this._menuData.length;i++)key===this._menuData[i].key&&(validate=!1);validate&&this._menuData.push({key:key,title:title,icon:icon,category:category,section:"default"})},idr.components.Component.prototype.isMenuEntryAllowedInContext=function(menuKey,parentComponentName){return"Program"===parentComponentName},Object.defineProperty(idr.components.Component.prototype,"Category",{get:function(){return this._category}}),Object.defineProperty(idr.components.Component.prototype,"Name",{get:function(){return this._name}}),Object.defineProperty(idr.components.Component.prototype,"MenuData",{get:function(){return this._menuData}}),idr.components.Component.prototype.newInstanceFromMenuKey=function(){throw"Function 'newInstanceFromMenuKey' not implemented."},Object.defineProperty(idr.components.Component.prototype,"Binder",{get:function(){return idr.components.Component.DefaultBinder}}),idr.components.Component.DefaultBinder=null,idr.components.Component.prototype.loadCss=function(cssRelativePath){{var componentName=this.Name.toLowerCase();cssRelativePath.toLowerCase()}void 0!==window&&"undefined"==typeof idr.storyboard&&void 0!==window.top.xdk&&(idr.components.RELATIVEFOLDER="components/");var path=idr.components.RELATIVEFOLDER+componentName+"/"+cssRelativePath;idr.debug.mocha!==!0&&setTimeout(function(){try{$("head").append($('<link rel="stylesheet" href="'+path+'">'))}catch(error){console.log("error injecting css file: "+path+"\n Error:"+error)}},0)};