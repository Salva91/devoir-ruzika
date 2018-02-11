router = {
    /**
     * Data
     */
    defaultRoute : "main.html",
    folderTemplate : "./templates",
    currentRoute : "",

    /**
     * Quand on clique sur un lien du menu Jquery lui envoie un selecteur Jquery
     * @param  {[type]} selector [description]
     */
    getRoute : function( selector ) {
        fileName = $( selector ).attr('href');
        this.currentRoute = fileName;
        this.useRoute( fileName );
    },
    /**
     * Récupère un template par rapport à son nom
     * @param  {[string]} fileName Nom du fichier
     */
    useRoute : function( fileName ) {
      urlFile = this.folderTemplate + "/" + fileName;
      $.get( urlFile, function( data ) {
          $( "#main-content" ).html( data );
      });
    },

    init : function () {
        var self = this;
        /**
         * Créer un évenement sur le click du menu
         */
        $( 'header' ).find('a').click( function (e) {
            e.preventDefault();
            self.getRoute( this );
        })

        this.currentRoute = this.defaultRoute;

        this.useRoute( this.currentRoute );
    }
}
