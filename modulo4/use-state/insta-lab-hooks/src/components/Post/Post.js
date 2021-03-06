import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'




const Post = (props) => {
  const [curtido, setCurtida] = useState(false);
  const [numeroCurtidas, setNumeroCurtidas] = useState(0);
  const [icone, setIcone] = useState(iconeCoracaoBranco)
  const [comentado, setComentado] = useState(false);
  const [numeroComentarios, setNumeroComentarios] = useState(0);
  const [comentarios, setComentarios] = useState([]);

  const onClickCurtida = () => {
    if(curtido){
      setIcone(iconeCoracaoBranco);
      setCurtida(!curtido);
      setNumeroCurtidas(numeroCurtidas - 1);
    }
    else{
      setIcone(iconeCoracaoPreto);
      setCurtida(!curtido);
      setNumeroCurtidas(numeroCurtidas + 1);
    }
  };

  const onClickComentario = () => {
    setComentado(!comentado)

  };

  const enviarComentario = (comentario) => {
    const listaDeComentarios = [...comentarios, comentario]

    setComentarios(listaDeComentarios);
    setComentado(false)
    setNumeroComentarios(numeroComentarios + 1)
  }

  const caixaDeComentario = comentado ?( 
    <SecaoComentario enviarComentario={enviarComentario} />):
    (
      comentarios.map((comentario, indice) => {
        return(
          <CommentContainer key={indice}>
            <p>{comentario}</p>
          </CommentContainer>
        )
      })
    )

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={icone}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  )
}

export default Post