import './Contacts.css';

function Contacts()
{
    const text=
    {
        title: "Contact",
        description: "Email: abobaMaster@gmail.com"
    }
    return(
        <div className='wrap'>
            <h2>Contacts</h2>
            <h3>{text.description}</h3>
        </div>
    )
}
export default Contacts;