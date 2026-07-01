# Diretrizes de Desenvolvimento UI/UX Corporativo

## Stack Tecnológico Principal

- React com TypeScript (via Vite).
- Tailwind CSS para estilização utilitária.
- Arquitetura de componentes preparada para consumo de APIs RESTful.

## 1. Análise Crítica Preliminar

- Antes de gerar qualquer código, execute uma análise crítica rigorosa dos artefatos fornecidos na pasta `design-assets`.
- Avalie a viabilidade técnica do design proposto no arquivo PSD.
- Verifique se há discrepâncias estruturais entre o escopo/regras de negócio documentados no arquivo PDF e a interface visual do PSD.

## 2. Metodologia de Design-to-Code

- Extraia a hierarquia de camadas, dimensões e propriedades visuais do arquivo PSD via ferramentas do servidor MCP.
- Estruture a fundação do design system: identifique cores primárias, secundárias, espaçamentos padronizados e tipografia, mapeando tudo no arquivo `tailwind.config.js`.

## 3. Injeção de Contexto e Negócios

- Cruze a estrutura visual extraída do PSD com o contexto e os textos originais fornecidos no arquivo PDF.
- É estritamente proibido o uso de textos genéricos (como "Lorem Ipsum"). Utilize o conteúdo do PDF para preencher os dados reais dos componentes gerados.
- Se o PDF ditar comportamentos específicos para formulários, botões ou fluxos de usuário, implemente a lógica visual correspondente.

## 4. Estruturação de Código

- Para cada bloco semântico do design, crie um componente funcional isolado e tipado dentro de `frontend/src/components`.
- Aplique o conceito de Mobile-First: garanta que a interface seja fluida e responsiva, inferindo o comportamento em telas menores mesmo que o PSD apresente apenas a versão Desktop.
- Mantenha o código limpo, modular e com separação clara entre a camada de apresentação visual e a lógica de estado.

## 5. Mapeamento Dinâmico de Skills (Roteamento de Inteligência)

Este projeto possui 24 skills instaladas no diretório `.claude/skills/`. Para manter a eficiência do contexto, você (agente IA) deve atuar como um "Maestro" e ler automaticamente os arquivos de skill **apenas quando o contexto da solicitação exigir**, seguindo o mapeamento abaixo:

- **Design, UI/UX e Front-end:** Leia `.claude/skills/ui-ux-pro-max/SKILL.md`, `.claude/skills/ui-styling/SKILL.md`, `.claude/skills/design-system/SKILL.md` ou `.claude/skills/frontend-design/SKILL.md`.
- **Marca e Identidade Visual:** Leia `.claude/skills/brand/SKILL.md`, `.claude/skills/brand-guidelines/SKILL.md` ou `.claude/skills/theme-factory/SKILL.md`.
- **Processamento de Arquivos/Documentos:** Leia `.claude/skills/pdf/SKILL.md`, `.claude/skills/pptx/SKILL.md`, `.claude/skills/docx/SKILL.md` ou `.claude/skills/xlsx/SKILL.md`.
- **APIs e Configuração Avançada (MCP/Web):** Leia `.claude/skills/claude-api/SKILL.md`, `.claude/skills/mcp-builder/SKILL.md`, `.claude/skills/web-artifacts-builder/SKILL.md` ou `.claude/skills/webapp-testing/SKILL.md`.
- **Criação de Novas Skills:** Leia `.claude/skills/skill-creator/SKILL.md`.
- **Arte e Banners Específicos:** Leia `.claude/skills/canvas-design/SKILL.md`, `.claude/skills/banner-design/SKILL.md` ou `.claude/skills/algorithmic-art/SKILL.md`.
- **Comunicação e Documentação:** Leia `.claude/skills/doc-coauthoring/SKILL.md`, `.claude/skills/internal-comms/SKILL.md` ou `.claude/skills/slack-gif-creator/SKILL.md`.

*Regra de Ouro:* Não carregue todas as skills de uma vez. Identifique a intenção do prompt e leia o arquivo correspondente listado acima para executar a tarefa com maestria.
