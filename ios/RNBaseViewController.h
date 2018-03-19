//
//  RNBaseViewController.h
//  rndemo
//
//  Created by 耿彭彭 on 15/03/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>

//moduleName
static NSString * const kRN_MODULE_NAME = @"moduleName";

//title
static NSString * const kRN_TITLE = @"title";


@interface RNBaseViewController : UIViewController

- (instancetype)initWithProps:(NSDictionary *)props;

@end


