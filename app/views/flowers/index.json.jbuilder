json.array! @flowers do |flower|
  json.id flower.id
  json.name flower.name
  json.description flower.description

  json.sightings flower.sightings do |sighting|
    json.id sighting.id
    json.hiker sighting.hiker
    json.day sighting.day
    json.comment sighting.comment
    json.flower_id sighting.flower_id
  end
end