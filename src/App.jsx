import React, { Component } from 'react';
import axios from 'axios'
import './App.css'
import Select from 'react-select'

const options = [
  { value: 'it', label: 'IT' },
  { value: 'moving-and-transport', label: 'Moving & Transport' },
  { value: 'construction-and-renovation', label: 'Construction & Renovation' },
];
const startOptions = [
  { value: 'as-soon-as-possible', label: 'As soon as possible' },
  { value: 'within-one-month', label: 'Within 1 month' },
  { value: 'within-two-months', label: 'Within two months' }
];

class App extends Component {
    constructor() {
        super()
        this.state = {
            subCategory: "",
            start: "",
            title: "",
            description: "",
            fullName: "",
            phone: "",
            email: ""
        }
        this.changeTitle = this.changeTitle.bind(this)
        this.changeDescription = this.changeDescription.bind(this)
        this.changeFullName = this.changeFullName.bind(this)
        this.changePhone = this.changePhone.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    changeTitle(e) {
        this.setState({
            title:e.target.value
        })
    }
    changeDescription(e) {
        this.setState({
            description:e.target.value
        })
    }
    changeFullName(e) {
        this.setState({
            fullName:e.target.value
        })
    }
    changePhone(e) {
        this.setState({
            phone:e.target.value
        })
    }
    changeEmail(e) {
        this.setState({
            email:e.target.value
        })
    }
    changeSubCategory = category => {
        this.setState({
            subCategory:category.value
        })
    };
    changeStart = startJob => {
        this.setState({
            start:startJob.value
        })
    };

    onSubmit(e) {
        e.preventDefault()

        const inquirieSubmitted = {
            subCategory: this.state.subCategory,
            start: this.state.start,
            title: this.state.title,
            description: this.state.description,
            fullName: this.state.fullName,
            phone: this.state.phone,
            email: this.state.email
        }
        axios.post('http://localhost:4000/app/inquirie', inquirieSubmitted)
            .then(res => {console.log(res.data)})

            this.setState({
                subCategory: "",
                start: "",
                title: "",
                description: "",
                fullName: "",
                phone: "",
                email: ""
            })
    }

    render() {
        const { category } = this.state;
        const { startJob } = this.state;
        return (
            <>
                <form className='formContainer'>
                        <h2>New Inquiries</h2>
                        <h3>Details</h3>
                    <div className='selectContainer'>
                        <label htmlFor="">Sub Category</label>
                        <Select
                            className='select'
                            value={category}
                            onChange={this.changeSubCategory}
                            options={options}
                        />
                    </div>
                    <div className='selectContainer'>
                        <label htmlFor="">Start</label>
                        <Select
                            className='select'
                            value={startJob}
                            onChange={this.changeStart}
                            options={startOptions}
                        />
                    </div>
                    <div>
                        <label htmlFor="fullName">Name</label>
                        <input 
                            type='text'
                            id='fullName'
                            onChange={this.changeFullName}
                            value={this.state.fullName} 
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input 
                            type='number'
                            id='phone'
                            onChange={this.changePhone}
                            value={this.state.phone} 
                        />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input 
                            type='text'
                            id='email'
                            onChange={this.changeEmail}
                            value={this.state.email} 
                        />
                    </div>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input 
                            type='text'
                            id='title'
                            onChange={this.changeTitle}
                            value={this.state.title} 
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <input 
                            type='text'
                            id='description'
                            onChange={this.changeDescription}
                            value={this.state.description} 
                        />
                    </div>
                    <div className='formButtons'>
                        <button onClick={this.onSubmit} type="submit" value="submit">POST INQUIRIES</button>
                        <button>CANCEL</button>
                    </div>
                    
                </form>
            </>
        );
    }
}

export default App;