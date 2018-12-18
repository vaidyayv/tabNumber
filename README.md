# tabNumber
This repositiry will help you to detect number of open tabs of your website.

How to run this repository -
This will work fine on firefox
If running this on chrome -
1. It will work fine on server
2. if running on local machine using file:// protocol, use "chrome.exe --allow-file-access-from-files" command to open chrome

How to access number of open tabs -
A localStorage variable "count" will give you the value of open tabs of your website.

How to detect number of open tabs in all tabs when one tab updates the count - 
A storage event on window will trigger an event when localStorage is updated in all tabs except the one in which the localStorage updation takes place.

Use case - Analytics
