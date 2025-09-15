export class ArticleLinkFactory {
  static createArticleLink(article) {
    if (!article || !article.articleUuid) {
      throw new Error('Invalid article object');
    }

    if (article.serialArticle) {
      return this.createSerialArticleLink(article.articleUuid);
    } else {
      return this.createSingleArticleLink(article.articleUuid);
    }
  }

  static createSerialArticleLink(articleUuid) {
    return `/article/serial-article/${articleUuid}`;
  }

  static createSingleArticleLink(articleUuid) {
    return `/article/single-article/${articleUuid}`;
  }

  // Optional: Add more specific factory methods as needed
  static createArticleLinkWithParams(article, additionalParams = {}) {
    const baseLink = this.createArticleLink(article);
    const params = new URLSearchParams(additionalParams).toString();
    return params ? `${baseLink}?${params}` : baseLink;
  }
}

// Optional: Default export for convenience
export default ArticleLinkFactory;