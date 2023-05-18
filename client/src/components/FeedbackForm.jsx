import React from 'react';
import { TextField, Button } from "@mui/material";

import axios from 'axios';

export class FeedbackForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        axios({
            method: "POST",
            url: "http://localhost:8000/api/clients-feedback",
            data: this.state
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert("Sorry, we are facing an issue. Please try again later.")
            }
        }).catch((error) => {
            alert("Sorry, we are facing an issue. Please try again later.")
            console.log("Feeback form submit error:", error)
        })
    }

    resetForm() {
        this.setState({ name: '', email: '', message: '' })
    }

    render() {
        return (
            <div className="App">
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="group-div67">
                        <label htmlFor="name" className="email-div">Name</label>
                        <input type="text" className="rectangle-textfield" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} placeholder="Enter your name" required />
                    </div>
                    <div className="group-div65">
                        <label htmlFor="email" className="email-div">Email</label>
                        <input type="email" className="rectangle-textfield" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} placeholder="Enter your email" required />
                    </div>
                    <div className="group-div62">
                        <div className="group-div63">
                            <label htmlFor="message" className="message-div">Message</label>
                            <textarea className="rectangle-textfield" rows="3" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} placeholder="What would you like to say?" required />
                        </div>
                    </div>
                    <button type="submit" className="group-button3">Contact Us</button>
                </form>
            </div>
        );
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }
}