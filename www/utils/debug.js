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
goog.provide("idr.debug"),idr.debug={},idr.debug.mocha=!1,Object.defineProperty(idr.debug,"DEBUG",{get:function(){return goog.DEBUG}}),idr.debug.log=function(message){goog.DEBUG&&(void 0===window?console.log(message):window.console.log(message))},idr.debug.assert=function(condition,message){goog.DEBUG&&window&&window.console&&(void 0===window?console.assert(condition,message):window.console.assert(condition,message))},idr.debug.assertRequireParameter=function(actualArgument,parameterName){goog.DEBUG&&idr.debug.assert(void 0!==actualArgument&&null!==actualArgument,"Parameter '"+parameterName+"' is required to be not null!")};