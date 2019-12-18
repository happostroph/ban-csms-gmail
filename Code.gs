function myFunction() {
  
  var thread = GmailApp.getInboxThreads();
  var messages = GmailApp.getMessagesForThreads(thread);
  
  for (var i = 0 ; i < messages.length; i++) {
    for (var j = 0; j < messages[i].length; j++) {
      if (~messages[i][j].getBody().indexOf("comic sans ms")){
        Logger.log("Shitty language detect");
        GmailApp.moveMessageToTrash(messages[i][j])
      }
    }
  }
}
