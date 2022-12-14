// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

// Your code here
app.use(express.json());

// app.use((req, res, next) => {
//   console.log('Body:', req.body);
//   next();
// });

app.get('/artists', (req,res) => {
  res.status(200);
  res.json(getAllArtists())
})

app.post('/artists', (req, res) => {
  // console.log(req.body)
  const data = addArtist(req.body)
  res.json(data)
})

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));