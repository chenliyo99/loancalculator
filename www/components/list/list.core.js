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
goog.provide("idr.components.ListCore"),goog.require("idr.components.ItemBase"),goog.require("goog.structs.Map"),idr.components.ListCore=function(){this._items=new goog.structs.Map,this._itemTemplate=null,this._itemsChangedCallback=null,this._itemAddedCallback=null,this._itemUpdatedCallback=null,this._itemRemovedCallback=null,this._itemSelectedCallback=null},idr.components.ListCore.prototype.items=function(){return this._items.getValues()},idr.components.ListCore.prototype.setItemTemplate=function(template){void 0!==template&&template instanceof idr.components.ItemBase?this._itemTemplate=template:console.log('INVALID TEMPLATE: Item Template must be subclass of "idr.components.ItemBase')},idr.components.ListCore.prototype.setItems=function(dataArray){this._items.clear();for(var i=0,len=dataArray.length;len>i;i++)for(var j=0,len2=dataArray[i].length;len2>j;j++)this.add(dataArray[i][j]);this.notifyItemsChanged()},idr.components.ListCore.prototype.addOrUpdate=function(element){null!==element&&(this._items.containsKey(element.item)?this.update(element):this.add(element))},idr.components.ListCore.prototype.add=function(element){if(null!==element){var templateItem=this._items.get(element.item);(null===templateItem||void 0===templateItem)&&(templateItem=this._itemTemplate.clone()),templateItem.setData({id:element.item,field:element.field,value:element.value}),this._items.set(element.item,templateItem),this.notifyItemAdded(templateItem)}},idr.components.ListCore.prototype.update=function(element){var templateItem=this._items.get(element.item);null!==templateItem&&(templateItem.setData({id:element.item,field:element.field,value:element.value}),this.notifyItemUpdated(templateItem))},idr.components.ListCore.prototype.deleteItem=function(element){var key=element.item;return this.deleteByKey(key)},idr.components.ListCore.prototype.deleteByKey=function(key){var itemDeleted=null;this._items.containsKey(key)&&(itemDeleted=this._items.get(key),this._items.remove(key),this.notifyItemDeleted(itemDeleted))},idr.components.ListCore.prototype.clear=function(){this._items.clear()},idr.components.ListCore.prototype.views=function(){for(var views=[],len=this._items.getCount(),i=0;len>i;i++){var item=this._items[i];views.push(item.view())}return views},idr.components.ListCore.prototype.setItemsChangedCallback=function(callback){callback instanceof Function&&(this._itemsChangedCallback=callback)},idr.components.ListCore.prototype.setItemAddedCallback=function(callback){callback instanceof Function&&(this._itemAddedCallback=callback)},idr.components.ListCore.prototype.setItemUpdatedCallback=function(callback){callback instanceof Function&&(this._itemUpdatedCallback=callback)},idr.components.ListCore.prototype.setItemDeletedCallback=function(callback){callback instanceof Function&&(this._itemDeletedCallback=callback)},idr.components.ListCore.prototype.setItemSelectedCallback=function(callback){callback instanceof Function&&(this._itemSelectedCallback=callback)},idr.components.ListCore.prototype.unsetItemsChangedCallback=function(){this._itemsChangedCallback=null},idr.components.ListCore.prototype.unsetItemAddedCallback=function(){this._itemAddedCallback=null},idr.components.ListCore.prototype.unsetItemUpdatedCallback=function(){this._itemUpdatedCallback=null},idr.components.ListCore.prototype.unsetItemDeletedCallback=function(){this._itemDeletedCallback=null},idr.components.ListCore.prototype.unsetItemSelectedCallback=function(){this._itemSelectedCallback=null},idr.components.ListCore.prototype.notifyItemAdded=function(item){null!==this._itemAddedCallback&&this._itemAddedCallback(item)},idr.components.ListCore.prototype.notifyItemUpdated=function(item){null!==this._itemUpdatedCallback&&this._itemUpdatedCallback(item)},idr.components.ListCore.prototype.notifyItemDeleted=function(item){null!==this._itemDeletedCallback&&this._itemDeletedCallback(item)},idr.components.ListCore.prototype.notifyItemsChanged=function(){null!==this._itemsChangedCallback&&this._itemsChangedCallback()},idr.components.ListCore.prototype.notifyItemSelected=function(){null!==this._itemSelectedCallback&&this._itemSelectedCallback()};