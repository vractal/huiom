import nodejs from 'nodejs-mobile-react-native'

export const dispatch = action => {
  // an asynchronous action somewhere else, probably involves db
  nodejs.channel.post('action', action)
}

export const whoami = () => dispatch({ type: 'whoami' })

export const getFeed = () => dispatch({ type: 'getFeed' })

export const publishAudio = payload => dispatch({
  type: 'publishAudioFile',
  payload
})

export const deleteAudio = payload => dispatch({
  type: 'deleteAudioFile',
  payload
})

export const setName = payload => dispatch({
  type: 'setName',
  payload
})