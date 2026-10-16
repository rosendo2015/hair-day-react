# 📋 Diretrizes e Regras do Projeto HairDay

Este documento serve como **cérebro dos agentes de IA** para orientar o desenvolvimento da aplicação HairDay, primeiro desafio da formação React 2025.

---

## 🎯 Objetivo

Construir uma aplicação de agendamentos para um salão chamada **HairDay**, praticando conceitos fundamentais do React:

- Estados
- Imutabilidade
- Listas
- Propriedades
- Componentização

---

## 🏗️ Estrutura Inicial

- Criar projeto com **Vite + Typescript**.
- Componentes principais:
  - **Sidebar** → adicionar novos agendamentos.
  - **Listagem de agendamentos** → exibir agendamentos agrupados por período.

---

## ⚙️ Funcionalidades Obrigatórias

### ➕ Adicionar agendamento

- Inputs: **data**, **horário**, **nome do cliente**.
- Botão "Agendar" adiciona o agendamento à lista.
- Exibição imediata na interface com:
  - Horário
  - Nome do cliente
  - Botão de lixeira (excluir)

### 🗑️ Remover agendamento

- Usuário pode excluir qualquer agendamento.
- Lista atualizada automaticamente após remoção.

### 📊 Períodos

Agrupamento dos agendamentos:

- **Manhã** → 9h às 12h
- **Tarde** → 13h às 18h
- **Noite** → 19h às 21h

Mensagem de estado vazio:

> "Você ainda não tem agendamentos cadastrados nesse período."

---

## 🔄 Estados e Manipulação

- Usar **React useState** para armazenar lista de agendamentos.
- Cada agendamento é um objeto:
  ```ts
  {
    id: string;
    cliente: string;
    data: string;
    horario: string;
  }
  ```
