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
goog.require("idr.components.ProviderGoogle"),goog.require("idr.components.GoogleGeocoderService"),goog.require("idr.components.SimpleMarkerPopup"),goog.require("idr.components.TitleSubtitleMarkerPopup"),goog.require("goog.structs.Map"),goog.provide("idr.components.MapController"),idr.components.MapController=function(mapPlaceholder,provider,geocoderService){this._mapView=mapPlaceholder,this._provider=provider||new idr.components.ProviderGoogle(this),this._geocoderService=geocoderService||new idr.components.GoogleGeocoderService,this._points=new goog.structs.Map,this._pointsLocationMap={},this._popupTemplate=idr.components.MapController.POPUP.title({title:1}),this._addressFieldPosition=0,this._mapLibLoaded=!1,this._onMapReady=null},idr.components.MapController.createTitlePopup=function(mapping){return new idr.components.SimpleMarkerPopup(mapping)},idr.components.MapController.createTitlteSubtitlePopup=function(mapping){return new idr.components.TitleSubtitleMarkerPopup(mapping)},idr.components.MapController.POPUP={title:idr.components.MapController.createTitlePopup,titleSubtitle:idr.components.MapController.createTitlteSubtitlePopup},idr.components.MapController.prototype.initialize=function(readyCallback){this._onMapReady=readyCallback,this._provider.initialize()},idr.components.MapController.prototype.onProviderReady=function(){null!==this._onMapReady&&(this._onMapReady(),this._onMapReady=null)},idr.components.MapController.prototype.setPopupTemplate=function(templateType){var values=templateType.split("-"),name=values[0];this._popupTemplate=idr.components.MapController.POPUP[name]()},idr.components.MapController.prototype.setAddressPosition=function(position){this._addressFieldPosition=position},idr.components.MapController.prototype.updateAddressPositionFromPoints=function(rawPoints){var size=rawPoints[0].length-1;this.setAddressPosition(size)},idr.components.MapController.prototype.addOrUpdatePoints=function(rawPoints){if(rawPoints instanceof Array){var points=this.rawDataToPoints(rawPoints);this.setPoints(points)}else{var point=this.rawDataToPoint(rawPoints);this.addOrUpdate(point)}},idr.components.MapController.prototype.setPoints=function(points){this.deleteAllPoints();for(var i=0,len=points.length;len>i;i++)this.addPoint(points[i])},idr.components.MapController.prototype.rawDataToPoints=function(rawDataArray){for(var items=[],i=0,len=rawDataArray.length;len>i;i++){for(var rawItem=rawDataArray[i],item={key:rawItem[0].item},j=0,rawLen=rawItem.length;rawLen>j;j++){var subRawItem=rawItem[j];item[subRawItem.field]=subRawItem.value}items.push(item)}return items},idr.components.MapController.prototype.rawDataToPoint=function(rawData){var item={key:rawData.item};return item[rawData.field]=rawData.value,item},idr.components.MapController.prototype.addOrUpdate=function(point){null!==point&&void 0!==point&&(this._points.containsKey(point.key)?this.updatePoint(point):this.addPoint(point))},idr.components.MapController.prototype.addPoint=function(point){this._points.set(point.key,point),this.updateAddressIfNeeded(point)},idr.components.MapController.prototype.updatePoint=function(point){var item=this._points.get(point.key);for(var prop in point)item[prop]=point[prop];this.updateAddressIfNeeded(point)},idr.components.MapController.prototype.deletePoint=function(){},idr.components.MapController.prototype.deleteAllPoints=function(){this._points.clear(),this._provider.deleteAllPoints(),this.deleteAllLocations()},idr.components.MapController.prototype.updateAddressIfNeeded=function(point){var hasAddress=point.hasOwnProperty(this._addressFieldPosition);if(hasAddress){var address=point[this._addressFieldPosition];if(""!==address){var that=this;this.getLocationForAddress(point.key,address,function(id,locations){var location=locations[0];that.setLocationForPoint(id,location)})}else this._provider.deletePoint({key:point.key})}},idr.components.MapController.prototype.setLocationForPoint=function(key,location){this._pointsLocationMap[key]=location,this._provider.addOrUpdatePoint({key:key,lat:location.lat,lng:location.lng})},idr.components.MapController.prototype.deleteLocationForPoint=function(key){void 0!==this._pointsLocationMap[key]&&delete this._pointsLocationMap[key]},idr.components.MapController.prototype.deleteAllLocations=function(){this._pointsLocationMap={}},idr.components.MapController.prototype.showUserLocation=function(showLocation){if(showLocation){var that=this;this.getUserLocation(function(location){that._provider.showMyLocation(location)},function(){})}else this._provider.hideMyLocation()},idr.components.MapController.prototype.getUserLocation=function(done,error){navigator.geolocation?navigator.geolocation.getCurrentPosition(function(position){var userLocation={lat:position.coords.latitude,lng:position.coords.longitude};done(userLocation)},function(){error("error getting location")}):error("Browser doesn't support Geolocation")},idr.components.MapController.prototype.getLocationForAddress=function(key,address,success,error){null!==address&&void 0!==address&&""!==address&&this._geocoderService.locationForAddress(key,address,success,error)},idr.components.MapController.prototype.mapView=function(){return this._mapView},idr.components.MapController.prototype.formattedPoint=function(key){var point=this._points.get(key);return this._popupTemplate.setData(point),this._popupTemplate.view()},idr.components.MapController.prototype.notifyResize=function(){this._provider.onResize()},idr.components.MapController.prototype.addOnPointSelectedHandler=function(handler){$(this).on("pointSelected",handler)},idr.components.MapController.prototype.removeOnPointSelectedHandler=function(handler){$(this).off("pointSelected",handler)},idr.components.MapController.prototype.onPointSelected=function(key){var point=this._points.get(key);$(this).trigger("pointSelected",point)},idr.components.MapController.prototype.onMapCreated=function(){},idr.components.MapController.prototype.onMapDestroyed=function(){};