FROM node:24.1.0

WORKDIR /workspace

RUN corepack enable && corepack prepare pnpm@latest --activate

RUN apt-get update && apt-get install -y \
  git \
  zsh \
  curl \
  wget \
  unzip \
  fonts-powerline \
  && apt-get upgrade -y \
  && rm -rf /var/lib/apt/lists/*

ENV HOME /root

RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended && \
  chsh -s $(which zsh) && \
  echo 'ZSH_THEME="agnoster"' >> $HOME/.zshrc && \
  echo 'export PATH=$PATH:/workspace/node_modules/.bin' >> $HOME/.zshrc && \
  echo 'autoload -U +X compinit && compinit' >> $HOME/.zshrc

SHELL ["/bin/zsh", "-c"]

# Optional: pnpm completion
RUN pnpm completion zsh >> $HOME/.zshrc
