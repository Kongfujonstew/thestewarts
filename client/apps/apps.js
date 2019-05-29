import { loadPrivateData } from '../queries';
import { loadAdminData } from '../queries';
import { loadPublicData } from '../queries';


export const publicApp = {
  title: 'Public',
  doThis: (instance, props) => {
    instance.state = {...props.data};
    instance.componentDidMount = () => { console.log('Public cdm') };
    instance.reload = async() => {
      const data = await loadPublicData();
      data && instance.setState({...data});
    };

    instance.app = {
      closeSnackbar: props.closeSnackbar,
      enqueueSnackbar: props.enqueueSnackbar,
      reload: instance.reload,
      setAppState: instance.setState
    }
  }
};

export const privateApp = {
  title: 'Private',
  doThis: (instance, props) => {
    instance.state = {...props.data};
    instance.componentDidMount = () => { console.log('Prviate cdm') };
    instance.reload = async() => {
      const data = await loadPrivateData();
      data && instance.setState({...data});
    };

    instance.app = {
      closeSnackbar: props.closeSnackbar,
      enqueueSnackbar: props.enqueueSnackbar,
      reload: instance.reload,
      setAppState: instance.setState
    }
  }
};

export const adminApp = {
  title: 'Admin',
  doThis: (instance, props) => {
    instance.state = {...props.data};
    instance.componentDidMount = () => { console.log('Admin cdm') };
    instance.reload = async() => {
      const data = await loadAdminData();
      // BAD MUST USE ORIGINAL here
      data && instance.setState({...data});
    };

    instance.app = {
      closeSnackbar: props.closeSnackbar,
      enqueueSnackbar: props.enqueueSnackbar,
      reload: instance.reload,
      setAppState: instance.setState
    }
  }
};
