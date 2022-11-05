class AddColumnsToProjects < ActiveRecord::Migration[6.1]
  def change
    add_column :projects, :bio, :text
  end
end
