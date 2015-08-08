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
