import { Configs } from './formatter.conf';

export class FmtHelp {
  constructor() {}

  /**
   * 描述: 给String打引号
   */
  quoteNormalStr(qtStr: string, conf: Configs, quote: string) {
    const quote_ = conf.isEscape ? `\\${quote}` : quote;
    return fn.match(quote, {
      '\"': () => {
        qtStr = conf.isEscape ? qtStr.replace(/"/mg, '\\\\\\"') : qtStr.replace(/"/mg, '\\"');
        return quote_ + qtStr + quote_;
      },
      '\'': () => {
        qtStr = conf.isEscape ? qtStr.replace(/'/mg, '\\\\\\\'') : qtStr.replace(/'/mg, '\\\'');
        return quote_ + qtStr + quote_;
      }
    });
  }

  /**
   * 描述: 给非正常String打引号
   */
  quoteSpecialStr(qtStr: string, conf: Configs, quoteMt: any) {
    const quote = conf.isStrict ? conf.valQuote : quoteMt.substr(-1);
    qtStr = qtStr.replace(/\\\"/mg, '\"');
    qtStr = this.quoteNormalStr(qtStr, conf, quote);
    if (!conf.isStrict && quoteMt.length > 1) {
      qtStr = quoteMt.substr(0, quoteMt.length - 1) + qtStr;
    }
    return qtStr;
  }

  /**
   * 描述: 判断是否为特殊值
   */
  isSpecialVal(val: any) {
    return val === '' || ['object', 'boolean'].includes(typeof val);
  }

  /**
   * 描述: 获取剩余字符串
   * @param src
   * @param num
   */
  getSrcRest(src: string, num: number = 1): string {
    return src.length > num ? src.substr(num) : '';
  }

  /**
   * 描述: 获取后半引号索引
   * @param quo
   * @param rest
   */
  getNextQuoIdx(quo: string, rest: string): number {
    for (let i = 0; i < rest.length; i ++) {
      if (rest[i] === quo) {
        if (i === 0 || rest[i - 1] !== '\\' || (
          rest[i - 1] === '\\' && rest[i - 2] === '\\' && rest[i - 3] !== '\\'
        )) {
          return i;
        }
      }
    }
    return -1;
  }

  /**
   * 描述: 设置基础缩进值
   * @param conf [Configs]
   */
  setBaseIndent(conf: Configs) {
    let indent = '';
    for (let i = 0; i < conf.indent; i++) {
      indent += conf.sgIndent;
    }
    return indent;
  }

  /**
   * 描述: 根据层数获取缩进值
   * @arg indent [string] 原始缩进值
   * @arg level [number]
   * */
  getCurIndent(indent: string, level: number): string {
    let baseIndent = '';
    for (let i = 0; i < level; i++) {
      baseIndent += indent;
    }
    return baseIndent;
  }

  /**
   * 描述: 获取镜像括号
   * @param brc [string]
   */
  getBraceMir(brc: string) {
    const pre = ['{', '[', '('];
    const end = ['}', ']', ')'];
    const preIdx = pre.indexOf(brc);
    const endIdx = end.indexOf(brc);
    return preIdx > -1 ? end[preIdx] : pre[endIdx];
  }
}
