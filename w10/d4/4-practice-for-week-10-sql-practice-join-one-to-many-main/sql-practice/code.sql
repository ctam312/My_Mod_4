SELECT bands.name, bands.id, albums.band_id, albums.title FROM albums
JOIN bands ON (bands.id = band_id)


SELECT bands.name, bands.id, albums.band_id, albums.title FROM albums
JOIN bands ON (bands.id = band_id)
WHERE num_sold < 20000