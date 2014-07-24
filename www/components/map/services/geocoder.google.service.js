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
goog.require("idr.components.GeocoderService"),goog.provide("idr.components.GoogleGeocoderService"),idr.components.GoogleGeocoderService=function(){this._httpRequest=new XMLHttpRequest},idr.components.GoogleGeocoderService.URL="http://maps.googleapis.com/maps/api/geocode/json?address=",idr.components.GoogleGeocoderService.prototype.locationForAddress=function(id,address,success,error){var that=this,requestUrl=idr.components.GoogleGeocoderService.URL+encodeURIComponent(address);this._httpRequest=new XMLHttpRequest,this._httpRequest.open("GET",requestUrl,!0),this._httpRequest.onreadystatechange=function(){that.parseResponse(this,id,success,error)},this._httpRequest.send(null)},idr.components.GoogleGeocoderService.prototype.parseResponse=function(httpResponse,id,success,error){if(4===httpResponse.readyState)if(200===httpResponse.status)try{var data=JSON.parse(httpResponse.responseText),locations=this.getLocations(data);success(id,locations)}catch(ex){console.log("Error: "+ex),error&&error()}else console.log("Geocode was not successful"),error&&error()},idr.components.GoogleGeocoderService.prototype.getLocations=function(data){for(var results=data.results,locations=[],i=0,len=results.length;len>i;i++){var location=results[i].geometry.location;locations.push({lat:location.lat,lng:location.lng})}return locations};