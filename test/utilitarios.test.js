const Utilitarios = require('../src/utilitarios');
const util = new Utilitarios();

describe('Cobertura de testes da classe Utilitarios', () => {
    test('deve inverter uma string', () => {
        expect(util.inverterString('abc')).toBe('cba');
    });

    test('deve contar corretamente os caracteres de uma string', () => {
        expect(util.contarCaracteres('hello')).toBe(5);
    });

    test('deve converter uma string para letras maiúsculas', () => {
        expect(util.paraMaiusculas('abc')).toBe('ABC');
    });

    test('deve converter uma string para letras minúsculas', () => {
        expect(util.paraMinusculas('ABC')).toBe('abc');
    });

    test('deve capitalizar a primeira letra de uma string', () => {
        expect(util.primeiraLetraMaiuscula('nicolas')).toBe('Nicolas');
    });

    test('deve somar dois números corretamente', () => {
        expect(util.somar(2, 3)).toBe(5);
    });

    test('deve subtrair dois números corretamente', () => {
        expect(util.subtrair(5, 2)).toBe(3);
    });

    test('deve multiplicar dois números corretamente', () => {
        expect(util.multiplicar(4, 3)).toBe(12);
    });

    test('deve dividir dois números corretamente e lançar erro ao dividir por zero', () => {
        expect(util.dividir(10, 2)).toBe(5);
        expect(() => util.dividir(5, 0)).toThrow('Divisão por zero');
    });

    test('deve verificar se um número é par', () => {
        expect(util.ehPar(4)).toBe(true);
        expect(util.ehPar(5)).toBe(false);
    });

    test('deve retornar o primeiro elemento de um array', () => {
        expect(util.primeiroElemento([1, 2, 3])).toBe(1);
    });

    test('deve retornar o último elemento de um array', () => {
        expect(util.ultimoElemento([1, 2, 3])).toBe(3);
    });

    test('deve retornar o tamanho de um array', () => {
        expect(util.tamanhoArray([1, 2, 3])).toBe(3);
    });

    test('deve ordenar um array de strings em ordem alfabética', () => {
        expect(util.ordenarArray(['c', 'a', 'b'])).toEqual(['a', 'b', 'c']);
    });

    test('deve inverter a ordem dos elementos de um array', () => {
        expect(util.inverterArray([1, 2, 3])).toEqual([3, 2, 1]);
    });

    test('deve verificar se o valor fornecido é um número', () => {
        expect(util.ehNumero(42)).toBe(true);
        expect(util.ehNumero('42')).toBe(false);
    });

    test('deve remover espaços em branco no início e no fim da string', () => {
        expect(util.removerEspacos('  texto  ')).toBe('texto');
    });

    test('deve repetir uma string o número especificado de vezes', () => {
        expect(util.repetirTexto('hi', 3)).toBe('hihihi');
    });

    test('deve juntar os elementos de um array usando o separador fornecido', () => {
        expect(util.juntarArray(['a', 'b', 'c'], '-')).toBe('a-b-c');
    });

    test('deve contar o número de palavras em uma string', () => {
        expect(util.contarPalavras('Olá mundo bonito')).toBe(3);
    });

    test('deve calcular a média dos valores de um array e retornar 0 se estiver vazio', () => {
        expect(util.mediaArray([2, 4, 6])).toBe(4);
        expect(util.mediaArray([])).toBe(0);
    });

    test('deve remover valores duplicados de um array', () => {
        expect(util.removerDuplicados([1, 2, 2, 3])).toEqual([1, 2, 3]);
    });

    test('deve verificar se uma string é um palíndromo', () => {
        expect(util.ehPalindromo('arara')).toBe(true);
        expect(util.ehPalindromo('Nicolas')).toBe(false);
    });

    test('deve mesclar dois objetos em um único objeto', () => {
        expect(util.mesclarObjetos({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
    });
})
