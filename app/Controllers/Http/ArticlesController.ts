import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Article from 'App/Models/Article'

export default class ArticlesController {
  public async index(ctx: HttpContextContract) {
    const articles = await Article.all()
    return ctx.view.render('article/index', {articles})
  }

  public async create(ctx: HttpContextContract) {}

  public async store(ctx: HttpContextContract) {}

  public async show(ctx: HttpContextContract) {
    const article = await Article.find(ctx.params.id)
    return ctx.view.render('article/_id', { article })
  }

  public async edit(ctx: HttpContextContract) {}

  public async update(ctx: HttpContextContract) {}

  public async destroy(ctx: HttpContextContract) {}
}
