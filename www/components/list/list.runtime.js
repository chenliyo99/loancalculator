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
goog.provide("idr.runtime.List"),goog.require("idr.runtime.ComponentRuntime"),goog.require("idr.components.ListBase"),idr.runtime.List=function(id,data,parent){idr.components.ListBase.call(this,id,data,parent),this.initializeRuntime(data),this.loadCss("list","list.runtime.css"),this._view=null,this._listSearchMarkup=null,this._listContentMarkup=null,this._listMarkupReady=!1,this.addPropertyChangedHandler("listData",function(){(null===this.listData()||""===this.listData().trim())&&this.setUpNeedsConfigurationMarkup()}),this.addPropertyChangedHandler("listDataRange",function(){this.setUpListViewIfNeeded(),this.updateListDataRange(this.listDataRange())}),this.addPropertyChangedHandler("itemTemplate",function(){this.setTemplateToCore(this.itemTemplate())}),this.addPropertyChangedHandler("padding",function(){this._listContentMarkup.removeClass(function(index,css){return(css.match(/\bidr-list-padding-\S+/g)||[]).join(" ")}),this._listContentMarkup.addClass(this.padding())}),this.addPropertyChangedHandler("multiColumn",function(){var isMultiColumn=this.multiColumn(),singleCol="idr-list-col",multiCol="idr-list",styleToAdd=isMultiColumn?multiCol:singleCol,styleToRemove=isMultiColumn?singleCol:multiCol,result=this._listContentMarkup.removeClass(styleToRemove);result&&this._listContentMarkup.addClass(styleToAdd)}),this.addPropertyChangedHandler("fontColor",this.applyFontColor),this.addPropertyChangedHandler("fontFamily",function(){this._listContentMarkup.removeClass(function(index,css){return(css.match(/\bidr-content-font-family-\S+/g)||[]).join(" ")}),this._listContentMarkup.addClass(this.fontFamily())}),this.addPropertyChangedHandler("textAlignment",function(){this._listContentMarkup.removeClass(function(index,css){return(css.match(/\bidr-align-\S+/g)||[]).join(" ")}),this._listContentMarkup.addClass(this.textAlignment())}),this.addPropertyChangedHandler("searchEnabled",function(){this.onChangeSearchEnabled()}),this.addPropertyChangedHandler("height",function(){this.Parent.updateChildComponentHeight(this,this.height())})},goog.inherits(idr.runtime.List,idr.components.ListBase),goog.mixin(idr.runtime.List.prototype,idr.runtime.ComponentRuntime.prototype),idr.runtime.List.prototype.applyFontColor=function(){this._listContentMarkup.css("color","#"+this.fontColor())},idr.runtime.List.prototype.onItemsChanged=function(){this._listContentMarkup.empty();for(var items=this._listCore.items(),len=items.length,i=0;len>i;i++){var itemMarkup=items[i].view();items[i].isEmpty()?itemMarkup.hide():itemMarkup.show(),this._listContentMarkup.append(itemMarkup)}},idr.runtime.List.prototype.onItemAdded=function(item){null!==item&&this._listContentMarkup.append(item.view())},idr.runtime.List.prototype.onItemChanged=function(item){if(null!==item){var itemMarkup=this._listContentMarkup.find("#"+item.Id);item.isEmpty()?itemMarkup.hide():itemMarkup.show()}},idr.runtime.List.prototype.render=function(){null===this._view&&(this._view=$('<div class="idr-list-container"></div>'),this.needsConfiguration()?this._view.append(this.getComponentNeedsConfigurationMarkup()):(this.setUpListViewIfNeeded(),this.applyFontColor(),this._listCore.setItems(this.listDataRange())))},idr.runtime.List.prototype.view=function(){return null===this._view&&this.render(),this._view},idr.runtime.List.prototype.setUpListViewIfNeeded=function(){if(this._listMarkupReady===!1){this._listMarkupReady=!0;var that=this;this._view.empty(),this._listSearchMarkup=$('<input type="search" placeholder="Search">'),this._listContentMarkup=$('<ul class="idr-list list"></div>'),this._view.append(this._listSearchMarkup),this._view.append(this._listContentMarkup),this._listContentMarkup.addClass(this.padding()),this._listContentMarkup.addClass(this.textAlignment()),this.onChangeSearchEnabled(),this._listContentMarkup.on("click",".idr-item",function(){var id=$(this).attr("id");that.itemSelected(id)}),this._listSearchMarkup.on("input",function(){that.filter($(this).val())})}},idr.runtime.List.prototype.setUpNeedsConfigurationMarkup=function(){this._listMarkupReady=!1,this._view.empty(),this._view.append(this.getComponentNeedsConfigurationMarkup())},idr.runtime.List.prototype.getComponentNeedsConfigurationMarkup=function(){return $('<div class="idr-editor-list-notconfig"></div>')},idr.runtime.List.prototype.componentDeleted=function(){this._view.remove(),idr.components.ListBase.prototype.componentDeleted.call(this)},idr.runtime.List.prototype.onChildrenAdded=function(child){var childMarkup=child.view();this._contentDiv.append(childMarkup)},idr.runtime.List.prototype.onChildrenRemoved=function(){},idr.runtime.List.prototype.updateListData=function(value){this._storyboard.componentPropertyUpdated(this,"listData",value,this.listData()),this.Binder.setProperty(this,"listData",value)},idr.runtime.List.prototype.updateListDataRange=function(data){data instanceof Array?this._listCore.setItems(data):this._listCore.addOrUpdate(data)},idr.runtime.List.prototype.changeItemTemplate=function(){this.setTemplateToCore(this.itemTemplate()),this._listCore.clear(),null!==this._listContentMarkup&&this._listContentMarkup.empty()},idr.runtime.List.prototype.itemSelected=function(itemId){var id=parseInt(itemId,10),selectionRange=this.dataSelectionRange();if(""!==selectionRange&&!isNaN(itemId)){var copyOnlyValues=this.copyValues();this.Binder.copySelectedItem("default",id,this.listData(),selectionRange,copyOnlyValues)}this.fireEvent("ONITEMCLICK")},idr.runtime.List.prototype.onChangeSearchEnabled=function(){null!==this._listSearchMarkup&&(this.searchEnabled()?this._listSearchMarkup.show():(this._listSearchMarkup.hide(),this._listSearchMarkup.val("").trigger("input")))},idr.runtime.List.prototype.filter=function(str){var filterStr=str.toUpperCase(),regex=new RegExp(filterStr);this._listContentMarkup.find("li").each(function(){var currentStr=$("div p",this).text().toUpperCase();regex.test(currentStr)?$(this).show():$(this).hide()})};