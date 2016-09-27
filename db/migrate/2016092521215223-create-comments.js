export function up(schema) {
  return schema.createTable('comments', table => {
    table.increments('id');
    table.string('author');
    table.string('content');
    table.timestamps();

    table.index([
      'id',
      'created_at',
      'updated_at'
    ]);
  });
}

export function down(schema) {
  return schema.dropTable('comments');
}
