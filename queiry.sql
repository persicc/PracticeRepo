SELECT * FROM messages 
JOIN users ON messages.user_id = users.id 
JOIN comments ON messages.message_id = comments.message_id
WHERE message_id = 1
SORT BY created_at DESC