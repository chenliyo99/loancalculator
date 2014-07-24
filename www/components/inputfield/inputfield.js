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
goog.provide("idr.components.InputField"),goog.require("idr.components.Component"),goog.require("idr.storyboard.InputFieldEditor"),idr.components.InputField=function(){idr.components.Component.call(this,"InputField","COMMON")},goog.inherits(idr.components.InputField,idr.components.Component),idr.components.InputField.prototype.initialize=function(){this.loadCss("inputfield.editor.css");var storyboardDictionary=idr.core.Editor.dictionary.storyboard;this.addMenuEntry("InputField.BLANK",storyboardDictionary.menuEntryInputFieldItem,"inputfield-icon")},idr.components.InputField.prototype.isMenuEntryAllowedInContext=function(menuKey,parentComponentName){var isParentAllowed="Program"!==parentComponentName&&"Menu"!==parentComponentName;return isParentAllowed&&"InputField.BLANK"===menuKey},idr.components.InputField.prototype.newInstanceFromMenuKey=function(menuKey,instanceId,storyboardController,parent){return"InputField.BLANK"===menuKey?new idr.storyboard.InputFieldEditor(instanceId,null,storyboardController,parent):void 0};