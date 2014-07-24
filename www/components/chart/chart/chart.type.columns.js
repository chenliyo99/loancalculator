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
goog.require("idr.components.BaseChart"),goog.provide("idr.components.ColumnsChart"),idr.components.ColumnsChart=function(chart,showLegend,showAxis){idr.components.BaseChart.call(this,chart,showLegend,showAxis),this._x="__x"},goog.inherits(idr.components.ColumnsChart,idr.components.BaseChart),idr.components.ColumnsChart.prototype.parseData=function(rawData){idr.components.BaseChart.prototype.parseData.call(this,rawData),this._series[0][0]=this._x},idr.components.ColumnsChart.prototype.draw=function(){if(0!==this._series.length){var options={};options.bindto=this.ViewSelector,options.padding={bottom:5},options.data={x:this._x,columns:this._series,type:"bar"},options.bar={width:{ratio:.75}},options.axis={x:{type:"categorized",show:this.ShowAxis},y:{show:this.ShowAxis}},options.legend={show:this.ShowLegend},this._chart=c3.generate(options)}},idr.components.ColumnsChart.prototype.updateDraw=function(newItem){if(null!==this._series)if(this.isData(newItem)){var serie=this._series[newItem.parentKey];this._chart.load({columns:[serie]})}else this._series[0][0]=this._x,this.draw()},idr.components.ColumnsChart.prototype.isData=function(item){return 0!==item.parentKey&&0!==item.key};