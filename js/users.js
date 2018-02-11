users = {
    users : [],
    init : function () {
        var self = this;
        this.users = dataManager.data.users;
        console.log(dataManager.data.users);
        $( document ).on( 'submit', '#playersForm', function(e){
            e.preventDefault();
            self.addUserByForm( this )
        });
    },
    addUser : function( name, lastname, sexe, country, role ) {
        this.users.push({
            // créer un id unique par utilisateur 
            id: Math.floor(Math.random()* 1000000),
            name: name,
            lastname: lastname,
            sexe: sexe,
            country: country,
            role: role
        })
    },
    addUserByForm : function ( selector ) {
        name = $(selector).find('[name=name]').val();
        lastname = $(selector).find('[name=lastname]').val();
        sexe = $(selector).find('[name=sex]').val();
        country = $(selector).find('[name=country]').val();
        role = $(selector).find('[name=role]').val();

        this.addUser(
            name,
            lastname,
            sexe,
            country,
            role
        );
        alert('Ajouté...');
        // Rafraichi la page
        router.refreshPage();
    },
    refreshPagePlayer : function () {
        this.users.forEach(function(element) {
            if ( element.role == "player" ) {
                li = $('<li>');
                li.text( element.name + " " + element.lastname);
                $('#player-list').append(li);
            }
        });
    },
    refreshArbitrator : function () {
        this.users.forEach(function(element) {
            if ( element.role == "arbitrator" ) {
                li = $('<li>');
                li.text( element.name + " " + element.lastname);
                $('#player-arbitrator').append(li);
            }
        });
    }
}
