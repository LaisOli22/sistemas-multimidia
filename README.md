# 🍩 Donut Shop - Visualizador 3D

Um projeto interativo de visualização 3D de uma loja de donuts construído com **Three.js**, **Vite** e **GSAP** para animações suaves.

## 📋 Sobre o Projeto

Este projeto é uma experiência web imersiva que exibe modelos 3D de donuts (comum e chocolate) em um ambiente interativo. Os usuários podem:

- 🎯 Rotacionar, fazer zoom e explorar os modelos 3D usando o mouse
- 🎨 Visualizar diferentes texturas e materiais dos donuts
- ✨ Desfrutar de animações suaves na interface
- 📱 Experiência responsiva em diferentes tamanhos de tela

## 🛠️ Tecnologias Utilizadas

- **[Three.js](https://threejs.org/)** - Biblioteca 3D WebGL
- **[Vite](https://vitejs.dev/)** - Build tool moderno e rápido
- **[GSAP](https://greensock.com/gsap/)** - Biblioteca de animações
- **[OrbitControls](https://threejs.org/docs/#examples/en/controls/OrbitControls)** - Controle de câmera interativa
- **[GLTFLoader](https://threejs.org/docs/#examples/en/loaders/GLTFLoader)** - Carregador de modelos 3D

## 📦 Estrutura do Projeto

```
.
├── index.html              # HTML principal
├── main.js                 # Arquivo principal do projeto
├── style.css               # Estilos gerais
├── vite.config.js          # Configuração do Vite
├── package.json            # Dependências e scripts
├── assets/                 # Recursos do projeto
│   ├── donut/              # Modelo do donut comum
│   │   ├── scene.gltf      # Modelo 3D
│   │   ├── textures/       # Texturas (metallic, roughness, etc)
│   │   └── license.txt
│   ├── chocolate_donut/    # Modelo do donut de chocolate
│   │   ├── scene.gltf      # Modelo 3D
│   │   ├── textures/       # Texturas específicas
│   │   └── license.txt
│   └── *.png               # Imagens de suporte
└── public/                 # Arquivos estáticos
    └── style.css
```

## 🚀 Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) (v16 ou superior)
- npm ou yarn

### Instalação

1. **Clone ou acesse o diretório do projeto:**
   ```bash
   cd c:\Documents\vite-project
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

### Executar em Desenvolvimento

Para iniciar o servidor de desenvolvimento com hot-reload:

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173` (ou na porta que o Vite indicar).

## 🎮 Como Usar

1. **Rotacionar a câmera**: Clique e arraste o mouse pela cena
2. **Zoom**: Use a roda do mouse para aproximar/afastar
3. **Panorâmica**: Desativada por padrão, mas pode ser ativada com teclas
4. **Clique no botão**: Interaja com o botão "CLIQUE" para testar funcionalidades

## 🎨 Características Principais

### Modelos 3D
- **Donut Comum**: Modelo com texturas detalhadas de material metálico e roughness
- **Donut de Chocolate**: Versão com especificações de material específicas

### Iluminação
- Luz direcional (5, 10, 15)
- Luz ambiente para iluminação geral

### Animações
- Auto-rotação dos donuts
- Animações GSAP na navegação e conteúdo
- Transições suaves na interface

### Interatividade
- Câmera controlável com mouse (OrbitControls)
- Auto-rotação contínua
- Zoom responsivo
- Responsividade ao redimensionar a janela

## 📱 Responsividade

O projeto se adapta automaticamente a diferentes tamanhos de tela. O canvas é redimensionado quando a janela muda de tamanho.

## Troubleshooting

### Modelos não aparecem
- Verifique se os arquivos GLTF estão em `assets/donut/` e `assets/chocolate_donut/`
- Confirme que os arquivos de texturas estão nos diretórios `textures/`

### Performance baixa
- Reduza a complexidade dos modelos 3D
- Ajuste `autoRotateSpeed` em main.js para valores menores
- Teste em uma máquina com GPU dedicada

## 📝 Notas Importantes

- Este projeto usa modelos 3D em formato GLFT
- As texturas utilizam mapas de normal, metallicRoughness e baseColor
- O projeto é otimizado para navegadores modernos com suporte a WebGL

## 🔗 Recursos Úteis

- [Documentação Three.js](https://threejs.org/docs/)
- [Guia Vite](https://vitejs.dev/guide/)
- [GSAP Documentation](https://greensock.com/docs/)
- [WebGL Support](https://caniuse.com/webgl)

