const
  Promise = require('bluebird'),
  Immutable = require('immutable');

/**
 * At the moment we have a very simple in-memory store.
 * This means: on server restart (node process restart), all information is lost.
 * This could be extended with a persistent store (maybe a mongo db?)
 * See https://github.com/Zuehlke/poinz/issues/8
 */

var rooms = new Immutable.Map();

module.exports = {
  getRoomById,
  saveRoom,
  getAllRooms
};

function getRoomById(roomId) {
  return Promise.resolve(rooms.get(roomId));
}

function saveRoom(room) {
  rooms = rooms.set(room.get('id'), room);
  return Promise.resolve();
}

function getAllRooms() {
  return Promise.resolve(rooms);
}

