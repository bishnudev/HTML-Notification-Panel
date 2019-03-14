# HTML Notification Panel

## Requirement
**Font Awesome 5**

**jQuery**
## Getting started
Import the js and css files above in your project.

Add the following code in your html body
```html
<div id="notificationWrapper">
	<div class='notificationpanel' id='notificationPanel'>
		<span class="notification" id='notificationPanelMessage'>Your message</span>
		<span class="notificationdismiss fas" onclick="notificationDismiss();">&#xf410;</span>
	</div>
</div>
```
### Trigger notifications
There are two ways you can create notifications.
Default:
```javascript
createNotification('your message');
```

Custom Notifications:- Available types: 'danger', 'info', 'success'
Note: 'info' is same as default
```javascript
createCustomNotification('your message', 'danger');
createCustomNotification('your message', 'info');
createCustomNotification('your message', 'success);
```

### Some useful functions

```javascript
notificationDismiss(); // hides the panel with animation
hideNotificationPanel(); // hides the panel without animation
showNotificationPanel(); // shows the panel without animation
```
