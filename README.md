# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


traccia del 30/05/2025
Ciao ragazzi, esercizio di oggi: Setup Web App React
repo: webapp-react
Esercizio
Ora è il momento di prepararci al frontend della nostra Web App!
MILESTONE 1
Mettiamo su un nuovo progetto React aiutandoci con Vite
Ripuliamo come sempre l’app da file e codice di esempio non necessari
Installiamo il necessario: React Router, Axios (oggi non è obbligatorio installarlo, lo sarà martedì) e Bootstrap (se volete utilizzarlo)
MILESTONE 2
Creiamo un layout di base per la nostra applicazione ed impostiamo le rotte per le diverse pagine.
Creiamo 2 pagine:
La home, in cui mostreremo la lista dei film
La pagina di dettaglio di un singolo film in cui mostrare sia le informazioni del film che le recensioni
Fate tutto statico.
Bonus
Create un array finto di film da ciclare e mostrare nella homepage
Creare la componente MovieCard in cui passare tramite props il singolo libro
SUPER BONUS: Nella pagina di dettaglio del film copiate l'array dei film aggiungendo a ciascun oggetto un'array di recensioni. Trovate l'elemento all'interno dell'array da mostrare nella pagina attraverso l'id che avete passato come parametro e mostratelo in pagina assieme alle sue recensioni


traccia del 4/06/2025
Ciao ragazzi, esercizio di oggi:
repo: webapp-react
Esercizio
Miglioriamo l’esperienza dell’utente inserendo
MILESTONE 1 (BACKEND)
Predisponiamo un’API per salvare nel database una nuova recensione legata ad un film
Testiamola su postman e verifichiamo che nel DB venga effettivamente inserita una nuova recensione
MILESTONE 2 (FRONTEND)
Creiamo un componente che contenga il form per le recensioni
Inseriamo questo componente nella pagina di dettaglio del film
All’invio del form, la nuova recensione viene salvata sul database e visualizzata nella pagina, in fondo alle altre
Buon Lavoro e buon divertimento!



traccioa esercizio del 5/05/2025
Ciao ragazzi, esercizio di oggi: Book Reviews
repo: webapp-react
Esercizio
Concludiamo migliorando l’esperienza sulla nostra SPA, inserendo un loader.
creiamo un componente loader
Questo componente deve poter apparire su qualunque pagina della nostra app.
Creiamo e sfruttiamo un Context per dare la possibilità ad ogni componente di attivare o disattivare il loader sulla propria pagina
BONUS (scegliete voi quale fare, non siete obbligati a farli tutti, potete farne solo alcuni):
1 - Personalizziamo l’aspetto della nostra app col CSS
2 - Aggiungere il filtraggio dei film nella homepage
3 - Aggiungere la validazione della form delle recensioni mostrando un messaggio d'errore generico quando i dati inseriti non sono validi
4 - Validazione dei campi della form singola: quando un utente sbaglia ad inserire un valore di un campo o non lo inserisce viene mostrato l'errore inerente quel campo
Buon Lavoro e buon divertimento!

