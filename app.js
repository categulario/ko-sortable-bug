function MyViewModel() {
	var self = this;

	self.items = ko.observableArray([{
		name: 'foo',
		items: ko.observableArray([])
	}, {
		name: 'var',
		items: ko.observableArray([])
	}, {
		name: 'log',
		items: ko.observableArray([{
			name: 'poo',
			items: ko.observableArray([])
		}])
	}, {
		name: 'baz',
		items: ko.observableArray([{
			name: 'dog',
			items: ko.observableArray([])
		}])
	}]);
}

ko.applyBindings(new MyViewModel());