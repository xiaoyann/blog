# Reactjs 使用心得


### 使用Reactjs实现的listView，在下拉刷新时，列表数据未更新？
> 使用Reactjs实现话题列表，可以下拉刷新，上拉加载。每条话题是一个Item组件，组成一个listView。在后台更改一话题的title后，刷新列表，发现数据并未更新。原因是ListView并未把原来的Item组件删除然后重新创建新的，而是给原来的组件传递新的数据重新render，新的数据是通过`props`传递的，而`state`并未更新。所以可以使用`componentWillReceiveProps`方法，将新接收到的数据赋给`state`，这样数据就更新了。

```javascript
	componentWillReceiveProps: function(nextProps) {
		this.setState({
			topic: nextProps.topic
		});
	}
```



### 使用`shouldComponentUpdate`进行优化
> 只要使用了`setState`，无论数据是否有变化，`render`总是会被调用。我们可以在`render`前调用`shouldComponentUpdate`方法，在里面进行数据对比，不需要更新时返回`false`阻止没必要的`render`调用。

```javascript
shouldComponentUpdate: function(nextProps, nextState) {
	return !this.isEqual(this.state.topic, nextState.topic);
}
```

### 如果`state`的属性是一个对象，在重置该对象的属性时要注意引用关系，不然就会直接修改了`state`，造成一些不可预料的问题。

```javascript
getInitialState: function() {
	return {
		// topic 是一个对象
		topic: this.props.topic
	}
},

updateReadStatus: function() {
    // 这里clone一份，而不是直接取
	var topic = this.clone(this.state.topic);
	// 如果不是clone的，这里将会直接修改state
	topic.isRead = true;
	this.setState({
		topic: topic
	});
},

```


### 官方说`shouldComponentUpdate`方法在组件初始化时和调用`forceUpdate`时不会被调用。但在使用`forceUpdate`时`shouldComponentUpdate`却被调用了？

> 所以需要强制刷新时可以再次调用`setState`，而不要使用`forceUpdate`。使用`forceUpdate`时，新旧`state`都已被设置成一样的了，如果我们在`shouldComponentUpdate`做了优化，组件不会重新render。