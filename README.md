# React task: UseContext()

- Due: **_29.10.26_** by 11:59pm

  Canvas link:
  "https://jobloop.instructure.com/courses/557/assignments/11972"

# My thought:

1. Keep class notes and teachers repo about to-do list and useContext at hand! Will be needed...
2. Make base setup, clear everything from installing vite that's not needed. []
3. Fix folder system and add context and components folders. []
4. Create context for ToDo list. []
5. Build provider component, wrap the application in the provider. []
6. Create custom hook(function) to utilize the context and provider. []
7. Create ToDo input-form component and card to store the created tasks. []
8. Create the Light-Dark theme toggle with useCOntext as well, note -> wrap everythin gin application inside it, icluding the toDoProvider. []
9. Css styling! Do some as you go add details later.
10. cleanup comments, notes and DRY the code as much as possible. []

## Assignment text(Norwegian for now):

I denne oppgaven skal du øve på hvordan man bruker useContext og Context API for å dele data på tvers av flere komponenter. Målet er at du skal forstå hvordan man:

- Oppretter en Context
- Lager en Provider som gir global tilgang til data
- Konsumerer data med useContext i ulike komponenter
- Oppdaterer delt state fra flere steder i appen

### Oppgaven består av to deler:

1. TodoApp – global todo-liste der alle komponenter deler samme state.
2. ThemeSwitcher – global lys/mørk-modus.

Ha det gøy — og husk: ingen prop drilling! 😊

## TodoApp med ThemeSwitcher

Lag en liten todo-applikasjon der alle komponenter deler samme state gjennom useContext.
Ingen props skal sendes mellom komponenter.

### TodoApp - Context & Provider:

Lag TodoContext med:

- todos – en array av objekter:
  { id: number, text: string, done: boolean }
- addTodo(text) – legger til en ny todo
- toggleTodo(id) – flipper done fra true/false
- removeTodo(id) – fjerner en todo

### Komponenter:

#### AddTodo

- Et input-felt
- En knapp: "Legg til"
- Kaller addTodo() fra context

### TodoList

- Leser todos fra context
- Viser alle todos med .map()
- For hver todo:
  1. En checkbox som bruker toggleTodo(id)
  2. Tekst som viser todoen
  3. En knapp: "X" som bruker removeTodo(id)

### ThemeSwitcher Context + Provider:

Lag en ThemeContext med følgende data i value:

- theme – enten "light" eller "dark"
- toggleTheme() – funksjon som bytter tema
  Starttema kan være "light".

### ThemeSwitcher-komponent:

Lag en komponent som:

- Leser theme fra context
- Viser teksten:
  "Gjeldende tema: light" (eller dark)
- Har en knapp:
  "Bytt tema"
  som kaller toggleTheme()

## Oppsummering – Krav

### Lage tre forskjellige Context Providers

- ThemeProvider
- TodoProvider

## Wrappe appen med dem

Enten alle på en gang, eller hvert prosjekt for seg.

### Lage komponenter som konsumere Context

Bruk useContext(SomeContext) for å hente data og funksjoner.
Ingen props for å sende data rundt.

---

Info that loaded with installation:

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
