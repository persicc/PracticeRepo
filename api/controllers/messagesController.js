const index = async (req, res) => {
  const { chatroom_id } = req.params
  try {
      const messages = await mysql.query(
        "SELECT * FROM messages JOIN users on messages.user_id = users.user_id JOIN likes on messages.message_id = likes.message_id WHERE chatroom_id = ? SORT BY timestamp DESC", [chatroom_id]
      );
      res.json("messages" = messages)
    
  } catch (error) {
    res.json(error)  

  }
};   


const update = async (req, res) =>{
  const {message_id} = req.body
  try {
    
    mysql.query("UPDATE message.text FROM messages WHERE message_id ?", message_id)
    res.json("Message updated")

    localStorage.setItem("message_id", message_id)
    const message = localStorage.getItem("message_id")

  } catch (error) {
    res.json(error)
  }
}


const store = async (req, res) => {
  const {text, user_id} = req.body
  try {
    await mysql.query("INSERT INTO messages (text, user_id) VALUES (?, ?)", [text, user_id])

    res.json("Message sent")

  } catch (error) {
    res.json(error)
  }
}


const _delete = async (req, res) => {
    const {message_id} = req.body
    try {
      await mysql.query("DELETE * FROM messages WHERE message_id = ?", message_id)
      
      res.json("Message deleted")
      
    } catch (error) {
      res.json(error)
    }
}


module.exports = {
  index,
  store,
  _delete,
};
