var Contacts = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired,
    },

    render: () => {
        var contacts = this.props.items.map((contact) => {
            return <Contact item={contact} key={contact.id} />
            });

        return <ul className={'contacts-list'}>{contacts}</ul>
    }
});