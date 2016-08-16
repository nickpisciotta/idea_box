class CreateTableIdeas < ActiveRecord::Migration[5.0]
  def change
    create_table :ideas do |t|
      t.string  :title
      t.string  :body
      t.integer :quality, :default => 1

      t.timestamps null: false
    end
  end
end
