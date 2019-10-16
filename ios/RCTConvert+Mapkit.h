//
//  RCTConvert+Mapkit.h
//  react_navigation_demo
//
//  Created by wzy on 2019/10/16.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <MapKit/MapKit.h>
#import <React/RCTConvert.h>
#import <CoreLocation/CoreLocation.h>
#import <React/RCTConvert+CoreLocation.h>
NS_ASSUME_NONNULL_BEGIN

@interface RCTConvert (Mapkit)
+ (MKCoordinateSpan)MKCoordinateSpan:(id)json;
+ (MKCoordinateRegion)MKCoordinateRegion:(id)json;
@end

NS_ASSUME_NONNULL_END
