// pessoas/PJ.mjs

import Pessoa from './Pessoa.js';

class PJ extends Pessoa
  {
    #cnpj;
    #razaoSocial;

    constructor(nome, email, cnpj, razaoSocial)
      {
        super(nome, email);

        this.#cnpj = '';
        this.#razaoSocial = '';

        this.setCNPJ(cnpj);
        this.setRazaoSocial(razaoSocial);
      }

      setCNPJ(cnpj)
        {
          if (typeof cnpj !== 'string')
            {
              return false;
            }

          const cnpjLimpo = cnpj.replace(/[./-]/g, '');

          // CNPJ deve possuir exatamente 14 dígitos
          if (!/^\d{14}$/.test(cnpjLimpo))
            {
              return false;
            }

          this.#cnpj = cnpj;
          return true;
        }

    getCNPJ()
      {
        return this.#cnpj;
      }

    setRazaoSocial(razaoSocial)
      {
        if (
            typeof razaoSocial === 'string' &&
            razaoSocial.trim() !== ''
          )
           {
            this.#razaoSocial = razaoSocial.trim();
            return true;
           }

        return false;
    }

    getRazaoSocial()
      {
        return this.#razaoSocial;
      }
  }

export default PJ;