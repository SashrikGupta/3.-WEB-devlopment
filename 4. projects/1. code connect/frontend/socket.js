import {io} from 'socket.io-client'

export const initSocket = async () => {
   const options = {
     'force new connection': true,
     reconnectionAttempt: 'Infinity',
     timeout: 10000,
     transports: ['websocket'],
   };
 
   const socket = io("https://ocasion-1.onrender.com/", options);
 
   socket.on('connect', () => {
     console.log('Socket connected');
   });
 
   socket.on('connect_error', (error) => {
     console.error('Socket connection error:', error.message);
   });
 
   return socket;
 };
 
