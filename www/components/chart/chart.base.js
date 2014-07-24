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
goog.provide("idr.components.ChartBase"),goog.require("idr.components.ComponentBase"),goog.require("idr.components.ChartEngine"),goog.require("idr.debug"),idr.components.ChartBase=function(instanceId,data,parent){idr.components.ComponentBase.call(this,instanceId,data,parent),(void 0===data||null===data)&&(data={height:"",padding:"idr-chart-padding-none",title:"Title",enableTitle:!1,enableAxisTitle:!0,enableLegendTitle:!0,chartTypeTemplate:"columns",data:null}),this._chartEngine=null,this._height=data.height,this._padding=data.padding,this._title=data.title,this._enableTitle=data.enableTitle,this._enableAxisTitle=data.enableAxisTitle,this._enableLegendTitle=data.enableLegendTitle,this._chartTypeTemplate=data.chartTypeTemplate,this._data=data.data,this._dataRange=null,this.Binder.bind(this,"padding"),this.Binder.bind(this,"title"),this.Binder.bind(this,"chartTypeTemplate"),this.Binder.bind(this,"data","dataRange")},goog.inherits(idr.components.ChartBase,idr.components.ComponentBase),Object.defineProperty(idr.components.ChartBase.prototype,"Chart",{get:function(){return this._chartEngine}}),idr.components.ChartBase.prototype.getTypeName=function(){return"Chart"},idr.components.ChartBase.prototype.rawObject=function(){var rawObject=idr.components.ComponentBase.prototype.rawObject.call(this);return rawObject.height=this.height(),rawObject.padding=this.padding(),rawObject.title=this.title(),rawObject.enableTitle=this.enableTitle(),rawObject.enableAxisTitle=this.enableAxisTitle(),rawObject.enableLegendTitle=this.enableLegendTitle(),rawObject.chartTypeTemplate=this.chartTypeTemplate(),rawObject.data=this.data(),rawObject},idr.components.ChartBase.prototype.componentDeleted=function(){this.Binder.unbind(this,"padding"),this.Binder.unbind(this,"title"),this.Binder.unbind(this,"chartTypeTemplate"),this.Binder.unbind(this,"data"),idr.components.ComponentBase.prototype.componentDeleted.call(this)},idr.components.ChartBase.prototype.padding=function(){return this._padding},idr.components.ChartBase.prototype.setPadding=function(value){this._padding=value,this.triggerPropertyChanged("padding")},idr.components.ChartBase.prototype.height=function(){return this._height},idr.components.ChartBase.prototype.setHeight=function(value){this._height=value,this.triggerPropertyChanged("height")},idr.components.ChartBase.prototype.title=function(){return this._title},idr.components.ChartBase.prototype.setTitle=function(value){this._title=value,this.triggerPropertyChanged("title")},idr.components.ChartBase.prototype.enableTitle=function(){return this._enableTitle},idr.components.ChartBase.prototype.setEnableTitle=function(value){this._enableTitle=this.booleanValueOf(value),this.triggerPropertyChanged("enableTitle")},idr.components.ChartBase.prototype.enableAxisTitle=function(){return this._enableAxisTitle},idr.components.ChartBase.prototype.setEnableAxisTitle=function(value){this._enableAxisTitle=this.booleanValueOf(value),this.triggerPropertyChanged("enableAxisTitle")},idr.components.ChartBase.prototype.enableLegendTitle=function(){return this._enableLegendTitle},idr.components.ChartBase.prototype.setEnableLegendTitle=function(value){this._enableLegendTitle=this.booleanValueOf(value),this.triggerPropertyChanged("enableLegendTitle")},idr.components.ChartBase.prototype.chartTypeTemplate=function(){return this._chartTypeTemplate},idr.components.ChartBase.prototype.setChartTypeTemplate=function(value){this._chartTypeTemplate=value,this.triggerPropertyChanged("chartTypeTemplate")},idr.components.ChartBase.prototype.data=function(){return this._data},idr.components.ChartBase.prototype.setData=function(value){this._data=value,this.triggerPropertyChanged("data")},idr.components.ChartBase.prototype.dataRange=function(){return this._dataRange},idr.components.ChartBase.prototype.setDataRange=function(value){this._dataRange=value,this.triggerPropertyChanged("dataRange")},idr.components.ChartBase.prototype.setContentResize=function(){this.triggerPropertyChanged("resizeContainer")},idr.components.ChartBase.prototype.initializeChart=function(view){null===this._chartEngine&&(this._chartEngine=new idr.components.ChartEngine(this,view,this.chartTypeTemplate(),this.enableLegendTitle(),this.enableAxisTitle()),this._chartEngine.initialize())},idr.components.ChartBase.prototype.needsConfiguration=function(){return null===this._data||""===this._data.trim()||null===this._dataRange||0===this._dataRange.length};