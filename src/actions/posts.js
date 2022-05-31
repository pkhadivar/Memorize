import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  console.log('Here....')
  try {
    const fetchResult = await api.fetchPosts();
    console.log(fetchResult)
    dispatch({ type: "FETCH_ALL", payload: fetchResult.data });
  } catch (error) {
    console.error('Error: getPsts():', error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
