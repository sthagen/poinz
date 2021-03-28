import {hashRoomPassword} from '../auth/roomPasswordService';

/**
 * A user sets (or re-sets) a password for this room. If the password is undefined or empty, the password protection is removed (passwordCleared event).
 * Currently this can be done without specifying the old password.
 */

const schema = {
  allOf: [
    {
      $ref: 'command'
    },
    {
      properties: {
        payload: {
          type: 'object',
          properties: {
            password: {
              type: 'string',
              minLength: 0 // allow zero length in order to "clear" room password
            }
          },
          comment:
            'do not set password as required. if not set or empty string (or falsy value) will reset pw -> remove pw protection from room',
          required: [],
          additionalProperties: false
        }
      }
    }
  ]
};

const setPasswordCommandHandler = {
  schema,
  fn: (room, command) => {
    if (command.payload.password) {
      room.applyEvent('passwordSet', {
        password: hashRoomPassword(command.payload.password)
      });
    } else {
      room.applyEvent('passwordCleared', {});
    }
  }
};

export default setPasswordCommandHandler;
