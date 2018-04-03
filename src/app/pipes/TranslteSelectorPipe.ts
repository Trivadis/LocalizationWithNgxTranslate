import { Pipe, PipeTransform } from '@angular/core';

/**
 * Usage in translation json files:
 * - en.json (key: value):
 * "found results": "=0 {No results} =1 {One result} >1 {{{count}} results found}",
 * - sk.json (key: value):
 * "found results": "=0 {Žiadne výsledky} =1 {Jeden výsledok} <5 {{{count}} výsledky} other {{{count}} nájdených záznamov}"
 *
 * Usage in component:
 * {{'found results' | translate:{count: cnt} | translateSelector:cnt}}
 *
 * Results:
 * If cnt = 0: No results (en) Žiadne výsledky (sk)
 * If cnt = 7: 7 results found (en) 7 nájdených záznamov (sk)
 */
@Pipe({
  name: 'translateSelector'
})

export class TranslateSelectorPipe implements PipeTransform {

  transform(text: string, value: string | number): string {
    const match = text.match(/(([=<>][^}]+|other|else) ?{([^}]+))}/g);
    if (match) {
      const ret = match.map(
        m => m.match(/([=<>oe]) ?([^{]+) ?{([^}]+)}/)
      ).find(
        f => this.evalCondition(value, f[1], f[2].trim())
        );
      if (ret) { return ret[3]; }
    }
    return text;
  }

  private evalCondition(
    left: number | string,
    operator: string,
    right: string): boolean {

    if (['o', 'e'].includes(operator)) { return true; }

    const strings = typeof left === 'string';
    left = left.toString();
    const leftNumber: number = Number.parseInt(left);
    const rightNumber = Number.parseInt(right);

    if (strings && ['<', '>'].includes(operator)) {
      return false;
    } else if (!strings && (Number.isNaN(leftNumber) || Number.isNaN(rightNumber))) {
      return false;
    }
    switch (operator) {
      case '=': return strings ? left === right : leftNumber === rightNumber;
      case '<': return leftNumber < rightNumber;
      case '>': return leftNumber > rightNumber;
    }
    return false;
  }
}