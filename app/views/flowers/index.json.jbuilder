json.array! @flowers do |flower|
  json.id flower.id
  json.name flower.name
  json.description flower.description
  json.sightings flower.sightings
end