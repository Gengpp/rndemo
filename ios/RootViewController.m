//
//  RootViewController.m
//  rndemo
//
//  Created by 耿彭彭 on 15/03/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "RootViewController.h"
#import "RNBaseViewController.h"

@interface RootViewController ()

@end

@implementation RootViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
  
  self.title = @"主页";
  self.view.backgroundColor = [UIColor whiteColor];
  
  UIButton *btn = [UIButton buttonWithType:UIButtonTypeCustom];
  btn.backgroundColor = [UIColor darkGrayColor];
  [btn setTitle:@"测试" forState:UIControlStateNormal];
  [btn addTarget:self action:@selector(btnClicked) forControlEvents:UIControlEventTouchUpInside];
  [self.view addSubview:btn];
  btn.frame = CGRectMake(20, 100, CGRectGetWidth(self.view.frame) - 40, 80);
  
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}
- (void)btnClicked{
  RNBaseViewController *rnVC = [[RNBaseViewController alloc] init];
  [self.navigationController pushViewController:rnVC animated:YES];
}


@end
