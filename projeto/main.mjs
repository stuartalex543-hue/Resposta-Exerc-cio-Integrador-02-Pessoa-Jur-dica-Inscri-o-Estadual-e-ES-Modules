// main.mjs

import PJ from './pessoas/PJ.mjs';

import IEclss, {
    IEfunc,
    IEjson
} from './objetos/IE.mjs';


// ======================================================
// FUNÇÃO AUXILIAR
// ======================================================

function mostrarIE(ie)
  {

    console.log('----------------------------------------');

    console.log
      (
        `Número: ${ie.getNumero()}`
      );

    console.log
      (
        `Estado: ${ie.getEstado()}`
      );

    const data = ie.getDataRegistro();

    if (data instanceof Date)
      {
        console.log
          (
            `Data de Registro: ${data.toLocaleString('pt-BR')}`
          );
      }
    else
      {
        console.log
          (
            'Data de Registro: Não informada'
          );
      }

    const pj = ie.getPJ();

    if (pj instanceof PJ)
      {
        console.log
          (
            `Pessoa Jurídica: ${pj.getRazaoSocial()}`
          );

        console.log
          (
            `CNPJ: ${pj.getCNPJ()}`
          );
      }
        else
          {
            console.log
              (
                'Pessoa Jurídica: Não associada'
              );
          }

    console.log('----------------------------------------');
    console.log(' ');
  }


// ======================================================
// 1. CRIAÇÃO DAS PESSOAS JURÍDICAS
// ======================================================

console.log('\n========================================');
console.log('       PESSOAS JURÍDICAS');
console.log('========================================\n');


const pj1 = new PJ
  (
    'Empresa Tecnologia Brasil',
    'contato@tecnologia.com',
    '12.345.678/0001-90',
    'Empresa Tecnologia Brasil LTDA'
  );


const pj2 = new PJ
  (
    'Instituto Educação Digital',
    'contato@ieducacao.com',
    '98.765.432/0001-10',
    'Instituto Educação Digital LTDA'
  );


// ======================================================
// 2. TESTANDO MÉTODOS HERDADOS
// ======================================================

console.log('--- Métodos herdados de Pessoa ---');

console.log
  (
    'Nome PJ1:',
    pj1.getNome()
  );

console.log
  (
    'E-mail PJ1:',
    pj1.getEmail()
  );

console.log
  (
    'Nome PJ2:',
    pj2.getNome()
  );

console.log
  (
    'E-mail PJ2:',
    pj2.getEmail()
  );


// ======================================================
// 3. TESTANDO MÉTODOS PRÓPRIOS DE PJ
// ======================================================

console.log('\n--- Dados próprios de PJ ---');

console.log
  (
    'CNPJ PJ1:',
    pj1.getCNPJ()
  );

console.log
  (
    'Razão Social PJ1:',
    pj1.getRazaoSocial()
  );

console.log
  (
    'CNPJ PJ2:',
    pj2.getCNPJ()
  );

console.log
  (
    'Razão Social PJ2:',
    pj2.getRazaoSocial()
  );


// ======================================================
// 4. TESTE DO DESAFIO DO CNPJ
// ======================================================

console.log('\n--- Teste de CNPJ ---');

console.log
  (
    'CNPJ válido:',
    pj1.setCNPJ('11.222.333/0001-44')
  );

console.log
  (
    'CNPJ inválido:',
    pj1.setCNPJ('123')
  );

console.log
  (
    'CNPJ atual:',
    pj1.getCNPJ()
  );


// ======================================================
// 5. OBJETOS DATE
// ======================================================

const data1 = new Date(2026, 9, 4, 10, 30);

const data2 = new Date(2026, 9, 4, 14, 45);

const data3 = new Date(2026, 9, 4, 16, 20);


// ======================================================
// 6. IEclss
// ======================================================

console.log('\n========================================');
console.log('           IEclss');
console.log('========================================\n');

const ie1 = new IEclss
  (
    '110.042.490.114',
    'SP',
    data1
  );

console.log
  (
    'Associando PJ1:',
    ie1.setPJ(pj1)
  );

mostrarIE(ie1);


// ======================================================
// 7. IEfunc
// ======================================================

console.log('\n========================================');
console.log('           IEfunc');
console.log('========================================\n');

const ie2 = IEfunc
  (
    '123.456.789.000',
    'GO',
    data2
  );

console.log
  (
    'Associando PJ2:',
    ie2.setPJ(pj2)
  );

mostrarIE(ie2);


// ======================================================
// 8. IEjson
// ======================================================

console.log('\n========================================');
console.log('           IEjson');
console.log('========================================\n');

IEjson.setNumero('987.654.321.000');

IEjson.setEstado('DF');

IEjson.setDataRegistro(data3);

console.log
  (
    'Associando PJ1:',
    IEjson.setPJ(pj1)
  );

mostrarIE(IEjson);


// ======================================================
// 9. TESTE COM OBJETO INVÁLIDO
// ======================================================

console.log('\n========================================');
console.log('       TESTE instanceof');
console.log('========================================\n');

const objetoInvalido =
  {
    nome: 'Empresa Inválida'
  };


console.log
  (
    'IEclss com objeto inválido:',
    ie1.setPJ(objetoInvalido)
  );

console.log
  (
    'IEfunc com objeto inválido:',
    ie2.setPJ(objetoInvalido)
  );

console.log
  (
    'IEjson com objeto inválido:',
    IEjson.setPJ(objetoInvalido)
  );


// ======================================================
// 10. TESTE COM OBJETO PJ VÁLIDO
// ======================================================

console.log('\n--- Teste com PJ verdadeiro ---');

console.log
  (
    'IEclss com PJ:',
    ie1.setPJ(pj1)
  );

console.log
  (
    'IEfunc com PJ:',
    ie2.setPJ(pj2)
  );

console.log
  (
    'IEjson com PJ:',
    IEjson.setPJ(pj1)
  );


// ======================================================
// 11. TESTE DO DESAFIO EXTRA 2
// ======================================================

console.log('\n========================================');
console.log('       DESAFIO EXTRA 2');
console.log('========================================\n');

console.log
  (
    'IEclss →',
    ie1.getPJ().getRazaoSocial()
  );

console.log
  (
    'IEfunc →',
    ie2.getPJ().getRazaoSocial()
  );

console.log
  (
    'IEjson →',
    IEjson.getPJ().getRazaoSocial()
  );


// ======================================================
// 12. RELATÓRIO FINAL
// ======================================================

console.log('\n========================================');
console.log('             RELATÓRIO FINAL');
console.log('========================================\n');


console.log('=== Pessoa Jurídica 1 ===');

console.log
  (
    `Nome: ${pj1.getNome()}`
  );

console.log
  (
    `E-mail: ${pj1.getEmail()}`
  );

console.log
  (
    `CNPJ: ${pj1.getCNPJ()}`
  );

console.log
  (
    `Razão Social: ${pj1.getRazaoSocial()}`
  );


console.log('\n=== Pessoa Jurídica 2 ===');

console.log
  (
    `Nome: ${pj2.getNome()}`
  );

console.log
  (
    `E-mail: ${pj2.getEmail()}`
  );

console.log
  (
    `CNPJ: ${pj2.getCNPJ()}`
  );

console.log
  (
    `Razão Social: ${pj2.getRazaoSocial()}`
  );


console.log('\n=== Inscrição Estadual — IEclss ===');

mostrarIE(ie1);


console.log('\n=== Inscrição Estadual — IEfunc ===');

mostrarIE(ie2);


console.log('\n=== Inscrição Estadual — IEjson ===');

mostrarIE(IEjson);