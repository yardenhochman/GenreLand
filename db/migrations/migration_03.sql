\c sound_land;

CREATE TABLE IF NOT EXISTS music (
  id SERIAL PRIMARY KEY,
  genre VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS location (
  id SERIAL PRIMARY KEY,
  zipcode VARCHAR(255) NOT NULL,
  description VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS music2location (
  music_id INTEGER,
  location_id INTEGER,
  user_id INTEGER
);

CREATE TABLE IF NOT EXISTS events2user (
  event_id INTEGER,
  user_id INTEGER
);