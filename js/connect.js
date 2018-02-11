/**
 *  Permet de gérer la connection de l'utilisateur
 * @type {Object}
 */
connect = {
    /**
     * Data
     */
    data : {
      login : 'user',
      password : 'user',
      connected : false
    },

    init : function() {
        var self = this;
        $( document ).on( 'submit', '#connection', function(e){
            e.preventDefault();
            self.connection( this )
        });
    },
    /**
     * test le formulaire, si le mot de passe est juste et le login alors une redirection est faite.
     * @param  {[object]} selector selecteur jquery du formulaire
     */
    connection : function( selector ){

        login = $(selector).find('[name=name]').val();
        password = $(selector).find('[name=passwd]').val();

        if ( login == this.data.login && password == this.data.password ) {
            this.login();
            router.useRoute( 'connection-do-it.html' );
        } else {
            alert("Login ou mot de passe mauvais.");
        }
    },
    /**
     * Fonction pour savoir si l'utilisateur
     * est connecté, retourne
     * True si connecté ou false si deconnecté
     * @return {[boolean]} True o u false
     */
    isConnected : function() {
        return this.data.connected;
    },
    login : function() {
        this.data.connected = true;
    },
    logout : function() {
        this.data.connected = false;
    }
}
