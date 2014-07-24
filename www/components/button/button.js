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
goog.provide("idr.components.Button"),goog.require("idr.components.Component"),goog.require("idr.storyboard.ButtonEditor"),idr.components.Button=function(){idr.components.Component.call(this,"Button","BUTTON")},goog.inherits(idr.components.Button,idr.components.Component),idr.components.Button.prototype.initialize=function(){this.loadCss("button.editor.css");var storyboardDictionary=idr.core.Editor.dictionary.storyboard;this.addMenuEntry("Button.SIMPLE.COMMON",storyboardDictionary.menuEntrySimpleButton,"button-simple-icon","COMMON"),this.addMenuEntry("Button.SIMPLE",storyboardDictionary.menuEntrySimpleButton,"button-simple-icon"),this.addMenuEntry("Button.LINK",storyboardDictionary.menuEntryLinkButton,"button-link-icon"),this.addMenuEntry("Button.ICON",storyboardDictionary.menuEntryIconButton,"button-icon-icon"),this.addMenuEntry("Button.IMAGE",storyboardDictionary.menuEntryImageButton,"button-image-icon")},idr.components.Button.prototype.isMenuEntryAllowedInContext=function(menuKey,parentComponentName){var allows="Program"!==parentComponentName;return allows},idr.components.Button.prototype.newInstanceFromMenuKey=function(menuKey,instanceId,storyboardController,parent){if("Button.SIMPLE"===menuKey||"Button.SIMPLE.COMMON"===menuKey)return new idr.storyboard.ButtonEditor(instanceId,null,storyboardController,parent,idr.components.ButtonBase.BUTTON_TYPE.simple);if("Button.LINK"===menuKey)return new idr.storyboard.ButtonEditor(instanceId,null,storyboardController,parent,idr.components.ButtonBase.BUTTON_TYPE.link);if("Button.ICON"===menuKey)return new idr.storyboard.ButtonEditor(instanceId,null,storyboardController,parent,idr.components.ButtonBase.BUTTON_TYPE.icon);if("Button.IMAGE"===menuKey){var type=idr.components.ButtonBase.BUTTON_TYPE.image;return new idr.storyboard.ButtonEditor(instanceId,null,storyboardController,parent,type)}};