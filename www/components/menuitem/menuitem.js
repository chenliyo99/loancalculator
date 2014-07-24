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
goog.provide("idr.components.MenuItem"),goog.require("idr.components.Component"),goog.require("idr.storyboard.MenuItemEditor"),idr.components.MenuItem=function(){idr.components.Component.call(this,"MenuItem","MENUITEM")},goog.inherits(idr.components.MenuItem,idr.components.Component),idr.components.MenuItem.prototype.initialize=function(){var strings=idr.core.Editor.dictionary.storyboard;this.loadCss("menuitem.editor.css"),this.addMenuEntry("MENUITEM.CONTENT",strings.menuEntryMenuItem,"menu-item-icon")},idr.components.MenuItem.prototype.isMenuEntryAllowedInContext=function(menuKey,parentComponentName){return"Menu"===parentComponentName},idr.components.MenuItem.prototype.newInstanceFromMenuKey=function(menuKey,instanceId,storyboardController,parent){return"MENUITEM.CONTENT"===menuKey?new idr.storyboard.MenuItemEditor(instanceId,null,storyboardController,parent):void 0};