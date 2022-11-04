class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :icon
      t.string :link

      t.timestamps
    end
  end
end
