function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.imagem} alt={props.imagem} />
            </div>
            <div class="usuario">
                {props.usuario}
            </div>
        </div>
    )
}

function Stories() {
    return (
        <div class="stories">
            <Story imagem="assets/img/9gag.svg" usuario="9gag" />
            <Story imagem="assets/img/meowed.svg" usuario="meowed" />
            <Story imagem="assets/img/barked.svg" usuario="barked" />
            <Story imagem="assets/img/nathanwpylestrangeplanet.svg" usuario="nathanwpylestrangeplanet" />
            <Story imagem="assets/img/wawawicomics.svg" usuario="wawawicomics" />
            <Story imagem="assets/img/respondeai.svg" usuario="respondeai" />
            <Story imagem="assets/img/filomoderna.svg" usuario="filomoderna" />
            <Story imagem="assets/img/memeriagourmet.svg" usuario="memeriagourmet" />

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
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
                    <img src={props.imgPrincipalCurtida} alt={props.imgPrincipalCurtida} />
                    <div class="texto">
                        Curtido por <strong>{props.userCurtidaPrincipal}</strong> e <strong>{props.infosNumCurtidas}</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Posts() {
    return (
        <div class="posts">
            <Post imagem="assets/img/meowed.svg" usuario="meowed" imgPostagem="assets/img/gato-telefone.svg" imgPrincipalCurtida="assets/img/respondeai.svg" userCurtidaPrincipal="respondeai" infosNumCurtidas="outras 101.523 pessoas" />
            <Post imagem="assets/img/barked.svg" usuario="barked" imgPostagem="assets/img/dog.svg" imgPrincipalCurtida="assets/img/adorable_animals.svg" userCurtidaPrincipal="adorable_animals" infosNumCurtidas="outras 99.159 pessoas" />
        </div>
    )
}

function CorpoEsquerda() {
    return (
        <div class="esquerda">
            <Stories />
            <Posts />
        </div>
    )
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
    )
}

function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.imagemUsuarioSugerido} alt={props.imagemUsuarioSugerido}/>
                <div class="texto">
                    <div class="nome">{props.nomeUsuarioSugerido}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}

function Sugestoes() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            <Sugestao imagemUsuarioSugerido="assets/img/bad.vibes.memes.svg" nomeUsuarioSugerido="bad.vibes.memes"/>
            <Sugestao imagemUsuarioSugerido="assets/img/chibirdart.svg" nomeUsuarioSugerido="chibirdart"/>
            <Sugestao imagemUsuarioSugerido="assets/img/razoesparaacreditar.svg" nomeUsuarioSugerido="razoesparaacreditar"/>
            <Sugestao imagemUsuarioSugerido="assets/img/adorable_animals.svg" nomeUsuarioSugerido="adorable_animals"/>
            <Sugestao imagemUsuarioSugerido="assets/img/smallcutecats.svg" nomeUsuarioSugerido="smallcutecats"/>
        </div>
    )
}

function Sidebar() {
    return (
        <div class="sidebar">
            <Usuario />
            <Sugestoes />

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

export default function Corpo() {
    return (
        <div class="corpo">
            <CorpoEsquerda />
            <Sidebar />
        </div>
    )
}