import axios from 'axios';
import store from '../Store';

export function empDetailsService() {
    return (dispatch) => {
        return axios.get(`https://reqres.in/api/users?page=2`)
            .then(function (response) {
                console.log('Employee Details', response.data);
                const empDetails = getEmpDetailsMapping(response.data)
                // store.dispatch({ type: 'EMP_DETAILS', payload: { data: empDetails } });
                dispatch({ type: 'EMP_DETAILS', payload: { data: empDetails } });
            })
            .catch(function (error) {
                console.log('error hotelLandingPageDetails', error.response);
                console.log('Request Response For Home Screen Details Failed');
                alert('Web Service Failure')
            });
    }
}

const getEmpDetailsMapping = (dataObj) => {
    return {
        page: dataObj.page,
        list: dataObj.data.map((item) => {
            return ({
                email: item.email,
                name: item.first_name,
                lastName: item.last_name,
                image: item.avatar
            });
        }),
    }
}