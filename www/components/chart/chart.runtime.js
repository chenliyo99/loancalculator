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
goog.provide("idr.runtime.Chart"),goog.require("idr.runtime.ComponentRuntime"),goog.require("idr.components.ChartBase"),idr.runtime.Chart=function(id,data,parent){idr.components.ChartBase.call(this,id,data,parent),this.initializeRuntime(data),this.loadCss("chart","chart.runtime.css"),this._view=null,this._chartWrapperView=null,this._chartView=null,this._titleView=null,this._chartViewReady=!1,this.addPropertyChangedHandler("data",function(){(null===this.data()||""===this.data().trim())&&this.setUpNeedsConfigurationMarkup()}),this.addPropertyChangedHandler("dataRange",function(){this.setUpChartMarkupIfNeeded(),this.Chart.addOrUpdateRanges(this.dataRange())}),this.addPropertyChangedHandler("padding",function(){this._view.removeClass(function(index,css){return(css.match(/\bidr-chart-padding-\S+/g)||[]).join(" ")}),this._view.addClass(this.padding()),this.Chart.resize()}),this.addPropertyChangedHandler("title",function(){this._titleView.text(this.title())}),this.addPropertyChangedHandler("enableTitle",function(){this._chartViewReady&&this.showTitle(this.enableTitle())}),this.addPropertyChangedHandler("enableAxisTitle",function(){this.Chart&&this.Chart.showAxisTitle(this.enableAxisTitle())}),this.addPropertyChangedHandler("enableLegendTitle",function(){this.Chart&&this.Chart.showLegendTitle(this.enableLegendTitle())}),this.addPropertyChangedHandler("chartTypeTemplate",function(){this.Chart&&this.Chart.updateTemplate(this.chartTypeTemplate())}),this.addPropertyChangedHandler("resizeContainer",function(){this.Chart.resize()}),this.addPropertyChangedHandler("height",function(){this.Parent.updateChildComponentHeight(this,this.height()),this.Chart.resize()}),parent.addChildComponentLoaded(this)},goog.inherits(idr.runtime.Chart,idr.components.ChartBase),goog.mixin(idr.runtime.Chart.prototype,idr.runtime.ComponentRuntime.prototype),idr.runtime.Chart.prototype.render=function(){if(null===this._view){var chartId="chart-"+this.Id;this._view=$('<div class="idr-chart-container"></div>'),this._titleView=$('<p class="idr-chart-title" data-property="title" data-editor-type="formula">'+this.title()+"</p>"),this._chartWrapperView=$('<div class="idr-chart"></div>'),this._chartView=$('<div class="idr-chart-canvas"></div>'),this._chartView.attr("id",chartId),this.needsConfiguration()?(this._chartView.append(this.getComponentNeedsConfigurationMarkup()),this.showTitle(!1)):this.setUpChartMarkupIfNeeded(),this._chartWrapperView.append(this._chartView),this._view.append(this._titleView),this._view.append(this._chartWrapperView)}},idr.runtime.Chart.prototype.view=function(){return null===this._view&&this.render(),this._view},idr.runtime.Chart.prototype.setUpChartMarkupIfNeeded=function(){this._chartViewReady===!1&&(this._chartViewReady=!0,this._chartView.empty(),this.showTitle(this.enableTitle()),this._view.addClass(this.padding()),this.initializeChart(this._chartView))},idr.runtime.Chart.prototype.setUpNeedsConfigurationMarkup=function(){this._chartViewReady=!1,this.showTitle(!1),this._chartView.empty(),this._chartView.append(this.getComponentNeedsConfigurationMarkup())},idr.runtime.Chart.prototype.getComponentNeedsConfigurationMarkup=function(){return $('<div class="idr-chart-notconfig"></div>')},idr.runtime.Chart.prototype.showTitle=function(show){var display=show?"block":"none";this._titleView.css("display",display)},idr.runtime.Chart.prototype.parentComponentLoaded=function(){null!==this.Chart&&this.resize()},idr.runtime.Chart.prototype.componentAdded=function(){null!==this.Chart&&this.data()&&this.dataRange()&&this.Chart.addOrUpdateRanges(this.dataRange()),null!==this.Chart&&this.resize()},idr.runtime.Chart.prototype.resize=function(){var that=this,time=parseInt($.ui.transitionTime)+100;setTimeout(function(){that.Chart.resize()},time)};