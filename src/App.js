import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMessages, setSingleMessage, setSocket } from './redux/chat/chatSlice';
import AppRoutes from './routes';

function App() {
  const dispatch = useDispatch();
  const socketUrl = (process.env.REACT_APP_SOCKET_ENDPOINT || 'ws://localhost:8000')

  // Socket connection
  useEffect(() => {
    const newSocket = new WebSocket(socketUrl);
    dispatch(setSocket(newSocket));

    // Fetch all messages after joining a group
    newSocket.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      const allMessages = data?.allMessages
      console.log(data, "datadatadatadatadatadatadatadatadatadata");
      
      // Set all messages
      if (data.type && allMessages && Array.isArray(allMessages)) {
        dispatch(setMessages({ allMessages }));
      
        // Set Single message
      } else if (data.type === 'sendMessage' && data?.message) {
        dispatch(setSingleMessage(data))
      }
    });
    // Close the connection befor component unmount
    return () => {
      newSocket.close();
    };
  }, []);

  return (
    <AppRoutes />
  );
}

export default App;
