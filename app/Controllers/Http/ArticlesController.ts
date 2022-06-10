import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Article from 'App/Models/Article'

export default class ArticlesController {
  public async index({}: HttpContextContract) {
    const articles = await Article.all()
    return articles
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
