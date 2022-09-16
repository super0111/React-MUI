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
                    {/* <div className="group-div62">
                        <div className="group-div63">
                            <div className="message-div">Message</div>
                            <TextField
                                className="rectangle-textfield"
                                sx={{ width: 440 }}
                                color="primary"
                                variant="outlined"
                                type="text"
                                // placeholder="What would you like to say?"
                                size="medium"
                                margin="none"
                                required
                            />
                            <div className="what-would-you-like-to-say">
                                What would you like to say ?
                            </div>
                        </div>
                    </div>
                    <div className="group-div64">
                        <Button
                            className="group-button3"
                            sx={{ width: 440 }}
                            variant="contained"
                            color="success"
                            href="/submit-feedback"
                        >
                            Contact Us
                        </Button>
                    </div>
                    <div className="group-div65">
                        <div className="email-div">Email</div>
                        <TextField
                            className="rectangle-textfield"
                            sx={{ width: 440 }}
                            color="primary"
                            variant="outlined"
                            type="email"
                            // placeholder="Enter your email"
                            size="medium"
                            margin="none"
                            required
                        />
                        <div className="enter-your-email">Enter your email</div>
                    </div>
                    <div className="group-div67">
                        <div className="email-div">Name</div>
                        <TextField
                            className="rectangle-textfield"
                            sx={{ width: 440 }}
                            color="primary"
                            variant="outlined"
                            type="text"
                            // placeholder="Enter your name"
                            size="medium"
                            margin="none"
                            required
                        />
                        <div className="enter-your-email">Enter your name</div>
                    </div>  */}
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