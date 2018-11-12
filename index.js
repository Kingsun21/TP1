const homeInfo =
  "Bonjour, bienvenue sur ma super page ! \n" +
  'Entrez votre nom apres "/hello/" si vous etes en manque d\'attention, sinon mettez le mien, a savoir Theophile.';
const theophileInfo =
  "Theophile est actuellement etudiant en ING5 a l'ECE Paris, et se demarque par sa jeunesse et son dynamisme.";
const notFound = "Error 404: Page not found";

express = require('express')
app = express()

app.set('port', 8080)

app.listen(
  app.get('port'), () => console.log(`server listening on ${app.get('port')}`)
)

app.get(
  '/hello/:name',
  (req, res) => {
    if (req.params.name == 'Theophile'){
      res.send(theophileInfo)
    } else {
      res.send("Hello " + req.params.name)
    }
  }
)

app.get(
  '/',
  (req, res) => res.send(homeInfo)
)

app.use(function(req, res){
       res.send(notFound);
   });
