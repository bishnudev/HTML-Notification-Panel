function devNotification(options={}){
	_this = this;
	this.uniqueId = Math.floor((Math.random() * 100000000000) + 1);
	this.panelWrapperId = 'notificationWrapper'+this.uniqueId;
	this.panelId = 'notificationPanel'+this.uniqueId;
	this.messageId = 'notificationPanelMessage'+this.uniqueId;
	this.dismissButtonId = 'notificationDismiss'+this.uniqueId;
	var idSelector = '#';

	// creating classes
	var style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = '.cssClass { color: #F00; }';
	document.getElementsByTagName('head')[0].appendChild(style);
	
	// creating elements
	let elements = '<div class="notificationWrapper" id="'+this.panelWrapperId+'"><div class="notificationPanel" id="'+this.panelId+'"><span class="notification" id="'+this.messageId+'">Your message</span><span class="notificationdismiss fas" id="'+this.dismissButtonId+'">&#xf410;</span></div></div>';
	$('body').prepend(elements);

	// jquery elements
	this.$wrapper = $(idSelector+this.panelWrapperId);
	this.$panel = $(idSelector+this.panelId);
	this.$message = $(idSelector+this.messageId);
	this.$dismissButton = $(idSelector+this.dismissButtonId);

	this.$wrapper.hide();

	// Event listeners
	// hide when hide button is clicked
	$('body').on('click', idSelector+this.dismissButtonId, function(){
		_this.hide();
	});

	this.show = function(){
		this.$wrapper.show();
	}

	this.hide = function(){
		this.$wrapper.slideUp();
	}

	this.create = function(message, type='default', background='default', fontcolor='default'){
		if (type == 'default' || type == 'info'){
			this.setColorDefault();
		} else if (type == 'danger') {
			this.setColorDanger();
		} else if (type == 'success') {
			this.setColorSuccess();
		} else if (type == 'custom') {
			this.setCustomBackgroundColor(background);
			this.setCustomFontColor(fontcolor);
		} else {
			this.setColorDefault();
		}
		this.writeMessage(message);
		this.show();
	}

	this.setColorDefault = function(){
		$(idSelector+this.panelId+'.notificationPanel').css('background-color','#1c8adb;');
	}

	this.setColorDanger = function(){
		$(idSelector+this.panelId+'.notificationPanel').css('background-color','#db1c1c');
	}

	this.setColorSuccess = function(){
		$(idSelector+this.panelId+'.notificationPanel').css('background-color','#00ad51');
	}

	this.setCustomBackgroundColor = function(color){
		$(idSelector+this.panelId+'.notificationPanel').css('background-color',color);
	}

	this.setCustomFontColor = function(color){
		$(idSelector+this.panelId+'.notificationPanel').css('color',color);
	}

	this.writeMessage = function(message){
		this.$message.html(message);
	}
}