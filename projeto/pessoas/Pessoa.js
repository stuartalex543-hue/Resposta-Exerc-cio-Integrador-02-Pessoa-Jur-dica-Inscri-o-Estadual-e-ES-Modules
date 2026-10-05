// pessoas/Pessoa.js

class Pessoa
   {
      #nome;
      #email;

      constructor(nome, email)
        {
          this.#nome = '';
          this.#email = '';

          this.setNome(nome);
          this.setEmail(email);
        }

      setNome(nome)
        {
          if (typeof nome === 'string' && nome.trim() !== '')
            {
              this.#nome = nome.trim();
              return true;
            }

          return false;
        }

      getNome()
        {
          return this.#nome;
        }

      setEmail(email)
        {
          if
            (
              typeof email === 'string' &&
              email.includes('@')
            )
          {
            this.#email = email.trim();
            return true;
            }

          return false;
        }

      getEmail()
        {
          return this.#email;
        }
    }

export default Pessoa;