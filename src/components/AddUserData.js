import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addUser,fetchUsers } from '../actions/index'

export class AddUserData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {
                name: "",
                username: "",
                email: "",
                address: {
                    street: "",
                    suite: "",
                    city: "",
                    zipcode: "",
                    geo: {
                        lat: "",
                        lng: ""
                    }
                },
                phone: "",
                website: "",
                company: {
                    name: "",
                    catchPhrase: "",
                    bs: ""
                }
            },
            showForm: false
        }
    }
    handleChange = (event) => {
        switch (event.target.name) {
            case 'name':
                this.setState({
                    userData: { ...this.state.userData, name: event.target.value }
                })
                break;
            case 'username':
                this.setState({ userData: { ...this.state.userData, username: event.target.value } })
                break;
            case 'email':
                this.setState({ userData: { ...this.state.userData, email: event.target.value } })
                break;
            case 'street':
                this.setState({
                    userData: {
                        ...this.state.userData, address:
                            { ...this.state.address, street: event.target.value }
                    }
                })
                break;
            case 'suite':
                this.setState({
                    userData: {
                        ...this.state.userData, address:
                            { ...this.state.address, suite: event.target.value }
                    }
                })
                break;
            case 'city':
                this.setState({
                    userData: {
                        ...this.state.userData, address:
                            { ...this.state.address, city: event.target.value }
                    }
                })
                break;
            case 'zipcode':
                this.setState({
                    userData: {
                        ...this.state.userData, address:
                            { ...this.state.address, zipcode: event.target.value }
                    }
                })
                break;

            case 'latitude':
                this.setState({
                    userData: {
                        ...this.state.userData, address:
                            { ...this.state.address, geo: {...this.state.geo, lat: event.target.value }}
                    }
                })
                break;
            case 'longitude':
                this.setState({
                    userData: {
                        ...this.state.userData, address:
                            { ...this.state.address, geo: { ...this.state.geo, lng: event.target.value } }
                    }
                })
                break;
            case 'phone':
                this.setState({
                    userData: {
                        ...this.state.userData, phone: event.target.value
                    }
                })
                break;
            case 'website':
                this.setState({
                    userData: {
                        ...this.state.userData, website: event.target.value
                    }
                })
                break;
            case 'companyname':
                this.setState({
                    userData: {
                        ...this.state.userData,
                        company: { ...this.state.company, name: event.target.value }
                    }

                })
                break;
            case 'catchprase':
                this.setState({
                    userData: {
                        ...this.state.userData,
                        company: { ...this.state.company, catchPhrase: event.target.value }
                    }

                })
                break;
            case 'bs':
                this.setState({
                    userData: {
                        ...this.state.userData,
                        company: { ...this.state.company, bs: event.target.value }
                    }

                })
                break;
            default:
                break;


        }
    }

    handleSubmit = async(event) => {
        event.preventDefault();
        console.log(this.state.userData)
        await this.props.addUser(this.state.userData)
        await this.props.fetchUsers();

    }

    showForm = () => {
        const lat = (this.state.userData.address.geo ? this.state.userData.address.geo.lat:'')
        const lng = (this.state.userData.address.geo ? this.state.userData.address.geo.lng:'')
        return (
            <div>
                <form onSubmit={this.handleSubmit} >

                    <label>Name: </label>
                    <input type="text" value={this.state.userData.name}
                        name='name'
                        onChange={this.handleChange}
                        placeholder='name'
                    />
                    <label>User Name : </label>
                    <input type="text" placeholder='username'
                        name='username'
                        value={this.state.userData.username} onChange={this.handleChange}
                    />
                    <label>Email : </label>
                    <input type="email" placeholder='email' name='email'
                        value={this.state.userData.email} onChange={this.handleChange}
                    />
                    <h2>Address:</h2>
                    <label>Street: </label>
                    <input type="text" placeholder='street' name='street'
                        value={this.state.userData.address.street} onChange={this.handleChange}
                    />
                    <label>Suite: </label>
                    <input type="text" placeholder='suite' name='suite'
                        value={this.state.userData.address.suite} onChange={this.handleChange}
                    /><br />
                    <label>City </label>
                    <input type="text" placeholder='city' name='city'
                        value={this.state.userData.address.city} onChange={this.handleChange}
                    />
                    <label>Zipcode: </label>
                    <input type="number" placeholder='zipcode' name='zipcode'
                        value={this.state.userData.address.zipcode} onChange={this.handleChange}
                    /><br />
                    <label>Latitude: </label>
                    <input type="number" placeholder='latitude' name='latitude'
                        value={lat} onChange={this.handleChange}
                    />
                    <label>Longitude: </label>
                    <input type="number" placeholder='longitude' name='longitude'
                        value={lng} onChange={this.handleChange}
                    />
                    <label>Phone: </label>
                    <input type="number" placeholder='phone number' name='phone'
                        value={this.state.userData.phone} onChange={this.handleChange}
                    />
                    <label>Website: </label>
                    <input type="text" placeholder='website' name='website'
                        value={this.state.userData.website} onChange={this.handleChange}
                    />

                    <h4>Company</h4>
                    <label>Company Name: </label>
                    <input type="text" placeholder='Enter company name' name='companyname'
                        value={this.state.userData.company.name} onChange={this.handleChange}
                    />
                    <label>CatchPhrase: </label>
                    <input type="text" placeholder='Enter catchphrase' name='catchphrase'
                        value={this.state.userData.company.catchPhrase} onChange={this.handleChange}
                    />
                    <label>Bs: </label>
                    <input type="text" placeholder='enter bs' name='bs'
                        value={this.state.userData.company.bs} onChange={this.handleChange}
                    />

                    <button>Add User</button>
                </form>
            </div>
        );
    }
    render() {
        return (
            <div>

                <button type="button" onClick={() => this.setState({ showForm: true })}>Add User</button>

                {this.state.showForm ? this.showForm() : null}
            </div>
        )
    }
}
export default connect(null, { addUser, fetchUsers })(AddUserData);
