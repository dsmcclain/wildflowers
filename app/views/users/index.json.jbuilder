json.users @users do |user|
  json.name user.name
  json.email user.email
  json.created_at user.created_at
end