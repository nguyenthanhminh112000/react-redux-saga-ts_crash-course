export const postReducer = (
  state: {
    userId: number | null;
    id: number | null;
    title: string | null;
    body: string | null;
  } = { userId: null, id: null, title: null, body: null },
  action: {
    type: string;
    post?: {
      userId: number | null;
      id: number | null;
      title: string | null;
      body: string | null;
    };
  },
) => {
  console.log('action in reducer', action);

  switch (action.type) {
    case 'POST_DETAIL_SUCCEED':
      return { ...state, ...action.post };
    case 'POST_DETAIL_FAILED':
      return { ...state, ...action.post };
    default:
      return { ...state };
  }
};
