/**
 *  Permet de récupèrer et de gérer les datas
 * @type {Object}
 */
dataManager = {
    folderData: "./data",
    /**
     * Liste des données à récupérer
     * @type {Array}
     */
    listFile : [
        {
            "name": "class",
            "fileName": "class.json"
        },
        {
            "name": "matchs",
            "fileName": "matchs.json"
        },
        {
            "name": "pages",
            "fileName": "pages.json"
        },
        {
            "name": "users",
            "fileName": "users.json"
        }
    ],
    // contient les datas
    data : {},
    /**
     * Parcours les fichiers
     */
    init : function () {
        var self = this;
        this.listFile.forEach(function(element) {
            self.getData( element.name, element.fileName );
        });
        this.ready();
    },
    ready : function() {},
    /**
     * Récupère les data en Json
     */
    getData : function ( name, fileName ) {
        var self = this;
        urlFile = this.folderData + "/" + fileName;
        $.get( urlFile, function( data ) {
            self.setData( name, data );
        });
    },
    /**
     * Stock les datas
     */
    setData : function ( name, data ) {
        this.data[name] = data;
    }
}
