import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Articles extends BaseSchema {
  protected tableName = 'articles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.string('title')
      table.text('content')
      table.dateTime('publish_date')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
