Ce projet est lié à un problème que j'ai rencontré avec react.js.
La méthode componentWillReceiveProps est dépréciée et va être supprimée, il faut la remplacer par getDerivedStateFromProps.
Cependant, getDerivedStateFromProps n'accepte pas les méthodes d'instance.
J'ai donc créé un code succint résumant la situation. 
Dans un premier temps, un code utilisant componentWillReceiveProps a été écrit. Puis, il a été modifé pour migrer vers getDerivedStateFromProps.

Les commandes utilisées sont les suivantes 
// Création d'un template react.js
	create-react-app.cmd cWRP_to_gDSFP
	
// création d'un git local
	git init
	
// Ajout du fichier src/App.js
git add .\src\App.js
git commit -a -m "Modification du Fichier app.js pour creer l'interface initiale sans composant"

//Ajout d'un fichier composant et des commits pour migrer vers getDerivedStateFromProps après modification du code
git add .\src\component.js
git commit -a -m "Ajout de component.js pour transferer l'affichage dans un composant et modification de app.js en consequence" 
git commit -a -m "Ajout de la methode resetState pour eviter la duplication du code dans le constructeur et cWRP" 
git commit -a -m "resetCounter (false : no reset / true : reset). Reinit a false apres render avec componentDidUpdate"
git commit -a -m "Remplacement de componentWillReceiveProps (obsolete) par getDerivedStateFromProps"
git commit -a -m "Declaration d'une methode statique pour eviter la duplication du code"
 
git add README.txt
