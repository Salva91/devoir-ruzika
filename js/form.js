form = {
    /**
     * Data
     */
    login : 'user',
    password : 'user',

    init : function() {
        var self = this;
        $( document ).on( 'submit', '#connection', function(e){
            e.preventDefault();
            self.connection( this )
        });
    },
    /**
     * test le formulaire
     * @param  {[type]} selector selecteur jquery du formulaire
     */
    connection : function( selector ){

        login = $(selector).find('[name=name]').val();
        password = $(selector).find('[name=passwd]').val();

        if ( login == this.login && password == this.password ) {
            router.useRoute( 'connection-do-it.html' );
        } else {
            alert("Login ou mot de passe mauvais.");
        }
    }
}
