# React Native 开发总结

开发中遇到过不少问题，记录一下。

---

## 服务
开启其他项目时，要关掉上一个项目的服务

## 原生模块
保证被导出的原生模块在使用时，在RN端与Native端是同一个实例

## 事件
事件订阅是全局的，如果在组件的生命周期内订阅事件，需要在组件被移除时取消订阅事件

## 键盘与模拟器
Xcode模拟器需要连接键盘设备，我们才能通过键盘操作模拟器

## 调试
使用真机调试时，可以在Xcode控制台查看`console`的输出

## 离线Bundle
离线Bundle只能在真机上用

## 如何隐藏键盘
1. 使用`ScrollView`做容器
2. 使用`dismissKeyboard`
```javascript
let dismissKeyboard = require('dismissKeyboard');

<View onStartShouldSetResponder={dismissKeyboard}>
</View>
```
3. 获取`TextInput`对象后调用`blur`方法
```javascript
this.refs.textInput.blur();

<TextInput ref='textInput' />
```

http://stackoverflow.com/questions/29685421/react-native-hide-keyboard

## 启动图片

* 设置启动图片显示时长

```objective-c
[NSThread sleepForTimeInterval:2.0];
```

* 启动时出现短暂白屏
https://github.com/facebook/react-native/issues/1402

```objective-c
  UIView *loading = [[UIView alloc] initWithFrame:[UIScreen mainScreen].bounds];
  loading.backgroundColor = [UIColor redColor];
  rootView.loadingView = loading;
  rootView.loadingViewFadeDelay = 1;
```


## 使用定时器时要注意组件卸载后的情况

## 修复APP显示名称
```
Bundle display name 
```

## 图片闪烁
给图片设置背景色，背景色要接近图片主色。

## 获取键盘信息
键盘被调起、隐藏时会发送`keyboardDidShow`等Device事件，并把一些键盘的相关信息传给监听者。要使用`DeviceEventEmitter`来监听。

```javascript
import {DeviceEventEmitter} from 'react-native';

DeviceEventEmitter.addListener('keyboardDidShow', (e) => {
    console.log(e);
});

```

```objective-c
// RCTKeyboardObserver.m

#define IMPLEMENT_KEYBOARD_HANDLER(EVENT) \
- (void)EVENT:(NSNotification *)notification \
{ \
  [_bridge.eventDispatcher \
    sendDeviceEventWithName:@#EVENT \
    body:RCTParseKeyboardNotification(notification)]; \
}

IMPLEMENT_KEYBOARD_HANDLER(keyboardWillShow)
IMPLEMENT_KEYBOARD_HANDLER(keyboardDidShow)
IMPLEMENT_KEYBOARD_HANDLER(keyboardWillHide)
IMPLEMENT_KEYBOARD_HANDLER(keyboardDidHide)
IMPLEMENT_KEYBOARD_HANDLER(keyboardWillChangeFrame)
IMPLEMENT_KEYBOARD_HANDLER(keyboardDidChangeFrame)

```

## TabBar 图片被自动着色
方法1. 将图片白色部分做成透明无色值的

方法2. 或者修改React源码，使用原图渲染模式
```objective-c
// 在 RCTConvert.m 文件的 + (UIImage *)UIImage:(id)json 类方法最后设置image的渲染模式
image = [image imageWithRenderingMode:UIImageRenderingModeAlwaysOriginal];
return image;
```


