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
goog.provide("idr.components.TemplateFactory"),goog.require("idr.components.BlankItem"),goog.require("idr.components.SimpleTextItem"),goog.require("idr.components.TextSubTextItem"),goog.require("idr.components.SimpleImageItem"),goog.require("idr.components.SimpleImageTextItem"),goog.require("idr.components.SimpleImageTextSubTextItem"),goog.require("goog.structs.Map"),idr.components.TemplateFactory=function(){},idr.components.TemplateFactory.DEFAULT_ID="-1",idr.components.TemplateFactory.DEFAULT_TEMPLATE="BlankItem",idr.components.TemplateFactory.prototype.create=function(templateName,fields){var factory=idr.components.TemplateFactory["create"+templateName],template=null;return template="function"==typeof factory?factory.call(this,fields):idr.components.TemplateFactory["create"+idr.components.TemplateFactory.DEFAULT_TEMPLATE](fields)},idr.components.TemplateFactory.createBlankItem=function(){var blankItem=new idr.components.BlankItem(idr.components.TemplateFactory.DEFAULT_ID);return blankItem},idr.components.TemplateFactory.createSimpleTextItem=function(){var simpleTextItem=new idr.components.SimpleTextItem(idr.components.TemplateFactory.DEFAULT_ID);return simpleTextItem.setMappingConfig([{prop:"title",mapping:0}]),simpleTextItem},idr.components.TemplateFactory.createTextSubTextItem=function(){var textSubTextItem=new idr.components.TextSubTextItem(idr.components.TemplateFactory.DEFAULT_ID);return textSubTextItem.setMappingConfig([{prop:"title",mapping:0},{prop:"subtitle",mapping:1}]),textSubTextItem},idr.components.TemplateFactory.createSimpleImageTextItem=function(){var simpleImageTextItem=new idr.components.SimpleImageTextItem(idr.components.TemplateFactory.DEFAULT_ID);return simpleImageTextItem.setMappingConfig([{prop:"image",mapping:0},{prop:"text",mapping:1}]),simpleImageTextItem},idr.components.TemplateFactory.createSimpleImageTextSubTextItem=function(){var imageTextSubTextItem=new idr.components.SimpleImageTextSubTextItem(idr.components.TemplateFactory.DEFAULT_ID);return imageTextSubTextItem.setMappingConfig([{prop:"image",mapping:0},{prop:"title",mapping:1},{prop:"subtitle",mapping:2}]),imageTextSubTextItem},idr.components.TemplateFactory.createSimpleImageItem=function(){var simpleImageItem=new idr.components.SimpleImageItem(idr.components.TemplateFactory.DEFAULT_ID);return simpleImageItem.setMappingConfig([{prop:"image",mapping:0}]),simpleImageItem},idr.components.TemplateFactory.createAudioItem=function(){var audioItem=new idr.components.AudioItem(idr.components.TemplateFactory.DEFAULT_ID);return audioItem.setMappingConfig([{prop:"audio",mapping:0},{prop:"title",mapping:1},{prop:"image",mapping:2}]),audioItem};