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
goog.provide("idr.components.Map"),goog.require("idr.components.Component"),goog.require("idr.storyboard.MapEditor"),idr.components.Map=function(){idr.components.Component.call(this,"Map","COMMON")},goog.inherits(idr.components.Map,idr.components.Component),idr.components.Map.prototype.initialize=function(){this.loadCss("map.editor.css");var storyboardDictionary=idr.core.Editor.dictionary.storyboard;this.addMenuEntry("Map.BLANK",storyboardDictionary.menuEntryMap,"map-icon")},idr.components.Map.prototype.isMenuEntryAllowedInContext=function(menuKey,parentComponentName){var isParentAllowed="Program"!==parentComponentName&&"Menu"!==parentComponentName;return isParentAllowed&&"Map.BLANK"===menuKey},idr.components.Map.prototype.newInstanceFromMenuKey=function(menuKey,instanceId,storyboardController,parent){return"Map.BLANK"===menuKey?new idr.storyboard.MapEditor(instanceId,null,storyboardController,parent):void 0};