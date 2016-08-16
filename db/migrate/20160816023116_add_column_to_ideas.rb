class AddColumnToIdeas < ActiveRecord::Migration[5.0]
  def change
    add_column :ideas, :quality, :integer, :default => 0
  end
end
