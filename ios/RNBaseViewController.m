//
//  RNBaseViewController.m
//  rndemo
//
//  Created by 耿彭彭 on 15/03/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "RNBaseViewController.h"
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import "WebViewController.h"

@interface RNBaseViewController ()
@property (nonatomic, strong) NSDictionary *props;
@end

@implementation RNBaseViewController
- (instancetype)initWithProps:(NSDictionary *)props{
  self = [super init];
  if (self) {
    self.props = [NSDictionary dictionaryWithDictionary:props];
  }
  return self;
}
- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
  self.title = @"rn VC";
  self.edgesForExtendedLayout = UIRectEdgeNone;
  
  //@"rndemo"
  
  NSURL *jsCodeLocation;
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:self.props[@"moduleName"]
                                               initialProperties:nil
                                                   launchOptions:nil];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  self.view = rootView;
  
  
  [self initNotification];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


- (void)initNotification{
  [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(gotoWebVC:) name:@"Notification_gotoWebVC" object:nil];
}


#pragma mark -
- (void)gotoWebVC:(NSNotification *)notif{
  NSObject *obj = notif.object;
  if ([obj isKindOfClass:[NSString class]]) {
    dispatch_async(dispatch_get_main_queue(), ^{
      WebViewController *web = [[WebViewController alloc] init];
      web.url = (NSString *)obj;
      [self.navigationController pushViewController:web animated:YES];
    });
  }
}

@end
