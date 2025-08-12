# Projeto EXPO - Documentação

Passo a passo para criar projeto EXPO. 

## 1) Pré-requisitos

- **Sistema**: Windows, macOS ou Linux.
- **Node.js**: use a última versão estável (LTS).
- **Editor**: VS Code (recomendado).
- **Conta Expo**: opcional, mas necessário para desenvolvimentos mais profundos.

<hr>

## 2) Conferir versões instaladas

No terminal:

```bash
node -v   # versão do Node
npm -v    # versão do npm
npx -v    # versão do npx
```

Se não aparecer versão, instale o Node.

<hr>

## 3) Instalar o Node.js

- Baixe o instalador LTS em: [https://nodejs.org](https://nodejs.org)
- Instale, feche e reabra o terminal.
- Confira:

```bash
node -v
npm -v
```

<hr>

## 4) Android/iOS para rodar o app

- **Android**: instale o Android Studio e crie um emulador no AVD Manager.
- **iOS** (macOS): instale o Xcode e abra o simulador.
- **Celular físico**: instale o app **Expo Go** na loja do seu aparelho.

<hr>

## 5) Criar o projeto Expo

```bash
npx create-expo-app@latest meu-app
cd meu-app
npm run start
```

No terminal interativo do Expo:

- **a** → Android
- **i** → iOS (macOS)
- ou escaneie o QR Code no Expo Go.

<hr>

## 6) Estrutura do projeto (básico)

```
meu-app/
├─ app/         # Rotas e telas
├─ assets/      # Imagens e fontes
├─ package.json # Scripts e dependências
└─ app.json     # Configurações Expo
```

Em alguns templates, há `App.tsx` na raiz em vez de `app/`.

