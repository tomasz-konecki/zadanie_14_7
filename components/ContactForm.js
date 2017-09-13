var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },
    
    render() {
        return (
            <form className={'contactForm'}>
                <input className={'input-name'} type={'text'} placeholder={'Imię'} value={this.props.contact.firstName}/>
                <input className={'input-surname'} type={'text'} placeholder={'Nazwisko'} value={this.props.contact.lastName}/>
                <input className={'input-email'} type={'email'} placeholder={'Email'} value={this.props.contact.email}/>
                <button type={'submit'}>Dodaj kontakt</button>
            </form>
        )
    },
})