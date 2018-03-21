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
  

  
  UIButton *btn2 = [UIButton buttonWithType:UIButtonTypeCustom];
  btn2.backgroundColor = [UIColor darkGrayColor];
  [btn2 setTitle:@"HomeList" forState:UIControlStateNormal];
  [btn2 addTarget:self action:@selector(btn2Clicked) forControlEvents:UIControlEventTouchUpInside];
  [self.view addSubview:btn2];
  btn2.frame = CGRectMake(20, 220, CGRectGetWidth(self.view.frame) - 40, 80);
  
  
  UIButton *btn3 = [UIButton buttonWithType:UIButtonTypeCustom];
  btn3.backgroundColor = [UIColor darkGrayColor];
  [btn3 setTitle:@"内涵段子" forState:UIControlStateNormal];
  [btn3 addTarget:self action:@selector(btn3Clicked) forControlEvents:UIControlEventTouchUpInside];
  [self.view addSubview:btn3];
  btn3.frame = CGRectMake(20, 320, CGRectGetWidth(self.view.frame) - 40, 80);
  
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}
- (void)btnClicked{
  RNBaseViewController *rnVC = [[RNBaseViewController alloc] initWithProps:@{@"moduleName":@"ItemCommentsList",
                                                                             @"title":@"Comment List"
                                                                             }];
  [self.navigationController pushViewController:rnVC animated:YES];
}

- (void)btn2Clicked{
  RNBaseViewController *rnVC = [[RNBaseViewController alloc] initWithProps:@{@"moduleName":@"HomeList",
                                                                             @"title":@"Home List"
                                                                             }];
  [self.navigationController pushViewController:rnVC animated:YES];
}

- (void)btn3Clicked{
  RNBaseViewController *rnVC = [[RNBaseViewController alloc] initWithProps:@{@"moduleName":@"FunJokeList",
                                                                             @"title":@"内涵段子"
                                                                             }];
  [self.navigationController pushViewController:rnVC animated:YES];
}

@end
