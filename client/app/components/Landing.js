import React from 'react';
import { connect } from 'react-redux';

import RoomJoinForm from '../components/RoomJoinForm';

const Loader = () => (
  <div className='eyecatcher loading'>
    Loading...
  </div>
);

const Landing = ({ waitingForJoin })=> {
  return (
    <div className='landing'>
      {!waitingForJoin && <RoomJoinForm />}
      {waitingForJoin && <Loader/>}
    </div>
  );
};

Landing.propTypes = {
  waitingForJoin: React.PropTypes.bool
};

export default connect(
  state => ({
    waitingForJoin: !!state.get('pendingCommands').find(cmd => cmd.name === 'joinRoom')
  })
)(Landing);
