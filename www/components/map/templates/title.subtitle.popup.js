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
goog.provide("idr.components.TitleSubtitleMarkerPopup"),goog.require("idr.components.BaseMarkerPopup"),idr.components.TitleSubtitleMarkerPopup=function(mapping){idr.components.BaseMarkerPopup.call(this,mapping),this._title=null,this._subtitle=null},goog.inherits(idr.components.TitleSubtitleMarkerPopup,idr.components.BaseMarkerPopup),idr.components.TitleSubtitleMarkerPopup.prototype.metada=function(){return{1:"title",2:"subtitle"}},idr.components.TitleSubtitleMarkerPopup.prototype.setMapping=function(mapping){this._mapping=mapping},idr.components.TitleSubtitleMarkerPopup.prototype.setData=function(data){idr.components.BaseMarkerPopup.prototype.setData.call(this,data);var subtitle=data[this._mapping.subtitle];this._title=data[this._mapping.title],this._subtitle=void 0!==subtitle?subtitle:""},idr.components.TitleSubtitleMarkerPopup.prototype.renderPopup=function(baseView){var titleMarkup=$('<p class="title">'+this._title+"</p>"),subtitleMarkup=$('<p class="subtitle">'+this._subtitle+"</p>");baseView.append(titleMarkup),baseView.append(subtitleMarkup)};