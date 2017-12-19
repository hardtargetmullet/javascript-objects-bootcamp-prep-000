var playlist = { metallica : 'One'}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  playlist[artistName].delete
  
  return playlist
}