var contacts = [{
            id: 1,
            firstName: 'Jan',
            lastName: 'Nowak',
            email: 'jan.nowak@example.com',
        },
        {
            id: 2,
            firstName: 'Adam',
            lastName: 'Kowalski',
            email: 'adam.kowalski@example.com',
        },
        {
            id: 3,
            firstName: 'Zbigniew',
            lastName: 'Kozioł',
            email: 'zbigniew.koziol@example.com',
        }
    ],

    contactForm = {
        firstName: 'Jan',
        lastName: 'Kowalski',
        email: 'jk@example.com'
    },

    App = React.createClass({
        render: () => {
            return (
                <div className={'app'}>
                    <ContactForm contact={contactForm} />
                    <Contacts items={contacts} />
                </div>
            );
        }
    });