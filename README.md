# HTML Notification Panel

## Requirements
**Font Awesome 5**

**jQuery**
## Getting started
Add the following code in your html head tag
```html
<link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.7.0/css/all.css'
	integrity='sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ' crossorigin='anonymous'>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<link rel="stylesheet" type="text/css" href="<path-to-project>/style/notificationpanel.css">
<script type="text/javascript" src="<path-to-project>/js/notificationpanel.js"></script>
```
Note: replace '<path-to-project>' with your project path.

### Trigger notifications
There are multiple ways you can create notifications. See 'create' method below for more.

Default:
```javascript
$(document).ready(function () {
	var myNot = new devNotification();
	myNot.create('message');
});
```

### Method

#### create
.create() method accepts four parameters: message, type, backgroundcolor, fontcolor

**type** can take value of 'default', 'info', 'success', 'danger', and 'custom'

**Remember that last two parameters should also be passed if type is 'custom'**
