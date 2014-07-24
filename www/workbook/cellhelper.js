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
goog.provide("idr.workbook.CellHelper"),goog.require("idr.debug"),idr.workbook.CellHelper.ABSOLUTE_REF_DECORATOR="$",idr.workbook.CellHelper.LETTER_REGEX="[a-zA-Z]{1,2}",idr.workbook.CellHelper.NUMBER_REGEX="[0-9]*[0-9]",idr.workbook.CellHelper.DECORATOR_ABSOLUTE_REF_REGEX="\\$?",idr.workbook.CellHelper.CELL_NAME_REGEX=idr.workbook.CellHelper.DECORATOR_ABSOLUTE_REF_REGEX+"("+idr.workbook.CellHelper.LETTER_REGEX+")"+idr.workbook.CellHelper.DECORATOR_ABSOLUTE_REF_REGEX+"("+idr.workbook.CellHelper.NUMBER_REGEX+")",idr.workbook.CellHelper.CELL_NAME_INC_DECORATOR_REGEX="("+idr.workbook.CellHelper.DECORATOR_ABSOLUTE_REF_REGEX+idr.workbook.CellHelper.LETTER_REGEX+")("+idr.workbook.CellHelper.DECORATOR_ABSOLUTE_REF_REGEX+idr.workbook.CellHelper.NUMBER_REGEX+")",idr.workbook.CellHelper.validate=function(cellName){if(void 0!==cellName){var regExpMatch=cellName.match(RegExp("^"+idr.workbook.CellHelper.CELL_NAME_REGEX+"$"));if(null!==regExpMatch)return regExpMatch}return null},idr.workbook.CellHelper.cellNameToRowColumn=function(cellName){cellName=cellName.toUpperCase();var validCellName=idr.workbook.CellHelper.validate(cellName);if(null!==validCellName){var columnLetter=validCellName[1],rowNumber=validCellName[2],columnNumber=columnLetter.charCodeAt(0)-65;return 2===columnLetter.length&&(columnNumber=26*(columnNumber+1)+columnLetter.charCodeAt(1)-65),{row:parseInt(rowNumber,10)-1,column:columnNumber}}return null},idr.workbook.CellHelper.rowColumnToCellName=function(row,column){var columnName="",columnNumber=Math.floor(column/26);return columnName=columnNumber>0?String.fromCharCode(columnNumber-1+65)+String.fromCharCode(column%26+65):String.fromCharCode(column+65),columnName+(row+1)},idr.workbook.CellHelper.removeCellDecorators=function(cellName){return cellName.replace(RegExp(idr.workbook.CellHelper.DECORATOR_ABSOLUTE_REF_REGEX,"g"),"")},idr.workbook.CellHelper.getLetter=function(cellName){var validCell=idr.workbook.CellHelper.validate(cellName);return validCell?validCell[1]:null},idr.workbook.CellHelper.getNumber=function(cellName){var validCell=idr.workbook.CellHelper.validate(cellName);return validCell?validCell[2]:null},idr.workbook.CellHelper.calculateCellName=function(cellName,offsetRowCol){var letter=idr.workbook.CellHelper.getLetter(cellName),number=idr.workbook.CellHelper.getNumber(cellName),newLetter=idr.workbook.CellHelper.sumLetter(letter,offsetRowCol.column),newNumber=idr.workbook.CellHelper.sumNumber(number,offsetRowCol.row);return newLetter&&newNumber?newLetter+newNumber:null},idr.workbook.CellHelper.sumLetter=function(letter,number){var letterName=null;if(void 0===letter||null===letter||void 0===number||null===number)return null;if("string"!=typeof letter||"number"!=typeof number)return null;var LetterNumberSum=number+letter.charCodeAt(0)-65;if(letter[0]===idr.workbook.CellHelper.ABSOLUTE_REF_DECORATOR)return letter;if(LetterNumberSum>=0){var letterNumber=Math.floor(LetterNumberSum/26);letterName=letterNumber>0?String.fromCharCode(letterNumber-1+65)+String.fromCharCode(LetterNumberSum%26+65):String.fromCharCode(LetterNumberSum+65)}return letterName},idr.workbook.CellHelper.sumNumber=function(strNumber,n){if(void 0===strNumber||null===strNumber||void 0===n||null===n)return null;if("string"!=typeof strNumber||"number"!=typeof n)return null;if("string"==typeof strNumber){if(strNumber[0]===idr.workbook.CellHelper.ABSOLUTE_REF_DECORATOR)return strNumber;var number=parseInt(strNumber,10);if(!isNaN(number)){var numberResult=number+n;if(numberResult>0)return numberResult.toString()}}return null};