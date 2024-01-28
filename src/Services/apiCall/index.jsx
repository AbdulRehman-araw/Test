import {Apis} from '../Endpoints';
import {get, post, patch, put} from '../Methods';

export const apiCall = {
  //POST API CALL
  Post: async obj => {
    let result = await post(Apis.post, obj);
    if (result.status === 200 || result?.status === 206) return result.data;
    else throw result;
  },

  //GET API CALL
  getPosts: async obj => {
    let result = await get(Apis.getPosts, obj);
    if (result.status === 200) return result.data;
    else throw result;
  },

  //PUT API CALL
  Put: async (obj, id) => {
    let result = await put(Apis.put, obj);
    if (result.status === 200) return result.data;
  },

  //PATCH API CALL
  Patch: async obj => {
    let result = await patch(Apis.patch, obj);
    if (result.status === 200) return result.data;
  },
};
