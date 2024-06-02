---
layout: post
title: "Key note"
date: 2024-03-30
categories: ngconf
---

# Keynote

Stuff shipped

- signals
- defered views
- material 3

## news

anguler and Wiz

angular more enterprise
Wiz more consumer based

signals 100% youtube web traffic

### youtube signals

**Signals works at youtube scale**

- meets pre reqs
- meet better performance by default

guy talking about youtube and signals: roccoc@google.com

### Components and signals

> !New Signal aips!

**in developer preview**

- new signal based apis signal queries
  - viewChild()
  - contentChildren()
  - can mark viewChild as required!!
- Sginal based inputs
  - input() vs @input
  - also make it required
- Outputs
  - not based on signals
  - done for looks
  - `output<boolean>()`
- Model inputs
  - two way binding required to do input and output.
  - new `checked = model(false)`
  - gives a writable signals

### rxjs

- this will become optional in future
-

### Debugging tools

### Control flow

- auto refactor code using angular cli to new syntax
- `ng generate @angular/core:control-flow`

### performance

- angular image directive
  - use ngSrc help improve image performance
    - up to 75% in LCP

### Other

- Delcaritve lazy loading and prefeching
  - deferable views
    - `@defer(on viewport)` add palceholder
    - make it lazy loading
    - way easy for alzy loading
  - Hybrid redering
    - speed up loading
  - ng build -> ngc & typescript -> vite and esbuild
  - ng serve can now use vite and makes dev server faster
  - hydration in 17
    - 200ms reduction
  - SSR
    - dev tools debug helper
  - future plans about hydration
    - partial hydration
    - hydration on interaction
    - **Partial hydratoin later this year!!**
  - analogjs.org - 1.0 release
    - alternative single file component
  - tanstack angular support
  - new icon in version 17
  - new doc experience
    - curently in beta
    - in v18 the one stop shop
  - Whats comming up next
    - zoneless
    - hot module replacement
    - streaming ssr
    - component authoring ++
    - faback content for <ng-content>
    - remove redundant @component stuff.
    - highly experimental
      - gemini
        - ask the docs a question
        - the cli could generate custom components for you
        - testing out this idea with prompts.
