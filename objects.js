var playlist = {
  Eminem: "Lose Yourself"
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}