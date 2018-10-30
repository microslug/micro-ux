import { FETCH, ABORT } from '../actions/index';

export default function(state = [],action) {
  switch (action.type) {
  case FETCH:
    return [ action.payload.data, ...state ];
  case ABORT:
    console.log('aborting..');
    const error = false;
    return [ error, ...state ];
  default:
    break;
  }
  return state;
}
