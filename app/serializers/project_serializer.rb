class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :icon, :link, :bio
end
