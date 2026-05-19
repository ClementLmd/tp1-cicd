# TP S4 — Notes d'expérimentation

## 3.1 — fail-fast: false (échec volontaire Node 20)

Après le push `test: échec intentionnel Node 20`, compléter en observant GitHub Actions :

1. **test(18) est-il annulé quand test(20) échoue ?**
   - Réponse : non

2. **Le job report démarre-t-il malgré l'échec de test(20) ?**
   - Réponse : oui

3. **Que contient le Step Summary dans le rapport ?**
   - Réponse : tableau coverage + "CI échoué"

4. **Quel est l'exit code final du workflow ?**
   - Réponse : 1
