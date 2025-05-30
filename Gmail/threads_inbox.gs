function getThreads() {
  const unread = GmailApp.getInboxUnreadCount();
  //Logger.log(unread);
  const threads = GmailApp.getInboxThreads();
  //Logger.log(threads);

  threads.forEach((thread) => {
    //Logger.log(thread.getId());
    //Logger.log(thread.getMessageCount());    

    if(thread.isUnread()) {
      const messages = thread.getMessages();
      messages.forEach((mes) => {
        Logger.log(mes.getSubject());
      })
      Logger.log(thread);
      thread.markRead();
    }

  })
}
