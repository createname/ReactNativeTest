//
//  RNTMapManager.m
//  react_navigation_demo
//
//  Created by wzy on 2019/10/16.
//  Copyright © 2019 Facebook. All rights reserved.
//




#import "RNTMapManager.h"
#import "RCTConvert+Mapkit.h"
#import <MapKit/MapKit.h>
#import <React/RCTConvert.h>
#import <CoreLocation/CoreLocation.h>
#import <React/RCTConvert+CoreLocation.h>

@implementation RNTMapManager
RCT_EXPORT_MODULE(RNTMap)
RCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL)

RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, MKMapView){
  [view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];
}

-(UIView *)view{
  return [MKMapView new];
}

@end
