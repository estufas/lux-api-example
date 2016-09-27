export function up(schema) {
  return schema.createTable('articles', table => {
    table.increments('id');
    table.string('title');
    table.text('content');
    table.boolean('published');
    table.timestamps();

    table.index([
      'id',
      'created_at',
      'updated_at'
    ]);
  });
}

export function down(schema) {
  return schema.dropTable('articles');
}
