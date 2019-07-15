import axios from 'axios';

export function mralexgrayService() {
    return (dispatch) => {
        return axios.get(`https://api.github.com/users/mralexgray/repos`)
            .then(function (response) {
                console.log('mralexgrayService Details', response.data);
                const mralexgrayDetails = getMralexgrayMapping(response.data)
                console.log('mralexgrayService Details model', mralexgrayDetails);
                dispatch({ type: 'MRA_DETAILS', payload: { data: mralexgrayDetails } });
            })
            .catch(function (error) {
                console.log('error hotelLandingPageDetails', error.message);
                console.log('Request Response For Home Screen Details Failed');
                alert('Web:', error.message);

            });
    }
}

const getMralexgrayMapping = (dataObj) => {
    return {
        dlist: dataObj.map((item) => {
            return ({
                name: item.full_name,
                objId: item.owner.id,
            });
        }),
    }
}