var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render() {
        return (
            <li className={'contact-item'}>
                <div className={'contact-picture'}>
                    <img className={'contact-image'} src={'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'}/>
                </div>

                <div className={'contact-details'}>
                    <p className={'contact-name'}>{this.props.item.firstName}</p>
                    <p className={'contact-surname'}>{this.props.item.lastName}</p>
                    <a className={'contact-email'} href={'mailto:' + this.props.item.email}>
                        {this.props.item.email}
                    </a>
                </div>

                <div className={'contact-icon'}>
                    <i className={'fa fa-info-circle'} aria-hidden={'true'}></i>
                </div>
            </li>
        )
    },
});