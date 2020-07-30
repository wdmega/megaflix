import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Menu/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategoria] = useState([]);
  const [values, setValues] = useState(valoresIniciais);
  // Values é nossa variável
  // setValues é a função que mudará o nome
  // useState é o valor inicial
  // on change esta recebendo uma função que esta entendendo o que
  // sendo mudado e passando para o useState para que seja alterado na tela

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(event) {
    setValue(event.target.getAttribute('name'),
      event.target.value);
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {' '}
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategoria([
          ...categorias,
          values,
        ]);

        setValues({ valoresIniciais });
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <div>

          <label>
            Descrição da categoria:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>

        </div>

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        {/* <div>

                    <label>
                        Descrição da categoria:
                        <input
                        type = 'color'
                        value = {values.cor}
                        name = 'cor'
                        onChange = {handleChange}/>
                    </label>

                </div> */}

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${categoria}${indice}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
