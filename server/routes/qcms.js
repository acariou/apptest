var qcms = {

    getAll: function (req, res) {
        var allProducts = data; // Spoof a DB call
        console.log(allProducts);
        res.json(allProducts);
    },

    getOne: function (req, res) {
        var id = req.params.id;
        var product = data[0]; // Spoof a DB call
        res.json(product);
    },

    create: function (req, res) {
        var newProduct = req.body;
        data.push(newProduct); // Spoof a DB call
        res.json(newProduct);
    },

    update: function (req, res) {
        var updateProduct = req.body;
        var id = req.params.id;
        data[id] = updateProduct // Spoof a DB call
        res.json(updateProduct);
    },

    delete: function (req, res) {
        var id = req.params.id;
        data.splice(id, 1) // Spoof a DB call
        res.json(true);
    }
};

var data = {
    "params": {
        "title": "QCM"
    },
    "qcms": [
        {
            "id": 1,
            "title": "Javascript natif",
            "description": "",
            "answers": [
                {
                    "id": 1,
                    "titre": "Comment ouvre-t-on une boîte de dialogue ?",
                    "type": "ol",
                    "completed": true,
                    "reponses": [
                        {
                            "id": 1,
                            "texte": "alertDialog(\"ma boîte de dialogue\")&#59;",
                            "seleted": false
                        },
                        {
                            "id": 2,
                            "texte": "alert(\"ma boîte de dialogue\")&#59;",
                            "selected": false
                        },
                        {
                            "id": 3,
                            "texte": "alert = \"ma boîte de dialogue\"",
                            "seleted": false
                        },
                        {
                            "id": 4,
                            "texte": "document.alert(\"ma boîte de dialogue\")&#59;",
                            "seleted": false
                        },
                        {
                            "id": 5,
                            "texte": "Pas de réponses",
                            "seleted": false
                        }
                    ]
                },
                {
                    "id": 2,
                    "titre": "Laquelle de ces déclarations de fonction est erronée ?",
                    "type": "ol",
                    "completed": false,
                    "reponses": [
                        {
                            "id": 1,
                            "texte": "function  f(x,y) { }&#59;",
                            "selected": false
                        },
                        {
                            "id": 2,
                            "texte": "var  f(x,y) = function{ }&#59;",
                            "selected": false
                        },
                        {
                            "id": 3,
                            "texte": "var f = function(x,y){}&#59;",
                            "selected": false
                        },
                        {
                            "id": 4,
                            "texte": "obj.test(function(x,y){})&#59;",
                            "selected": false
                        },
                        {
                            "id": 5,
                            "texte": "Pas de réponses",
                            "selected": false
                        }
                    ]
                },
                {
                    "id": 3,
                    "titre": "Comment inclue-t-on un fichier JS externe dans un document HTML?",
                    "type": "ol",
                    "completed": true,
                    "reponses": [
                        {
                            "id": 1,
                            "texte": "&lt;script type=\"text/javascript\" src=\"MonFichier.js\"&gt;&lt;/script&gt;",
                            "selected": false
                        },
                        {
                            "id": 2,
                            "texte": "&lt;script type=\"text/javascript\" href=\"MonFichier.js\"&gt;&lt;/script&gt;",
                            "selected": false
                        },
                        {
                            "id": 3,
                            "texte": "&lt;script type=\"javascript\" href=\"MonFichier.js\"&gt;&lt;/script&gt;",
                            "selected": false
                        },
                        {
                            "id": 4,
                            "texte": "&lt;script type=\"javascript/text\" src=\"MonFichier.js\"&gt;&lt;/script&gt;",
                            "selected": false
                        },
                        {
                            "id": 5,
                            "texte": "Pas de réponses",
                            "selected": false
                        }
                    ]
                },
                {
                    "id": 4,
                    "titre": "identifiez la proposition erronée.",
                    "type": "ol",
                    "completed": false,
                    "reponses": [
                        {
                            "id": 1,
                            "texte": "&lt;input type=\"button\"  onclick=\"maFonction()\"&gt;",
                            "selected": false
                        },
                        {
                            "id": 2,
                            "texte": "&lt;a onclick=\"alert(‘ok’)\"&gt;Mon  Lien&lt;/a&gt;",
                            "selected": false
                        },
                        {
                            "id": 3,
                            "texte": "&lt;a href=\"js:alert(‘Hello’)\"&gt;Mon  Lien&lt;/a&gt;",
                            "selected": false
                        },
                        {
                            "id": 4,
                            "texte": "&lt;input type=\"button\" onclick=\"alert(‘ok’)\"&gt;",
                            "selected": false
                        },
                        {
                            "id": 5,
                            "texte": "Pas de réponses",
                            "selected": false
                        }
                    ]
                },
                {
                    "id": 5,
                    "titre": "Comment sélectionne‐t-on l’élément : &lt;div name=\"idElement\"&gt;&lt;/div&gt;",
                    "type": "ol",
                    "completed": false,
                    "reponses": [
                        {
                            "id": 1,
                            "texte": "var monElement = document. getElementsByName(\"idElement\")&#59;",
                            "selected": false
                        },
                        {
                            "id": 2,
                            "texte": "var monElement = document. getElementByName(\"idElement\")&#59;",
                            "selected": false
                        },
                        {
                            "id": 3,
                            "texte": "var monElement = document. getElementBy\"id\"(\"idElement\")&#59;",
                            "selected": false
                        },
                        {
                            "id": 4,
                            "texte": "var monElement = document. getElementsById(\"idElement\")&#59;",
                            "selected": false
                        },
                        {
                            "id": 5,
                            "texte": "Pas de réponses",
                            "selected": false
                        }
                    ]
                },
                {
                    "id": 6,
                    "titre": "Considérons le fragment de code externe suivant :",
                    "description": "&lt;pre&gt;var e = document.getElementById(\"idPg\")&#59;\r\ne.style.display = \"none\"&#59;\r\nvar  i = document.createElement(\"img\")&#59;\r\ni.src = \"image.jpg\"&#59;\r\ne.firstChild.nodeValue = \"Dendron it\"&#59;\r\ne.insertBefore(i,e.firstChild)&#59;\r\ne.style.display=\"block\"&#59;\r\n&lt;/pre&gt;\r\n&lt;p&gt;Que résulte-t‐il de l’exécution de ce code ?&lt;/p&gt;",
                    "type": "ol",
                    "completed": false,
                    "reponses": [
                        {
                            "id": 1,
                            "texte": "Rien n’est affiché",
                            "selected": false
                        },
                        {
                            "id": 2,
                            "texte": "Le texte puis l’image sont affichés",
                            "selected": false
                        },
                        {
                            "id": 3,
                            "texte": "L’image puis le texte sont affichés",
                            "selected": false
                        },
                        {
                            "id": 4,
                            "texte": "Le texte seulement est affiché",
                            "selected": false
                        },
                        {
                            "id": 5,
                            "texte": "Pas de réponses",
                            "selected": false
                        }
                    ]
                },
                {
                    "id": 7,
                    "titre": "Soit le code HTML suivant :",
                    "description": "&lt;blockquote&gt;&lt;span ",
                    "type": "ol",
                    "completed": false,
                    "reponses": [
                        {
                            "id": 1,
                            "texte": "e.firstChild.nodeValue = \"Hello texte\" &#59;",
                            "selected": false
                        },
                        {
                            "id": 2,
                            "texte": "e.html = \"Hello texte\" &#59;",
                            "selected": false
                        },
                        {
                            "id": 3,
                            "texte": "e.setText( \"Hello texte\") &#59;",
                            "selected": false
                        },
                        {
                            "id": 4,
                            "texte": "e.firstChild.textNode =\"Hello texte\"&#59;",
                            "selected": false
                        },
                        {
                            "id": 5,
                            "texte": "Pas de réponses",
                            "selected": false
                        }
                    ]
                },
                {
                    "id": 8,
                    "titre": "Considérons le fragment de code externe suivant :",
                    "description": "&lt;pre&gt;&lt;code&gt;var name_div = \"li\"&#59;var name_balise_div2 = document.getElementsByName(name_div)&#59;alert(name_balise_div2.length)&#59;&lt;/code&gt;&lt;/pre&gt;&lt;p&gt;s’appliquant au fragment de code suivant :&lt;/p&gt;&lt;pre&gt;&lt;ul&gt;&nbsp&#59;&lt;li&gt;&lt;/li&gt;&nbsp&#59;&lt;ul&gt;&nbsp&#59;&nbsp&#59;&lt;li&gt;&lt;/li&gt;&nbsp&#59;&nbsp&#59;&lt;li&gt;&lt;/li&gt;&nbsp&#59;&lt;/ul&gt;&nbsp&#59;&lt;li&gt;&lt;/li&gt;&nbsp&#59;&lt;li&gt;&lt;/li&gt;&nbsp&#59;&lt;/ul&gt;&lt;/pre&gt;&lt;p&gt;Qu’affiche l’exécution de ce code ?&lt;/p&gt;",
                    "type": "ol",
                    "completed": false,
                    "reponses": [
                        {
                            "id": 1,
                            "texte": "0",
                            "selected": false
                        },
                        {
                            "id": 2,
                            "texte": "2",
                            "selected": false
                        },
                        {
                            "id": 3,
                            "texte": "3",
                            "selected": false
                        },
                        {
                            "id": 4,
                            "texte": "4",
                            "selected": false
                        },
                        {
                            "id": 5,
                            "texte": "5",
                            "selected": false
                        }
                    ]
                },
                {
                    "id": 9,
                    "titre": "Quelle instruction permet  de modifier la  balise « pre » d’une des feuilles de style externe ?",
                    "type": "ol",
                    "completed": false,
                    "reponses": [
                        {
                            "id": 1,
                            "texte": "var x = document.styleSheets[1] &#59;",
                            "selected": false
                        },
                        {
                            "id": 2,
                            "texte": "x.insertRule(\"pre {font:  14px verdana}\",x.cssRules.length)",
                            "selected": false
                        },
                        {
                            "id": 3,
                            "texte": "x.addRule(\"pre {font:  14px verdana}\",x.cssRules.length)",
                            "selected": false
                        },
                        {
                            "id": 4,
                            "texte": "x.cssRule(\"pre {font:  14px verdana}\",x.cssRules.length)",
                            "selected": false
                        },
                        {
                            "id": 5,
                            "texte": "x.addCss(\"pre {font:  14px verdana}\",x.cssRules.length)",
                            "selected": false
                        },
                        {
                            "id": 6,
                            "texte": "Pas de réponses",
                            "selected": false
                        }
                    ]
                },
                {
                    "id": 10,
                    "titre": "Considérons le code JavaScript  suivant :",
                    "description": "&lt;pre&gt;var foo&#59;var larg&#59;var haut&#59;var move =0&#59;function init(){&nbsp&#59;larg = screen.w\"id\"th&#59;&nbsp&#59;haut = screen.height&#59;&nbsp&#59;foo = document.getElementByid(\"id\")&#59;&nbsp&#59;move()&#59;}function move() {&nbsp&#59;if(move &lt;= larg -­‐ 20){&nbsp&#59;&nbsp&#59;foo.style.left = (move + 10) + \"px\"&#59;&nbsp&#59;&nbsp&#59;move += 10&#59;&nbsp&#59;}else{&nbsp&#59;&nbsp&#59;clearTimeout()&#59;&nbsp&#59;}&nbsp&#59;&nbsp&#59;setTimeout(move,&nbsp&#59;&nbsp&#59;24)&#59;}&lt;/pre&gt;&lt;p&gt;Celui-ci est intégré à une page HTML  dont voici le BODY  :&lt;/p&gt;&lt;pre&gt;&lt;body onload=\"init()\"&gt;  &lt;div \"id\"=\"id\" style=\"background: #FFCC44&#59; width: 10px&#59; height:10px&#59;left:50px&#59; position:absolute\"&gt;&lt;/div&gt;  &lt;/body&gt;  &lt;/pre&gt;  &lt;p&gt;Que résulte-t‐il de l’exécution de ce code ?&lt;/p&gt;",
                    "type": "ol",
                    "completed": false,
                    "reponses": [
                        {
                            "id": 1,
                            "texte": "Déplace 24 fois le bloc vers la droite de 10 en 10",
                            "selected": false
                        },
                        {
                            "id": 2,
                            "texte": "Ajoute 10 à la propriété css left du bloc mais ne modifie pas l’affichage",
                            "selected": false
                        },
                        {
                            "id": 3,
                            "texte": "Place le bloc en position (10,0)",
                            "selected": false
                        },
                        {
                            "id": 4,
                            "texte": "Déplace le bloc vers la droite de 10 en 10 toutes les 24ms",
                            "selected": false
                        },
                        {
                            "id": 5,
                            "texte": "Déplace le bloc vers la gauche de 10 en 10 toutes les 24ms",
                            "selected": false
                        }
                    ]
                },
                {
                    "id": 11,
                    "titre": "Comment peut-on déclarer une classe en JavaScript ?",
                    "type": "ol",
                    "completed": false,
                    "reponses": [
                        {
                            "id": 1,
                            "texte": "function  MaClasse(parametre1, parametre2) { …}",
                            "selected": false
                        },
                        {
                            "id": 2,
                            "texte": "class  MaClasse { … }",
                            "selected": false
                        },
                        {
                            "id": 3,
                            "texte": "typedef MaClasse = new class(parametre1, parametre2) { ... }",
                            "selected": false
                        },
                        {
                            "id": 4,
                            "texte": "C’est impossible",
                            "selected": false
                        }
                    ]
                },
                {
                    "id": 12,
                    "titre": "identifiez la proposition erronée :",
                    "type": "ol",
                    "completed": false,
                    "reponses": [
                        {
                            "id": 1,
                            "texte": "apply sert à appliquer une méthode X à des objets même si les objets sont différents",
                            "selected": false
                        },
                        {
                            "id": 2,
                            "texte": "apply et call sont des fonctions sœurs",
                            "selected": false
                        },
                        {
                            "id": 3,
                            "texte": "apply est une méthode équivalente à un constructeur. Permet de passer autant de paramètres que l’on souhaite :  maFonction.apply(this,  [2,3,4,5,6])",
                            "selected": false
                        },
                        {
                            "id": 4,
                            "texte": "Ne sais pas",
                            "selected": false
                        }
                    ]
                },
                {
                    "id": 13,
                    "titre": "Comment peut-on obtenir un chiffre entre 0 et 10 de manière aléatoire ?",
                    "type": "ol",
                    "completed": false,
                    "reponses": [
                        {
                            "id": 1,
                            "texte": "floor(Math.random()*10)",
                            "selected": false
                        },
                        {
                            "id": 2,
                            "texte": "Math.floor(Math.rand()*11)",
                            "selected": false
                        },
                        {
                            "id": 3,
                            "texte": "Math.floor(Math.random()*10)",
                            "selected": false
                        },
                        {
                            "id": 4,
                            "texte": "Math.floor(Math.random()*11)",
                            "selected": false
                        },
                        {
                            "id": 5,
                            "texte": "Pas de réponses",
                            "selected": false
                        }
                    ]
                },
                {
                    "id": 14,
                    "titre": "Soit le fragment de code suivant :",
                    "description": "&lt;pre&gt;var t = new Array(2,4,6,8)&#59;t.pop()&#59;t.push(t.get(0))&#59;alert(t.length)&lt;/pre&gt;&lt;p&gt;Qu’affiche ce  code ?&lt;/p&gt;",
                    "type": "ol",
                    "completed": false,
                    "reponses": [
                        {
                            "id": 1,
                            "texte": "3",
                            "selected": false
                        },
                        {
                            "id": 2,
                            "texte": "4",
                            "selected": false
                        },
                        {
                            "id": 3,
                            "texte": "5",
                            "selected": false
                        },
                        {
                            "id": 4,
                            "texte": "Produit une erreur",
                            "selected": false
                        },
                        {
                            "id": 5,
                            "texte": "Pas de réponses",
                            "selected": false
                        }
                    ]
                },
                {
                    "id": 15,
                    "titre": "Soit le code suivant  :",
                    "description": "&lt;pre&gt;var chaine1 = \"Java\"&#59;var chaine2 = \"Scr ipt\"&#59;var chaine3 = chaine1.concat(chaine2)&#59;var chaine4 = chaine3.split(\" \")&#59;var chaine5 = chaine4[0].substr(2,7)&#59;document.write(chaine5)&#59;&lt;/pre&gt;&lt;p&gt;Qu\"affiche ce code ?&lt;/p&gt;",
                    "type": "ol",
                    "completed": false,
                    "reponses": [
                        {
                            "id": 1,
                            "texte": "vaScr",
                            "selected": false
                        },
                        {
                            "id": 2,
                            "texte": "JavaS",
                            "selected": false
                        },
                        {
                            "id": 3,
                            "texte": "r ipt",
                            "selected": false
                        },
                        {
                            "id": 4,
                            "texte": "Produit une erreur",
                            "selected": false
                        },
                        {
                            "id": 5,
                            "texte": "Pas de réponses",
                            "selected": false
                        }
                    ]
                },
                {
                    "id": 16,
                    "titre": "Qu’est ce qui n’est pas possible de simuler en JavaScript ?",
                    "type": "ol",
                    "completed": false,
                    "reponses": [
                        {
                            "id": 1,
                            "texte": "Un namespace",
                            "selected": false
                        },
                        {
                            "id": 2,
                            "texte": "Un constructeur",
                            "selected": false
                        },
                        {
                            "id": 3,
                            "texte": "Une surcharge d’opérateur",
                            "selected": false
                        },
                        {
                            "id": 4,
                            "texte": "Une classe",
                            "selected": false
                        },
                        {
                            "id": 5,
                            "texte": "Les quatre propositions precedents sont possibles en JavaScript",
                            "selected": false
                        },
                        {
                            "id": 6,
                            "texte": "Les  quatre propositions précédente sont impossibles en JavaScript",
                            "selected": false
                        }
                    ]
                },
                {
                    "id": 17,
                    "titre": "Comment declare-t-on un enum en Javascript ?",
                    "type": "ol",
                    "completed": false,
                    "reponses": [
                        {
                            "id": 1,
                            "texte": "Classe.sousclasse.enum  = { LEFT : 0, RIGHT : 1, TOP : 2, }",
                            "selected": false
                        },
                        {
                            "id": 2,
                            "texte": "Classe.sousclasse.enum  : { LEFT : 0, RIGHT : 1, TOP  : 2, }",
                            "selected": false
                        },
                        {
                            "id": 3,
                            "texte": "Classe.sousclasse.enum = { LEFT  : 0&#59;  RIGHT : 1&#59; TOP : 2&#59; }",
                            "selected": false
                        },
                        {
                            "id": 4,
                            "texte": "On ne peut pas définir d’enum en JavaScript.",
                            "selected": false
                        },
                        {
                            "id": 5,
                            "texte": "Pas de réponses",
                            "selected": false
                        }
                    ]
                },
                {
                    "id": 18,
                    "titre": "A quoi sert l’objet XMLHttpRequest ?",
                    "type": "ol",
                    "completed": false,
                    "reponses": [
                        {
                            "id": 1,
                            "texte": "Il ne sert à rien, cet objet n’existe pas en JavaScript",
                            "selected": false
                        },
                        {
                            "id": 2,
                            "texte": "Permet d’obtenir des données XML, JSON, HTML ou du texte",
                            "selected": false
                        },
                        {
                            "id": 3,
                            "texte": "Permet uniquement d’effectuer des requêtes sous forme XML",
                            "selected": false
                        },
                        {
                            "id": 4,
                            "texte": "Permet de définir les  protocoles liés aux envois http",
                            "selected": false
                        },
                        {
                            "id": 5,
                            "texte": "Pas de réponses",
                            "selected": false
                        }
                    ]
                },
                {
                    "id": 19,
                    "titre": "identifier la proposition erronée",
                    "type": "ol",
                    "completed": false,
                    "reponses": [
                        {
                            "id": 1,
                            "texte": "var MonTableau = [\"tata\", \"titi\", \"toto\"]&#59;",
                            "selected": false
                        },
                        {
                            "id": 2,
                            "texte": "var MonTableau = newArray(\"tata\", \"titi\", \"toto\")&#59;",
                            "selected": false
                        },
                        {
                            "id": 3,
                            "texte": "var MonTableau = new Array()&#59; MonTableau[0] = \"tata\" &#59; MonTableau[1] = \"titi\" &#59; MonTableau[2] = \"toto\"&#59;",
                            "selected": false
                        },
                        {
                            "id": 4,
                            "texte": "var MonTableau = new Array[3]&#59; MonTableau[0] = \"tata\"&#59; MonTableau[1] = \"titi\" &#59; MonTableau[2] = \"toto\"&#59;",
                            "selected": false
                        },
                        {
                            "id": 5,
                            "texte": "Pas de réponses",
                            "selected": false
                        }
                    ]
                },
                {
                    "id": 20,
                    "titre": "Dans  le code suivant, par laquelle des 4 lignes faudrait‐il remplacer « // ICI LE CODE » pour que res retourne true :",
                    "description": "&lt;pre&gt;var mail = \"dendron.it@dendron.com\"&#59; // ICI LE  CODE return res&#59;&lt;/pre&gt;",
                    "type": "ol",
                    "completed": false,
                    "reponses": [
                        {
                            "id": 1,
                            "texte": "var reg = new RegExp(\"^&lt;b&gt;&#91&#59;a-zA-Z0-9._‐&#93&#59;&lt;/b&gt;+@&#91&#59;a-z0-9_-&#93&#59;{2,}&#92;.&#91&#59;a-z&#93&#59;{2,4}$\")&#59;&lt;br/&gt;var res = reg.&lt;b&gt;test&lt;/b&gt;&#40&&#59;mail)&#59;",
                            "selected": false
                        },
                        {
                            "id": 2,
                            "texte": "var reg = new RegExp(\"&lt;b&gt;^&#91&#59;A-Z0-9a-z._-&#93&#59;&lt;/b&gt;+@&#91&#59;a-z0‐9_‐&#93&#59;{2,}&#92;.&#91&#59;a-z&#93&#59;{2,4}$\")&#59; &lt;br/&gt;var res = reg.&lt;b&gt;evaluate&lt;/b&gt;(mail)&#59;",
                            "selected": false
                        },
                        {
                            "id": 3,
                            "texte": "var reg = RegExp(\"&lt;b&gt;^&#91&#59;a‐z0-9A-Z._‐&#93&#59;&lt;/b&gt;+@&#91&#59;a‐z0‐9_-&#93&#59;{2,}&#92;.&#91&#59;a-z&#93&#59;{2,4}$\")&#59;&lt;br/&gt;var res = reg.&lt;b&gt;check&lt;/b&gt;(mail)&#59;",
                            "selected": false
                        },
                        {
                            "id": 4,
                            "texte": "var reg = RegExp(\"&lt;b&gt;^&#91&#59;0-9A-Za-z&#92;._-&#93&#59;&lt;/b&gt;+@&#91&#59;a-z0-9_‐&#93&#59;{2,}&#92;.&#91&#59;a-z&#93&#59;{2,4}$\")&#59;&lt;br/&gt;var res = reg.&lt;b&gt;val\"id\"ate&lt;/b&gt;(mail)&#59;",
                            "selected": false
                        },
                        {
                            "id": 5,
                            "texte": "Pas de réponses",
                            "selected": false
                        }
                    ]
                }
            ]
        },
        {
            "id": 2,
            "title": "Java",
            "description": "",
            "answers": []
        }
    ]
};

module.exports = qcms;
