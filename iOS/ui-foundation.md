# iOS编程学习笔记

## storyboard是什么
通过一个可视化的界面来快速创建APP界面

## IBAction和IBOutlet的作用
在进行iOS开发时需要我们手工实现代码与界面元素的对应关系。IBAction用来表示这个方法与可以与界面上的事件建立关系，IBOutlet用来表示这个变量可以与界面上的控件建立关系。

> 疑问：只能通过拖线的方式吗？可以编写代码来建立关系吗？

## 如何退出键盘
iOS文本输入框控件不像HTML的input可以自动失去焦点，需要我们编写命令来实现。

- [self.theTextField resignFirstResponder]
> theTextField是调起键盘的控件，执行resignFirstResponder后，它调起的键盘就会在它失去焦点后隐藏，如果界面上有多个这样的控件我们就需要为每一个控件执行下这个方法，很繁琐。

- [self.view endEditing:YES]
> 使用这个是就方便了，每个输入控件失去焦点时键盘都会影藏起来。

## UIView的常见属性
- @property(nonatomic,readonly) UIView *superview;
> 获得自己的父控件对象

- @property(nonatomic,readonly,copy) NSArray *subviews;
> 获得自己的所有子控件

- @property(nonatomic) NSInteger tag;
> 控件的ID(标识)，父控件可以通过tag获得对应的子控件

- @property(nonatomic) CGAffineTransform transform;
> 控件的变形属性（可以设置旋转角度、比例缩放、平移等属性）

- @property(nonatomic) CGRect frame;
> 控件在父控件中的位置和尺寸

- @property(nonatomic) CGRect bounds;
> 控件所在矩形框的位置和尺寸，以自己的左上角为原点，所以bounds的x/y一般为0

- @property(nonatomic) CGPoint center;
> 控件的相对于父控件的中心点


## UIView的常见方法
- (void)addSubview:(UIView *)view;
> 添加一个子view控件

- (void)removeFromSuperview;
> 从父控件中删除

- (UIView *)viewWithTag:(NSInteger)tag;
> 根据tag获取控件







