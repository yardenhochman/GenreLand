\c sound_land;

CREATE TABLE IF NOT EXISTS events (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  address VARCHAR(255) UNIQUE NOT NULL,
  datetime VARCHAR(255) UNIQUE NOT NULL,
  genre TEXT NOT NULL,
  description TEXT NOT NULL,
  createdby
);