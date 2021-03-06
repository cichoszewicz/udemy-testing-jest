import { ADD_COMMENT, FETCH_COMMENTS } from 'actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case ADD_COMMENT:
      if (action.payload === '')
        return state;
      else
        return [...state, action.payload];
    case FETCH_COMMENTS:
      const comments = action.payload.data.map(comment => comment.name);
      return [...state, ...comments];
    default: return state;
  }
}