SELECT musicians.first_name, musician_instruments.instrument_id, instruments.id, instruments.type FROM musician_instruments
JOIN musicians ON (musician_instruments.musician_id = musician_id)
JOIN instruments ON (musician_instruments.instrument_id = instruments.id);