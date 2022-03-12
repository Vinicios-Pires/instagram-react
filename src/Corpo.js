import { stories, posts, sugestoes } from "./Dados";

function Story({ imagem, usuario }) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={imagem} alt={imagem} />
      </div>
      <div class="usuario">{usuario}</div>
    </div>
  );
}

function Stories() {
  return (
    <div class="stories">
      {stories.map(({ imagem, usuario }) => (
        <Story imagem={imagem} usuario={usuario} />
      ))}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

function Post(props) {
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imagem} alt={props.imagem} />
          {props.usuario}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.imgPostagem} alt={props.imgPostagem} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img
            src={props.imgPrincipalCurtida}
            alt={props.imgPrincipalCurtida}
          />
          <div class="texto">
            Curtido por <strong>{props.userCurtidaPrincipal}</strong> e{" "}
            <strong>{props.infosNumCurtidas}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

function Posts() {
  return (
    <div class="posts">
      {posts.map((post) => (
        <Post
          imagem={post.imagem}
          usuario={post.usuario}
          imgPostagem={post.imgPostagem}
          imgPrincipalCurtida={post.imgPrincipalCurtida}
          userCurtidaPrincipal={post.userCurtidaPrincipal}
          infosNumCurtidas={post.infosNumCurtidas}
        />
      ))}
    </div>
  );
}

function CorpoEsquerda() {
  return (
    <div class="esquerda">
      <Stories />
      <Posts />
    </div>
  );
}

function Usuario() {
  return (
    <div class="usuario">
      <img src="assets/img/catanacomics.svg" />
      <div class="texto">
        <strong>catanacomics</strong>
        Catana
      </div>
    </div>
  );
}

function Sugestao({ imagemUsuarioSugerido, nomeUsuarioSugerido }) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={imagemUsuarioSugerido} alt={imagemUsuarioSugerido} />
        <div class="texto">
          <div class="nome">{nomeUsuarioSugerido}</div>
          <div class="razao">Segue você</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}

function Sugestoes() {
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugestoes.map(({ imagemUsuarioSugerido, nomeUsuarioSugerido }) => (
        <Sugestao
          imagemUsuarioSugerido={imagemUsuarioSugerido}
          nomeUsuarioSugerido={nomeUsuarioSugerido}
        />
      ))}
    </div>
  );
}

function Sidebar() {
  return (
    <div class="sidebar">
      <Usuario />
      <Sugestoes />

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}

export default function Corpo() {
  return (
    <div class="corpo">
      <CorpoEsquerda />
      <Sidebar />
    </div>
  );
}
