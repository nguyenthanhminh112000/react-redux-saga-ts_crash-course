import { connect } from 'react-redux';
import Pure from './Pure';
import myPostDetailSaga from './model';

export const m = (state: {
  id: number;
  title: string;
  body: string;
  userId: number;
}) => ({
  id: state.id,
  title: state.title,
  body: state.body,
  userId: state.userId,
});

myPostDetailSaga();
export default connect(m)(Pure);
