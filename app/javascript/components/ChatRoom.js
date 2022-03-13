import React from 'react';

function ChatRoom() {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const[messages] = useCollection(query, {idField: 'id'});

  return(
    <div>
      {messages && messages.map( msg => <ChatMessage key={msg.id} message={msg}/>)}
    </div>
  )
}

export  default ChatRoom