// import appwriteService from "./appwrite/config";
// import { useDispatch } from "react-redux";
// import {getPostRequest,getPostSuccess,getPostFailure} from './store/postSlice'


// const fetchPost = (slug) => async (dispatch) => {
//     dispatch(getPostRequest(slug));
//     try {
//       const response = await appwriteService.getPost(slug);
//       dispatch(getPostSuccess(response));
//     } catch (error) {
//       dispatch(getPostFailure(error));
//     }
//   };

// export {fetchPost}