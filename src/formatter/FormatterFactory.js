import { JsonFormatter } from './JsonFormatter';
import { CssFormatter } from './CssFormatter';
import { HtmlFormatter } from './HtmlFormatter';
import { SqlFormatter } from './SqlFormatter';
import { XmlFormatter } from './XmlFormatter';
import { YamlFormatter } from './YamlFormatter';
import { JavaFormatter } from './JavaFormatter';
import { MarkdownFormatter } from './MarkdownFormatter';

const formatterMap = {
  json: JsonFormatter,
  css: CssFormatter,
  html: HtmlFormatter,
  sql: SqlFormatter,
  xml: XmlFormatter,
  yaml: YamlFormatter,
  java: JavaFormatter,
  md: MarkdownFormatter,
};

export class FormatterFactory {
  static getFormatter(lang) {
    return formatterMap[lang.toLowerCase()] || null;
  }
}
