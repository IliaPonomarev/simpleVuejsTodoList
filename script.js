new Vue({
	el: '.app',
	data: {
		inputText:'',
		items:[
			{text: "Пример"},
		]
	},
	methods: {
		addItem: function() {
			if (this.inputText !== '') {
				this.items.push({
					text:this.inputText
				});
				this.inputText = '';
			}
		},
		deleteItem: function(index){
			this.items.splice(index,1);
		}
	}
})