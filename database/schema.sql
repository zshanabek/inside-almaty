CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS categories (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  slug VARCHAR(120) NOT NULL UNIQUE,
  icon VARCHAR(32),
  sort INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS districts (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  slug VARCHAR(120) NOT NULL UNIQUE,
  description TEXT
);

CREATE TABLE IF NOT EXISTS tags (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  slug VARCHAR(120) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS places (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(180) NOT NULL,
  slug VARCHAR(180) NOT NULL UNIQUE,
  short_description TEXT,
  description TEXT,
  verdict TEXT,
  latitude NUMERIC(9,6),
  longitude NUMERIC(9,6),
  address TEXT,
  price_level SMALLINT CHECK (price_level BETWEEN 1 AND 4),
  average_check INTEGER,
  recommended BOOLEAN NOT NULL DEFAULT FALSE,
  hidden_gem BOOLEAN NOT NULL DEFAULT FALSE,
  tourist_trap BOOLEAN NOT NULL DEFAULT FALSE,
  best_time VARCHAR(180),
  duration_minutes INTEGER,
  website_url TEXT,
  instagram_url TEXT,
  working_hours JSONB,
  cover_image UUID,
  category_id BIGINT REFERENCES categories(id) ON DELETE SET NULL,
  district_id BIGINT REFERENCES districts(id) ON DELETE SET NULL,
  status VARCHAR(30) NOT NULL DEFAULT 'draft',
  date_created TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  date_updated TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS places_category_idx ON places(category_id);
CREATE INDEX IF NOT EXISTS places_district_idx ON places(district_id);
CREATE INDEX IF NOT EXISTS places_recommended_idx ON places(recommended) WHERE recommended = true;
CREATE INDEX IF NOT EXISTS places_geo_idx ON places(latitude, longitude);

CREATE TABLE IF NOT EXISTS place_tags (
  place_id BIGINT NOT NULL REFERENCES places(id) ON DELETE CASCADE,
  tag_id BIGINT NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (place_id, tag_id)
);

CREATE TABLE IF NOT EXISTS routes (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(180) NOT NULL,
  slug VARCHAR(180) NOT NULL UNIQUE,
  description TEXT,
  duration_hours NUMERIC(4,1),
  difficulty VARCHAR(40),
  estimated_budget INTEGER,
  cover_image UUID,
  status VARCHAR(30) NOT NULL DEFAULT 'draft',
  date_created TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  date_updated TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS route_places (
  route_id BIGINT NOT NULL REFERENCES routes(id) ON DELETE CASCADE,
  place_id BIGINT NOT NULL REFERENCES places(id) ON DELETE CASCADE,
  position INTEGER NOT NULL,
  stay_minutes INTEGER,
  note TEXT,
  PRIMARY KEY (route_id, place_id),
  UNIQUE (route_id, position)
);

CREATE TABLE IF NOT EXISTS articles (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(220) NOT NULL,
  slug VARCHAR(220) NOT NULL UNIQUE,
  excerpt TEXT,
  body TEXT,
  cover_image UUID,
  status VARCHAR(30) NOT NULL DEFAULT 'draft',
  published_at TIMESTAMPTZ,
  date_created TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  date_updated TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
