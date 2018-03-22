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

#import "KSPhotoBrowser.h"



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
  self.title = self.props[kRN_TITLE];
  self.edgesForExtendedLayout = UIRectEdgeNone;
  
  //@"rndemo"
  
  NSURL *jsCodeLocation;
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:self.props[kRN_MODULE_NAME]
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
  
  [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(showImages:) name:@"Notification_showImage" object:nil];
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
- (void)showImages:(NSNotification *)notif{
  NSObject *url = notif.object;
  if ([url isKindOfClass:[NSString class]]) {
    dispatch_async(dispatch_get_main_queue(), ^{
      NSMutableArray *items = [[NSMutableArray alloc] init];
//      UIImageView *imageView = [[UIImageView alloc] initWithFrame:CGRectMake(0, 0, self.view.frame.size.width, self.view.frame.size.height)];
      KSPhotoItem *item = [KSPhotoItem itemWithSourceView:nil imageUrl:[NSURL URLWithString:url]];
      [items addObject:item];
      
      KSPhotoBrowser *browser = [KSPhotoBrowser browserWithPhotoItems:items selectedIndex:0];
      [browser showFromViewController:self];
    });
  }
}
@end
