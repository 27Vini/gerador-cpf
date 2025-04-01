import {describe, it, expect} from 'vitest'
import {gerarDV, validarCpf, gerarCpf} from '../src/index.js'


describe(gerarDV.name, () => {
    it('Lanca excecao se o CPF nao for string', () => {
        expect(() => {
            gerarDV( 123456789 )
        }).toThrow(/string/i)
    } )

    it('deve ter 9 digitos numericos' , () => {
        expect(( ) => {
            gerarDV( '1234567890' )
        }).toThrow(/9/i)

        expect( ( ) => {
            gerarDV('12345678')
        }).toThrow(/9/i)
    })

    it('aceita apenas dígitos numéricos', () => {
        expect(( ) => {
            gerarDV( '12345678A' )
        }).toThrow(/numéricos/i)

        expect(( ) => {
            gerarDV( '12.345.67' )
        }).toThrow(/numéricos/i)
    })

    it('gera o DV corretamente', () => {
        const resultado = gerarDV('062910040')
        expect(resultado).toBe('38')
    })

    it()
})

describe(validarCpf.name, () => {
    it('valida cpf', () => {
        const resultado = validarCpf('06291004038')
        expect(resultado).toBeTruthy()
    })

    it('Lanca excecao se o CPF nao for string', () => {
        expect(() => {
            validarCpf( 123456789 )
        }).toThrow(/string/i)
    } )

    it('deve ter 11 digitos numericos' , () => {
        expect(( ) => {
            validarCpf( '123456789011' )
        }).toThrow(/11/i)

        expect( ( ) => {
            validarCpf('12345678')
        }).toThrow(/11/i)
    })

    it('aceita apenas dígitos numéricos', () => {
        expect(( ) => {
            validarCpf( '12345678A12' )
        }).toThrow(/numéricos/i)

        expect(( ) => {
            validarCpf('12.345.67.1')
        }).toThrow(/numéricos/i)
    })
})

describe(gerarCpf.name, () => {
    it('testa geracao de cpf correto', () => {
        expect(validarCpf(gerarCpf())).toBeTruthy()
    })
})
