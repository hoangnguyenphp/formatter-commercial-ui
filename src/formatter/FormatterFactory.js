import { JsonFormatter } from './JsonFormatter';
import { CssFormatter } from './CssFormatter';
import { HtmlFormatter } from './HtmlFormatter';
import { SqlFormatter } from './SqlFormatter';
import { XmlFormatter } from './XmlFormatter';
import { YamlFormatter } from './YamlFormatter';
import { MarkdownFormatter } from './MarkdownFormatter';
import { JSFormatter } from './JSFormatter';

const formatterMap = {
  json: JsonFormatter,
  css: CssFormatter,
  html: HtmlFormatter,
  sql: SqlFormatter,
  xml: XmlFormatter,
  yaml: YamlFormatter,
  md: MarkdownFormatter,
  javascript: JSFormatter,
};

export class FormatterFactory {
  static getFormatter(lang) {
    return formatterMap[lang.toLowerCase()] || null;
  }
}
