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
goog.require("idr.components.BaseChart"),goog.require("idr.components.ColumnsChart"),goog.require("idr.components.LineChart"),goog.require("idr.components.PieChart"),goog.provide("idr.components.ChartTypeFactory"),idr.components.ChartTypeFactory=function(){},idr.components.ChartTypeFactory.createLineChartTemplate=function(options){return new idr.components.LineChart(options.selector,options.showLegend,options.showAxis)},idr.components.ChartTypeFactory.createColumnsChartTemplate=function(options){return new idr.components.ColumnsChart(options.selector,options.showLegend,options.showAxis)},idr.components.ChartTypeFactory.createPieChartTemplate=function(options){return new idr.components.PieChart(options.selector,options.showLegend)},idr.components.ChartTypeFactory.CHARTS_TEMPLATES={line:idr.components.ChartTypeFactory.createLineChartTemplate,pie:idr.components.ChartTypeFactory.createPieChartTemplate,columns:idr.components.ChartTypeFactory.createColumnsChartTemplate},idr.components.ChartTypeFactory.createTemplate=function(type,options){var fn=idr.components.ChartTypeFactory.CHARTS_TEMPLATES[type];if(fn instanceof Function)return fn.call(this,options);throw'The chart type "'+type+'" does not exists'};