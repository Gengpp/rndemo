//
//  RNNativeManager.m
//  rndemo
//
//  Created by 耿彭彭 on 15/03/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "RNNativeManager.h"
#import <UIKit/UIKit.h>

@implementation RNNativeManager
// 导出模块，不添加参数即默认为这个类名
RCT_EXPORT_MODULE();

// 导出方法，桥接到js的方法返回值类型必须是void
RCT_EXPORT_METHOD(doSomething:(id)object){
  NSLog(@"%s  testStr=%@",__func__,object);
}

RCT_EXPORT_METHOD(alertWithTitle:(NSString *)title content:(NSString *)content){
  dispatch_async(dispatch_get_main_queue(), ^{
    UIAlertView *alert = [[UIAlertView alloc] initWithTitle:title message:content delegate:nil cancelButtonTitle:@"确定" otherButtonTitles:nil, nil];
    [alert show];
  });
}

RCT_EXPORT_METHOD(callSomthing:(id)object resolve:(RCTPromiseResolveBlock)callBack){
  NSLog(@"object = %@",object);
  callBack(@"9999999999999999");
}


// 导出方法，桥接到js的方法返回值类型必须是void
/* 回调参数必须为两个，第一个为状态，第二个为参数 */
RCT_EXPORT_METHOD(callbackMethod:(id)object resolver:(RCTResponseSenderBlock)callback){
  NSLog(@"%s  %@",__func__,object);
  if ([object isKindOfClass:[NSDictionary class]]) {
    NSString *userName = [[[object objectForKey:@"item"] objectForKey:@"user"] objectForKey:@"name"];
    if (userName.length > 0) {
        callback(@[[NSNull null],userName]);
    }else{
      callback(@[[NSNull null],@"用户名为Null"]);
    }
  }else{
    callback(@[[NSError errorWithDomain:@"js" code:999 userInfo:@{@"key":@"js传值item格式有误"}],@"null"]);
  }
}

//
RCT_EXPORT_METHOD(goWebDetail:(id)object){
  if ([object isKindOfClass:[NSDictionary class]]) {
    NSString *avatar_url = [[[object objectForKey:@"item"] objectForKey:@"user"] objectForKey:@"avatar_url"];
    [[NSNotificationCenter defaultCenter] postNotificationName:@"Notification_gotoWebVC" object:avatar_url];
  }
}



@end
