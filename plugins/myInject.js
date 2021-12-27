class MyInject {
  constructor (ctx) {
    this.app = ctx.app
  }

  // i18nページタイトル変換
  pageTitle (routeName) {
    const jsonPath = `pages.${routeName.replace(/-/g, '.')}`
    const title = this.app.i18n.t(jsonPath)
    return title
  }
}

export default ({ app }, inject) => {
  inject('my', new MyInject({ app }))
}
