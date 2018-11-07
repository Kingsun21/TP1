const url = require('url')
const qs = require('querystring')
const homeInfo = 'Bonjour, bienvenue sur ma super page ! \n' +
'Entrez votre nom apres "/hello?name=" si vous etes en manque d\'attention, sinon mettez le mien, a savoir Theophile.'
const theophileInfo = 'Theophile est actuellement etudiant en ING5 a l\'ECE Paris, et se demarque par sa jeunesse et son dynamisme.'
const notFound = 'Error 404: Page not found'

module.exports = {
  serverHandle: function (req, res) {

    const route = url.parse(req.url)
    const path = route.pathname
    const params = qs.parse(route.query)

    res.writeHead(200, {'Content-Type': 'text/plain'});

    if (path === '/hello' && 'name' in params) {

        if (params['name'] === 'Theophile') {
            res.write(theophileInfo)
        } else {
            res.write('Hello ' + params['name'])
        }

    } else if (path === '/hello') {
        res.write('Hello World');
    } else if (path === '/') {
        res.write(homeInfo);
    } else {
        res.write(notFound)
    }
    res.end();
  }
}
