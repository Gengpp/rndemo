//
//  WebViewController.h
//  rndemo
//
//  Created by 耿彭彭 on 15/03/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface WebViewController : UIViewController
@property (nonatomic, copy) NSString *url;
@property (strong, nonatomic) IBOutlet UIWebView *webView;

@end
