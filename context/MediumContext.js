const { createContext, useState, useEffect } = require("react");

const MediumContext = createContext();

const MediumProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const usersCollection = await getDoc(collection(db, "users"));
      setUsers(
        usersCollection.docs.map((doc) => {
          return {
            id: doc.id,
            data: {
              ...doc.data(),
            },
          };
        })
      );
    }
    getUsers();
  }, [users]);

  useEffect(() => {
    async function getPosts() {
      const postsCollection = await getDoc(collection(db, "posts"));
      setPosts(
        postsCollection.docs.map((doc) => {
          return {
            id: doc.id,
            data: {
              ...doc.data(),
            },
          };
        })
      );
    }
    getPosts();
  }, [posts]);

  return (
    <MediumContext.Provider value={{ users, posts }}>
      {children}
    </MediumContext.Provider>
  );
};

export { MediumContext, MediumProvider };
