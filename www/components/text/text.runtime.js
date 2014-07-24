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
goog.provide("idr.runtime.Text"),goog.require("idr.runtime.ComponentRuntime"),goog.require("idr.components.TextBase"),idr.runtime.Text=function(id,data,parent){idr.components.TextBase.call(this,id,data,parent),this.initializeRuntime(data),this.loadCss("text","text.runtime.css"),this._view=null;var that=this;this.addPropertyChangedHandler("htmlText",function(){if(that._view){for(var myNode=that._view[0];myNode.firstChild;)myNode.removeChild(myNode.firstChild);myNode.appendChild($("<span>"+that.htmlText()+"</span>")[0]),that.fixAnchorTag()}}),this.addPropertyChangedHandler("padding",function(){null!==this._view&&(this._view.removeClass(function(index,css){return(css.match(/\bidr-text-padding-\S+/g)||[]).join(" ")}),this._view.addClass(this.padding()))}),this.addPropertyChangedHandler("backgroundColor",this.applyBackgroundColor),this.addPropertyChangedHandler("fontSize",function(){this._view.css("font-size",this.sizeToEms(this.fontSize())+"em")}),this.addPropertyChangedHandler("fontColor",this.applyFontColor),this.addPropertyChangedHandler("fontFamily",this.applyFontFamily),this.addPropertyChangedHandler("textBold",this.applyTextBold),this.addPropertyChangedHandler("textItalic",this.applyTextItalic),this.addPropertyChangedHandler("textUnderline",this.applyTextUnderline),this.addPropertyChangedHandler("textAlignament",this.applyTextAlignment),this.addPropertyChangedHandler("height",function(){this.Parent.updateChildComponentHeight(this,this.height())})},goog.inherits(idr.runtime.Text,idr.components.TextBase),goog.mixin(idr.runtime.Text.prototype,idr.runtime.ComponentRuntime.prototype),idr.runtime.Text.prototype.applyFontColor=function(){null!==this._view&&this.fontColor()&&this._view.css("color","#"+this.fontColor())},idr.runtime.Text.prototype.applyBackgroundColor=function(){null!==this._view&&this.backgroundColor()&&this._view.css("background-color","#"+this.backgroundColor())},idr.runtime.Text.prototype.applyTextBold=function(){this.textBold()?this._view.addClass("idr-text-bold"):this._view.removeClass("idr-text-bold")},idr.runtime.Text.prototype.applyTextItalic=function(){this.textItalic()?this._view.addClass("idr-text-italic"):this._view.removeClass("idr-text-italic")},idr.runtime.Text.prototype.applyTextUnderline=function(){this.textUnderline()?this._view.addClass("idr-text-underline"):this._view.removeClass("idr-text-underline")},idr.runtime.Text.prototype.applyFontFamily=function(){this._view.css("font-family",this.fontFamily())},idr.runtime.Text.prototype.applyTextAlignment=function(){this._view.css("text-align",this.textAlignament())},idr.runtime.Text.prototype.render=function(){null===this._view&&(this._view=$('<div class="idr-text-container">'+this.htmlText()+"</div>"),this._view.css("font-size",this.sizeToEms(this.fontSize())+"em"),this.applyBackgroundColor(),this.applyFontColor(),this.applyTextBold(),this.applyTextItalic(),this.applyTextUnderline(),this.applyFontFamily(),this.applyTextAlignment(),this._view.addClass(this.padding()));var that=this;this._view.click(function(){that.fireEvent("ONCLICK")})},idr.runtime.Text.prototype.view=function(){return null===this._view&&this.render(),this._view},idr.runtime.Text.prototype.componentDeleted=function(){this._view.remove(),idr.components.TextBase.prototype.componentDeleted.call(this)},idr.runtime.Text.prototype.onChildrenAdded=function(child){var childMarkup=child.view();this._contentDiv.append(childMarkup)},idr.runtime.Text.prototype.onChildrenRemoved=function(){},idr.runtime.Text.prototype.fixAnchorTag=function(){if(this._view)for(var anchors=$(this._view).find("a"),i=0;i<anchors.length;i++)anchors.attr("data-ignore",!0)};