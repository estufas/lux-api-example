export function up(schema) {
  return schema.createTable('ads', table => {
    table.increments('id');
    table.string('title');
    table.string('content');
    table.string('image');
    table.timestamps();

    table.index([
      'id',
      'created_at',
      'updated_at'
    ]);
  });
}

export function down(schema) {
  return schema.dropTable('ads');
}
