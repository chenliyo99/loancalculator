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
goog.provide("idr.core.DefaultBinder"),goog.require("idr.core.Binder"),goog.require("idr.debug"),goog.require("idr.workbook.DefaultRange"),goog.require("idr.components.Component"),goog.require("idr.workbook.Runtime"),idr.core.DefaultBinder=function(workbook){idr.debug.assertRequireParameter(workbook,"workbook"),this._workbook=workbook,this._bindMap={},this._cellsToKey={},this._index=this._workbook.getMaxUserRows();var that=this;this._cellChangedCallback=function(event,worksheetName,cells){for(var length=cells.length,i=0;length>i;i++){var cell=cells[i],key=that._cellsToKey[cell.Name];if(void 0!==key){var cellData=cell.getFormatedValue();if(key instanceof Array)for(var j=0,len=key.length;len>j;j++){var keyRangeItem=key[j];that.updateBinderProperty(keyRangeItem,cellData)}else that.updateBinderProperty(key,cellData)}}},this._workbook.addWorksheetChangedCallback(this._cellChangedCallback)},idr.core.DefaultBinder.prototype.updateBinderProperty=function(key,cellData){var binding=this._bindMap[key],propertyName=binding.prop;propertyName=propertyName.split(":")[0],propertyName=propertyName[0].toUpperCase()+propertyName.substring(1),binding.proprange&&(this.unbindRange(binding.obj,binding.prop),this.bindRange(binding.obj,binding.proprange,binding.prop,cellData));var data=cellData;binding.parent&&(data=this.wrapValue(cellData,binding.cell,binding.range)),binding.obj&&binding.obj["set"+propertyName]instanceof Function&&binding.obj["set"+propertyName](data)},idr.core.DefaultBinder.getKeyFor=function(instance,propertyName){return idr.debug.assertRequireParameter(instance,"instance"),idr.debug.assertRequireParameter(propertyName,"propertyName"),idr.core.DefaultBinder.internalGetKeyFor(instance.Id,propertyName)},idr.core.DefaultBinder.internalGetKeyFor=function(instanceId,propertyName){return instanceId+":"+propertyName.toLowerCase()},idr.core.DefaultBinder.prototype.getFreeStorageCell=function(){return this._index++,"A"+this._index},idr.core.DefaultBinder.prototype.updateCellStorageCounter=function(cellName){var cellNumber=parseInt(cellName.substring(1),10);cellNumber>this._index&&(this._index=cellNumber)},idr.core.DefaultBinder.prototype.bind=function(instance,propertyName,propertyNameRange){var key=idr.core.DefaultBinder.getKeyFor(instance,propertyName),binding=this._bindMap[key];if(void 0!==binding)binding.obj=instance,void 0!==propertyNameRange&&(this.setupExpandedRangeForKey(key,propertyNameRange,instance),this.bindRange(instance,propertyNameRange,propertyName,instance[propertyName]()));else{var storageCellName=this.getFreeStorageCell();this.internalBind(instance,propertyName,storageCellName,propertyNameRange)}},idr.core.DefaultBinder.prototype.setupExpandedRangeForKey=function(propertyNameKey,propertyNameRange,instance){for(var keyStarts=idr.core.DefaultBinder.getKeyFor(instance,propertyNameRange),regex=new RegExp("^"+keyStarts+":"),keys=Object.keys(this._bindMap),i=0,len=keys.length;len>i;i++){var currentKey=keys[i];if(null!==currentKey.match(regex)){var binding=this._bindMap[currentKey];void 0!==binding.obj&&(binding.obj=instance)}}},idr.core.DefaultBinder.prototype.internalBind=function(instance,propertyName,storageCellName,propertyNameRange){var key=idr.core.DefaultBinder.getKeyFor(instance,propertyName);this.internalBindWithData(key,instance,propertyName,storageCellName,propertyNameRange)},idr.core.DefaultBinder.prototype.internalBindWithData=function(key,instance,propertyName,storageCellName,propertyNameRange,storageRangeName,propertyParentName){if(null===propertyParentName||void 0===propertyParentName)this._cellsToKey[storageCellName]=key;else{void 0===this._cellsToKey[storageCellName]&&(this._cellsToKey[storageCellName]=[]);var keyToAddIndex=this._cellsToKey[storageCellName].indexOf(key);-1===keyToAddIndex&&this._cellsToKey[storageCellName].push(key)}this._bindMap[key]={obj:instance,prop:propertyName,cell:storageCellName,set:!1,parent:propertyParentName,proprange:propertyNameRange,range:storageRangeName}},idr.core.DefaultBinder.prototype.bindRange=function(instance,propertyName,propertyParentName,value){var result=[];if(idr.workbook.DefaultRange.validate(value))for(var cells=this._workbook.getCellsByRangeFromWorksheet("default",value,!0),i=0;i<cells.length;i++){var cell=cells[i];if(null!==cell){var wrappedValue=this.wrapValue(cell.Value,cell.Name,value),propertyKey=propertyName+":"+cell.Name;result[wrappedValue.item]||(result[wrappedValue.item]=[]),result[wrappedValue.item].push(wrappedValue),this.internalBindWithData(idr.core.DefaultBinder.getKeyFor(instance,propertyKey),instance,propertyKey,cell.Name,null,value,propertyParentName)}}else result[0]=[this.wrapValue(value,null,null)];propertyName=propertyName[0].toUpperCase()+propertyName.substring(1),instance["set"+propertyName](result)},idr.core.DefaultBinder.prototype.unbind=function(instance,propertyName){var key=idr.core.DefaultBinder.getKeyFor(instance,propertyName);if(void 0!==this._bindMap[key]){var binding=this._bindMap[key];this._cellsToKey[binding.cell]=void 0,this._workbook.getWorksheet("default").unsetCell(binding.cell),binding.proprange&&this.unbindRange(binding.obj,binding.prop)}this._bindMap[key]=void 0},idr.core.DefaultBinder.prototype.unbindRange=function(instance,parentPropertyName){for(var i in this._bindMap){var binding=this._bindMap[i];if(void 0!==binding&&binding.obj&&binding.obj.Id===instance.Id&&binding.parent===parentPropertyName){var cellKey=this._cellsToKey[binding.cell];if(cellKey instanceof Array){var rangePropEntry=instance.Id+":"+binding.prop.toLowerCase(),rangePropIndex=cellKey.indexOf(rangePropEntry);this._cellsToKey[binding.cell].splice(rangePropIndex,1)}else this._cellsToKey[binding.cell]=void 0;this._bindMap[i]=void 0,delete this._bindMap[i]}}},idr.core.DefaultBinder.prototype.setProperty=function(instance,propertyName,formulaTextOrValue){var setterName,formulaText,key=idr.core.DefaultBinder.getKeyFor(instance,propertyName),binding=this._bindMap[key];void 0!==binding?(formulaText=formulaTextOrValue,this._workbook.setCellToWorksheet("default",binding.cell,formulaText),binding.set=!0):(setterName="set"+propertyName[0].toUpperCase()+propertyName.substring(1),instance[setterName]instanceof Function&&instance[setterName](formulaTextOrValue))},idr.core.DefaultBinder.prototype.getFormula=function(instance,propertyName){var key=idr.core.DefaultBinder.getKeyFor(instance,propertyName),binding=this._bindMap[key];if(void 0!==binding){var cell=this._workbook.getCellFromWorksheet("default",binding.cell);return null===cell?instance[propertyName]():cell.FormulaText}return""},idr.core.DefaultBinder.prototype.toRawObject=function(){for(var bindings=[],cellNames=Object.keys(this._cellsToKey),length=cellNames.length,i=0;length>i;i++){var cellName=cellNames[i],key=this._cellsToKey[cellName],bindingObj=null;if(key instanceof Array)for(var j=0,len=key.length;len>j;j++)bindingObj=this.rawBindingObject(key[j],cellName),null!==bindingObj&&bindings.push(bindingObj);else bindingObj=this.rawBindingObject(key,cellName),null!==bindingObj&&bindings.push(bindingObj)}return{data:bindings}},idr.core.DefaultBinder.prototype.rawBindingObject=function(key,cellName){var bindingObj=null,binding=this._bindMap[key];if(void 0!==binding){if(null===binding.obj)return window.console.log("WARNING binding with null obj"),null;bindingObj={id:binding.obj.Id,prop:binding.prop,cell:cellName},binding.proprange&&(bindingObj.proprange=binding.proprange),binding.parent&&binding.range&&(bindingObj.parent=binding.parent,bindingObj.range=binding.range)}return bindingObj},idr.core.DefaultBinder.prototype.fromRawObject=function(rawObject){if(void 0!==rawObject)for(var bindings=rawObject.data,length=bindings.length,i=0;length>i;i++){var binding=bindings[i],id=binding.id,propertyName=binding.prop,mapToCell=binding.cell,propRange=binding.proprange,range=binding.range,parent=binding.parent;this.updateCellStorageCounter(mapToCell);var propertyKey=idr.core.DefaultBinder.internalGetKeyFor(id,propertyName);this.internalBindWithData(propertyKey,null,propertyName,mapToCell,propRange,range,parent)}},idr.core.DefaultBinder.prototype.getWorkbookValue=function(){},idr.core.DefaultBinder.prototype.getWorkbookRawValue=function(){},idr.core.DefaultBinder.prototype.getWorkbookValues=function(){},idr.core.DefaultBinder.prototype.getWorkbookRawValues=function(){},idr.core.DefaultBinder.prototype.setWorkbookValue=function(worksheetName,cellName,value){this._workbook.setCellToWorksheet("default",cellName,value)},idr.core.DefaultBinder.prototype.setWorkbookValues=function(worksheetName,cellRangeName,values){this._workbook.setCellsByRangeToWorksheet("default",cellRangeName,"",values)},idr.core.DefaultBinder.prototype.setInitialData=function(worksheetName,cellRangeName,defaultValue){this._workbook.setCellsByRangeToWorksheet("default",cellRangeName,defaultValue,[])},idr.core.DefaultBinder.prototype.getFreeRange=function(worksheetName,row,col){return this._workbook.getFreeRangeFromWorksheet(worksheetName,row,col)},idr.core.DefaultBinder.prototype.copySelectedItem=function(worksheetName,itemId,originRange,targetRange,copyValuesOnly){var range=new idr.workbook.DefaultRange(originRange);if(range.isValid()){var itemRange=range.getRangeForRow(itemId),copyTypes=idr.workbook.Workbook.COPY_TYPE,copyType=copyValuesOnly?copyTypes.values:copyTypes.functions;this._workbook.setCellsByCopyToWorksheet("default",itemRange,targetRange,copyType)}else this._workbook.setCellsByRangeToWorksheet("default",targetRange,originRange,[])},idr.core.DefaultBinder.prototype.wrapValue=function(value,cellName,rangeName){var result={};if(cellName&&rangeName){var range=new idr.workbook.DefaultRange(rangeName),relativeRowCol=range.getRelativeRowCol(cellName);-1!==relativeRowCol&&(result.item=relativeRowCol.row,result.field=relativeRowCol.column,result.value=value)}else result.item=0,result.field=0,result.value=value;return result},idr.core.DefaultBinder.prototype.setHeaderStyle=function(worksheetName,cellRangeName){var range=new idr.workbook.DefaultRange(cellRangeName);if(range.isValid()){var firstRow=range.getRangeForRow(0),headerRange=new idr.workbook.DefaultRange(firstRow);if(headerRange.isValid()){var firstRowCol=headerRange.getFirstRowCol(),lastRowCol=headerRange.getLastRowCol(),rangeArray=[firstRowCol.row,firstRowCol.column,lastRowCol.row,lastRowCol.column];this._workbook.setCellsFontStyle("default",rangeArray,{formatType:idr.workbook.CellStyle.FontStyle.BOLD})}}},idr.core.DefaultBinder.prototype.bindTemplate=function(data,offset){for(var templateObjects=data.ids,i=0;i<templateObjects.length;i++)for(var componentKey=templateObjects[i],instance=idr.components.FindInstance(componentKey),properties=this.getComponentProperties(instance),j=0;j<properties.length;j++){var propertyCellObj=this.getPropertyCellFromTemplateJson(data,instance,properties[j]),runtime=this._workbook.getRuntime();if(propertyCellObj){var formulaText=runtime.calculateFormulaOrRangeWithOffset(propertyCellObj.FormulaText,offset);this.setProperty(instance,properties[j],formulaText)}}},idr.core.DefaultBinder.prototype.getComponentProperties=function(component){for(var bindMapKeys=Object.keys(this._bindMap),properties=[],i=0;i<bindMapKeys.length;i++){var key=bindMapKeys[i],pattern="("+component.Id+"):(.*)",re=new RegExp(pattern);if(re.test(key)){var property=re.exec(key)[2];properties.push(property)}}return properties},idr.core.DefaultBinder.prototype.getPropertyCellFromTemplateJson=function(templateData,instance,property){var cellName,cell=null;try{for(var workbookData=templateData.workbook.model.worksheets,bindCells=templateData.binder.data,i=0;i<bindCells.length;i++)if(bindCells[i].id===instance.Id&&bindCells[i].prop.toLowerCase()===property){cellName=bindCells[i].cell;break}if(void 0!==cellName){{this._workbook}for(i=0;i<workbookData.length;i++)for(var workbookObject=workbookData[i],cellsArray=(workbookObject.worksheet,workbookObject.cells),j=0;j<cellsArray.length;j++){var cellObject=cellsArray[j];if(cellObject.Name===cellName){cell=cellObject;break}}}}catch(e){console.log("WARNING invalid data when trying get property cell from template in binder")}return cell},idr.core.DefaultBinder.prototype.destroy=function(){this._workbook.removeWorksheetChangedCallback(this._cellChangedCallback)};