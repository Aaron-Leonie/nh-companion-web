import React from 'react';
import router from 'next/router';
import { Auth } from '../../../firebase';

interface AuthState {
  status: string,
  user: any,
}

export const UserConext = React.createContext(null);

export const withAuth = (Component) => {
  return class extends React.Component {
    
    state: AuthState;
    
    constructor(props) {
      super(props);
      this.state = {
      status: 'LOADING',
      user: null,
    }
  }
    componentDidMount() {
      Auth.onAuthStateChanged(authUser => {
        if(authUser) {
          this.setState({
            status: 'SIGNED_IN',
            user: authUser
          });
        } else {
          router.push('/');
        }
      });
    }

    // TODO: Pass user as property or create context
    renderContent() {
      const status = this.state.status;
      if(status == 'LOADING') {
        return <div></div>;
      } else if(status == 'SIGNED_IN') {
        return (
          <UserConext.Provider value={this.state.user}>
            <Component { ...this.props } />
          </UserConext.Provider>
        )
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