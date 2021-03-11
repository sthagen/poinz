import {EVENT_ACTION_TYPES, ROOM_STATE_FETCHED} from '../actions/eventActions';

export const estimationsInitialState = {};

/**
 *
 * @param {object} state The "estimations" portion of the redux state
 * @param action
 * @param {string | undefined} ownUserId
 * @return {object}
 */
export default function estimationsReducer(state = estimationsInitialState, action, ownUserId) {
  const {event} = action;

  switch (action.type) {
    case ROOM_STATE_FETCHED:
      return indexEstimations(action.room.stories);

    // joining and leaving
    case EVENT_ACTION_TYPES.joinedRoom: {
      if (action.ourJoin) {
        return indexEstimations(event.payload.stories);
      } else {
        return state;
      }
    }
    case EVENT_ACTION_TYPES.leftRoom: {
      if (event.userId === ownUserId) {
        return {...estimationsInitialState};
      } else {
        return state;
      }
    }
    case EVENT_ACTION_TYPES.kicked: {
      if (event.payload.userId === ownUserId) {
        return {...estimationsInitialState};
      } else {
        return state;
      }
    }

    // estimations
    case EVENT_ACTION_TYPES.storyEstimateGiven:
      return {
        ...state,
        [event.payload.storyId]: {
          ...state[event.payload.storyId],
          [event.userId]: event.payload.value
        }
      };
    case EVENT_ACTION_TYPES.storyEstimateCleared: {
      const modifiedEstimations = {...state[event.payload.storyId]};
      delete modifiedEstimations[event.userId];

      return {
        ...state,
        [event.payload.storyId]: modifiedEstimations
      };
    }
    case EVENT_ACTION_TYPES.newEstimationRoundStarted:
      return {
        ...state,
        [event.payload.storyId]: undefined
      };
  }

  return state;
}

/**
 * index estimations from given array of stories into map. storyId -> EstimationsMap.
 * EstimationsMap is (unchanged) userId -> value
 *
 * @param {object[]} storiesArray Array of stories objects as in payload of backend events
 * @return {*}
 */
function indexEstimations(storiesArray) {
  return (storiesArray || []).reduce((total, stry) => {
    total[stry.id] = stry.estimations;
    return total;
  }, {});
}
