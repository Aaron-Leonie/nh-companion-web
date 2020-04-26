import React from 'react';
import router from 'next/router';
import { Auth } from '../firebase';

interface authState {
    status: string
}

const withAuth = (Component) => {
    return class extends React.Component {

        state: authState;

        constructor(props) {
            super(props);
            this.state = {
                status: 'LOADING',
            }
        }

        componentDidMount() {
            Auth.onAuthStateChanged(authUser => {
                console.log(authUser);
                if(authUser) {
                    this.setState({
                    status: 'SIGNED_IN'
                });
                }else {
                    router.push('/');
                }
            });
        }

        renderContent() {
            const { status } = this.state;
            if(status == 'LOADING') {
                return (<h1>Loading ......</h1>);
            }else if(status == 'SIGNED_IN') {
                return (<Component { ...this.props } />);
            }
        }

        render() {
            return (
            <React.Fragment>
                {this.renderContent()}
            </React.Fragment>
            );
        }
        
    };
}

export default withAuth;