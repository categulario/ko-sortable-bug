function MyViewModel() {
	var self = this;

	self.items = ko.observableArray([{
		name: 'foo',
		items: []
	}, {
		name: 'var',
		items: []
	}, {
		name: 'log',
		items: []
	}, {
		name: 'baz',
		items: [{
			name: 'poo',
			items: []
		}]
	}]);
}

ko.applyBindings(new MyViewModel());