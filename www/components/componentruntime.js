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
goog.provide("idr.runtime.ComponentRuntime"),goog.require("idr.debug"),idr.runtime.ComponentRuntime=function(){},idr.runtime.ComponentRuntime.prototype.initializeRuntime=function(){},idr.runtime.ComponentRuntime.prototype.render=function(){throw'Function "render" not implemented in component.'},idr.runtime.ComponentRuntime.prototype.view=function(){throw"ComponentRuntime.view() not implemented!"},idr.runtime.ComponentRuntime.prototype.componentAdded=function(){},idr.runtime.ComponentRuntime.prototype.loadCss=function(componentName,cssRelativePath){var relative="../components/";void 0!==window&&"undefined"==typeof idr.storyboard&&(relative="components/");var path=relative+componentName.toLowerCase()+"/"+cssRelativePath.toLowerCase();setTimeout(function(){try{$("head").append($('<link rel="stylesheet" href="'+path+'">'))}catch(error){console.log("error injecting css file "+path)}},0)};