# TP S4 — Notes d'expérimentation

## 3.1 — fail-fast: false

1. **test(18) est-il annulé quand test(20) échoue ?**
   - Réponse : non

2. **Le job report démarre-t-il malgré l'échec de test(20) ?**
   - Réponse : oui

3. **Que contient le Step Summary dans le rapport ?**
   - Réponse : tableau coverage + "CI échoué"

4. **Quel est l'exit code final du workflow ?**
   - Réponse : 1

## 3.1 — fail-fast: true

- **test(18) est-il annulé dès que test(20) échoue ?**
  - Réponse : oui (statut Cancelled)

## 3.2 — concurrency

- **Résultat sur les 3 pushes rapides ?**
  - Réponse : 2 runs Cancelled, 1 run vert

## 3.3 — artefacts coverage-node-18 vs coverage-node-20

- **Les % sont-ils identiques ?**
  - Réponse : oui, 100 % partout sur calculator.js

- **Observation HTML ?**
  - Réponse : même rapport, tout vert, pas de diff Node 18/20
