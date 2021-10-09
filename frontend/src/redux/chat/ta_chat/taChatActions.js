
import {
  FETCH_CHATDATA,
  FETCH_CHATDATA_REQUEST,
  FETCH_CHATDATA_SUCCESS,
  FETCH_CHATDATA_FAILURE,
  ADD_TA_CHATMSG,
  ADD_TA_CHATROOM,
  GET_TA_RESPONSE,
} from './taChatTypes';

// const fetChatData = () => {
//     return (dispatch) => {
//         // fetch("url")
//         // .then(response => response.json())
//         // .then(chatData =>console.log(chatData))
//         // .catch(error=>console.log(error))
//     }
// }

export const fetchChatData = () => {
    return {
        type: FETCH_CHATDATA_SUCCESS,
    };
}

export const addMsgData = (id,name,studentNumber,msg) => {
    return{
      type: ADD_TA_CHATMSG,
      data:{id:id,name:name,studentNumber:studentNumber, msg: msg}
    };
}

export const addRoomData = (id,roomId, title, des) => {
  return{
    type: ADD_TA_CHATROOM,
    data:{id:id,roomId:roomId, title: title, des: des}
  };
}

export const getBotResponse = (msg) => {


  msg = "엔샵 박태순 최고";

  return{
    type: GET_TA_RESPONSE,
    data:{
      msg:msg
    }
  }
}
