matchs = {
    matchs : [],
    init : function () {
        var self = this;
        this.users = dataManager.data.users;
        $( document ).on( 'submit', '#playersForm', function(e){
            e.preventDefault();
            self.addMatchByForm( this )
        });
    },
    addMatch : function( name, lastname, sexe, country, role ) {
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
    addMatchByForm : function ( selector ) {
        name = $(selector).find('[name=name]').val();
        lastname = $(selector).find('[name=lastname]').val();
        sexe = $(selector).find('[name=sex]').val();
        country = $(selector).find('[name=country]').val();
        role = $(selector).find('[name=role]').val();

        this.addMatch(
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
    refreshMatchs : function () {
        this.matchs.forEach(function(element) {
            li = $('<li>');
            li.text( element.name + " " + element.lastname);
            $('#matchlist').append(li);
        });
    }
}
