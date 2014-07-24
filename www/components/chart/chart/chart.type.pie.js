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
goog.require("idr.components.BaseChart"),goog.provide("idr.components.PieChart"),idr.components.PieChart=function(viewSelector,showLegend){idr.components.BaseChart.call(this,viewSelector,showLegend,!1)},goog.inherits(idr.components.PieChart,idr.components.BaseChart),idr.components.PieChart.prototype.draw=function(){0!==this._series.length&&(this._chart=c3.generate({bindto:this.ViewSelector,data:{columns:this._series,type:"pie"},legend:{show:this.ShowLegend}}))},idr.components.PieChart.prototype.updateDraw=function(newItem){if(null!==this._series)if(this.isData(newItem)){var serie=this._series[newItem.parentKey];this._chart.load({columns:[serie]})}else this._series[0][0]=this._x,this.draw()},idr.components.PieChart.prototype.showAxisTitle=function(){},idr.components.PieChart.prototype.isData=function(item){return 0!==item.key};